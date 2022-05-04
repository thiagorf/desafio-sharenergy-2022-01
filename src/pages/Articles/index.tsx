import { useContext, useEffect } from "react"
import { ContentTable } from "../../components/ContentTable"
import { getLatestArticles} from "../../services/newsApi"
import { MainContext } from "../../context/main-content-context"

export const Articles = () => {

    const { quantity, setNews } = useContext(MainContext)

    useEffect(() => {
        async function latest() {
            const response = await getLatestArticles(quantity)

            setNews(response)
        }

        latest()
    }, [quantity])


    return (
        <>
            <h1>teste</h1>
            <ContentTable />
        </>
        
    )
}