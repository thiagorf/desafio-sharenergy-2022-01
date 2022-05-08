import { Route, Routes } from "react-router-dom"
import { ArticleDetail } from "../../pages/ArticleDetail"
import { Articles } from "../../pages/Articles"

export const RouteContentHandler = () => {
    return (
        <Routes>
            <Route path="/" element={<Articles />}/>
            <Route path="/:id" element={<ArticleDetail />} />
        </Routes>
    )
}