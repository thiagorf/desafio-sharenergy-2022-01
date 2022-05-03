import { useEffect, useState } from "react"
import { ContentTable } from "../../components/ContentTable"
import { getLatestArticles, getNextArticles, getNextNews } from "../../services/newsApi"
import { NewsResponse } from "../../shared/types"

export const Articles = () => {
    const [news, setNews] = useState<NewsResponse[]>([])
    const [page, setPage] = useState(1)
    const [quantity, setQuantity] = useState("10")
    console.log(quantity)

    //currying?
    const nextQty = getNextNews(quantity)

    const handleChangePageData = async (
        newPage: number,
      ) => {
        const response = await nextQty(10 * newPage)

        setNews(response)
      };

    useEffect(() => {
        async function latest() {
            const response = await getLatestArticles(quantity)

            setNews(response)
        }

        latest()
    }, [quantity])

    const tableProps = {
        news,
        handleChangePageData,
        page,
        setPage,
        quantity,
        setQuantity
    }


    return (
        <>
            <h1>teste</h1>
            <ContentTable {...tableProps}/>
        </>
        
    )
}