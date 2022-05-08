import TableCell from "@mui/material/TableCell"
import TableRow from "@mui/material/TableRow"
import { useNavigate } from "react-router-dom";
import { dateFormat } from "../../shared/date"

interface ArticleRowContent {
    id: number;
    title: string;
    publishedAt: string
}

export const TableRowContent = (article : ArticleRowContent) => {

    const navigate = useNavigate();

    return (
        <TableRow
            onClick={() => navigate(`/${article.id}`)}
            sx={{
                "&:hover": {
                    cursor: "pointer"
                }
            }}
        >
            <TableCell>{article.title}</TableCell> 
            <TableCell>{dateFormat(article.publishedAt)}</TableCell>
        </TableRow>
    )
}