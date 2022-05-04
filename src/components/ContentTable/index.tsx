import { 
    Table, TableBody, TableCell, TableContainer, 
    TableFooter, TableRow, Stack, Pagination, TableHead 
} from "@mui/material"
import React, { useContext, useEffect, useState }  from "react"
import { MainContext } from "../../context/main-content-context"
import { getTotalCount } from "../../services/newsApi"
import { dateFormat } from "../../shared/date"
import { ContentSearch } from "../ContentSearch"
import { SelectRowRange } from "../SelectRowRange"


export const ContentTable = () => {

    const [totalPageNumbers, setTotalPageCount] = useState(0)

    const { 
        news,
        page, 
        setPage, 
        quantity, 
        handleChangePageData 
    } = useContext(MainContext)
    
    
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        handleChangePageData(value - 1)
    };
    
    
    const defineNumberOfPages = () => {
        return (Math.floor(totalPageNumbers / Number(quantity))) 
    }


    useEffect(() => {
        async function getTotalPageCount () {
            const response = await getTotalCount();

            setTotalPageCount(response)
        }
        getTotalPageCount()
    }, [])


    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <SelectRowRange/>
                            <ContentSearch updatePageCount={setTotalPageCount}/>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {news.length === 0 && 
                        <TableRow>
                            <TableCell>
                                Nenhum Resultado Encontrado
                            </TableCell>
                        </TableRow>
                    }
                    {news.map(article => (
                        <TableRow key={article.id}>
                            <TableCell>{article.title}</TableCell> 
                            <TableCell>{dateFormat(article.publishedAt)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                {news.length > 0 && 
                <TableFooter>
                    <TableRow>
                        <TableCell>
                            <Stack spacing={2}>
                                <Pagination count={defineNumberOfPages()} page={page} onChange={handleChange} />
                            </Stack>
                        </TableCell>
                    </TableRow>
                </TableFooter>
                }
            </Table>
        </TableContainer>

    )
}