import { 
    Table, TableBody, TableCell, TableContainer, 
    TableRow, Stack, CircularProgress,
} from "@mui/material"
import { useContext }  from "react"
import { MainContext } from "../../context/main-content-context"
import { FilterContainer } from "./CustomComponents/filter-container"
import { TableRowContent } from "./table-row-content"
import { TableRowPagination } from "./table-row-pagination"

export const ContentTable = () => {

    const { 
        loading,
        news,
    } = useContext(MainContext)
    
    return (
        <>
        <Stack sx={{ 
            display: "flex",
            flexDirection: { sm: "column", md: "row"},
            overflowY: "auto", 
            height: "100%"
        }}>    
            <FilterContainer />
            {loading ? <CircularProgress sx={{
                alignSelf: {md: "center"},
                margin: "auto",
            }}/> :
            <TableContainer sx={{
                flex: 2
              }}>
                <Table>
                    <TableBody>
                        {news.length === 0 && 
                            <TableRow>
                                <TableCell>
                                    Nenhum Resultado Encontrado
                                </TableCell>
                            </TableRow>
                        }
                        {news.map(article => <TableRowContent key={article.id} {...article}/>)}
                    </TableBody>
                        {news.length > 0 && <TableRowPagination />}
                </Table>
            </TableContainer>
            }
        </Stack>    
        </>
    )
}