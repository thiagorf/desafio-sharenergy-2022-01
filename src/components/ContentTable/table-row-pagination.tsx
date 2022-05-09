import Pagination from "@mui/material/Pagination"
import Stack from "@mui/material/Stack"
import TableCell from "@mui/material/TableCell"
import TableFooter from "@mui/material/TableFooter"
import TableRow from "@mui/material/TableRow"
import { useContext, useEffect } from "react"
import { MainContext } from "../../context/main-content-context"
import { getContentCount, getTotalCount } from "../../services/newsApi"

export const TableRowPagination = () => {

    const { 
        page, 
        setPage, 
        defineNumberOfPages, 
        handleChangePageData, 
        setTotalPageCount,
        queryString
    } = useContext(MainContext)

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        
        handleChangePageData(value - 1)
    };
      

    useEffect(() => {
        async function getTotalPageCount () {
            const response = await getContentCount(queryString);
     
            setTotalPageCount(response)
        }
        getTotalPageCount()
    }, [queryString])


    return (
        <TableFooter>
            <TableRow>
                <TableCell>
                    <Stack spacing={2}>
                        <Pagination count={defineNumberOfPages()} page={page} onChange={handleChange} />
                    </Stack>
                </TableCell>
            </TableRow>
        </TableFooter>
    )
} 