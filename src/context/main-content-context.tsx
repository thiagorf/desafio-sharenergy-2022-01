import React, { createContext, useEffect, useState } from "react"
import { getLatestArticles, getNextNews } from "../services/newsApi"
import { NewsResponse } from "../shared/types"

interface MainConentContextProps {
    children: React.ReactNode
}

interface ContentProps {
    news: NewsResponse[]
    handleChangePageData?: (pageNumber: number) => Promise<void>
    page: number
    setPage: React.Dispatch<React.SetStateAction<number>>
    setNews: React.Dispatch<React.SetStateAction<NewsResponse[]>>
    quantity?: string;
    setQuantity?: React.Dispatch<React.SetStateAction<string>>
}

export const MainContext = createContext<ContentProps | null>(null)


export const MainContentContext = ({children}: MainConentContextProps) => {
    const [news, setNews] = useState<NewsResponse[]>([])
    const [page, setPage] = useState(1)
    const [quantity, setQuantity] = useState("10")

    //currying?
    const nextQty = getNextNews(quantity)

    const handleChangePageData = async (
        newPage: number,
      ) => {
        const response = await nextQty(Number(quantity) * newPage)

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
        setNews,
        handleChangePageData,
        page,
        setPage,
        quantity,
        setQuantity
    }

    return (
        <MainContext.Provider  value={tableProps}>
            {children}
        </MainContext.Provider>
    )
}