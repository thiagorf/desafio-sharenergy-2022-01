import { Route, Routes } from "react-router-dom"
import { Articles } from "../../pages/Articles"



export const RouteContentHandler = () => {
    return (
        <Routes>
            <Route path="/" element={<Articles />}/>
        </Routes>
    )
}