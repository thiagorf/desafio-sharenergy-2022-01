import React, { createContext, useEffect, useState } from "react"
import { getLatestArticles, getNextNews, getNextNewsMatch } from "../services/newsApi"
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
    setInput: React.Dispatch<React.SetStateAction<string>>
    quantity?: string;
    setQuantity?: React.Dispatch<React.SetStateAction<string>>
}

export const MainContext = createContext<ContentProps | null>(null)


export const MainContentContext = ({children}: MainConentContextProps) => {
    const [news, setNews] = useState<NewsResponse[]>([])
    const [input, setInput] = useState("")
    const [page, setPage] = useState(1)
    const [quantity, setQuantity] = useState("10")

    //currying?
    const nextQty = getNextNews(quantity)
    const nextQtyMatch = getNextNewsMatch(quantity, input)


    const handleChangePageData = async (
        newPage: number,
      ) => {
        if(!input) {
            const response = await nextQty(Number(quantity) * newPage)

            setNews(response)
        } else {
            const response = await nextQtyMatch(Number(quantity) * newPage)
            console.log(response);
            
            setNews(response)
        }
        
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
        setInput,
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