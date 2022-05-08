import { useContext, useEffect } from "react"
import { ContentTable } from "../../components/ContentTable"
import { getContent } from "../../services/newsApi"
import { MainContext } from "../../context/main-content-context"

export const Articles = () => {

    const { queryString, setNews } = useContext(MainContext)

    useEffect(() => {
        async function latest() {
            const response = await getContent(queryString)

            setNews(response)
        }

        latest()
    }, [queryString._limit])


    return <ContentTable />
}