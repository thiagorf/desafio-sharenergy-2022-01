import { 
    Table, TableBody, TableCell, TableContainer, 
    TableFooter, TableRow, Stack, Pagination, TablePagination, TableHead 

} from "@mui/material"
import React, { useContext, useState }  from "react"
import { MainContext } from "../../context/main-content-context"
import { dateFormat } from "../../shared/date"
import { NewsResponse } from "../../shared/types"
import { SelectRowRange } from "../SelectRowRange"


export const ContentTable = () => {

    const { news, page, setPage, handleChangePageData } = useContext(MainContext)
    

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
                            <SelectRowRange/>
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