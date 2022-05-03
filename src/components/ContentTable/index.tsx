import { 
    Table, TableBody, TableCell, TableContainer, 
    TableFooter, TableRow, Stack, Pagination, TablePagination, TableHead 

} from "@mui/material"
import React, { useState }  from "react"
import { dateFormat } from "../../shared/date"
import { NewsResponse } from "../../shared/types"
import { SelectRowRange } from "../SelectRowRange"

interface ContentProps {
    news: NewsResponse[]
    handleChangePageData?: (pageNumber: number) => Promise<void>
    page: number
    setPage: React.Dispatch<React.SetStateAction<number>>
    quantity?: string;
    setQuantity?: React.Dispatch<React.SetStateAction<string>>
}


export const ContentTable = ({
    news, 
    handleChangePageData, 
    page, 
    setPage, 
    quantity, 
    setQuantity}: ContentProps) => {

    const selectProps = {
        quantity,
        setQuantity
    }

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        handleChangePageData(value - 1)
      };
    
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <SelectRowRange {...selectProps}/>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {news.map(article => (
                        <TableRow key={article.id}>
                            <TableCell>{article.title}</TableCell> 
                            <TableCell>{dateFormat(article.publishedAt)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell>
                            <Stack spacing={2}>
                                <Pagination count={10} page={page} onChange={handleChange} />
                            </Stack>
                        </TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>

    )
}