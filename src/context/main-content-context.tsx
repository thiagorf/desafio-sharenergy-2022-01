import React, { createContext, useCallback, useEffect, useState } from "react"
import { getContent, getContentCount } from "../services/newsApi"
import { NewsResponse, QueryParams } from "../shared/types"

interface MainConentContextProps {
    children: React.ReactNode
}

interface ContentProps {
    news: NewsResponse[]
    handleChangePageData?: (pageNumber: number) => Promise<void>
    page: number
    setPage: React.Dispatch<React.SetStateAction<number>>
    setNews: React.Dispatch<React.SetStateAction<NewsResponse[]>>
    queryString: QueryParams
    setQueryString: React.Dispatch<React.SetStateAction<QueryParams>>
    setTotalPageCount: React.Dispatch<React.SetStateAction<number>>
    defineNumberOfPages: () => number
    handleQueryString: (newValue: any) => void
    toggleLoading: (laod: boolean) => void
    loading: boolean
}

export const MainContext = createContext<ContentProps | null>(null)

export const MainContentContext = ({children}: MainConentContextProps) => {
    const [news, setNews] = useState<NewsResponse[]>([])
    const [page, setPage] = useState(1)
    const [totalPageNumbers, setTotalPageCount] = useState(0)
    const [loading, setLoading] = useState(false)
    const [queryString, setQueryString] = useState<QueryParams>({
        _limit: "10",
        _start: 0,
        title_contains: null,
        publishedAt_lte: null,
        publishedAt_gte: null
    })

    const toggleLoading = (load: boolean) => {
        setLoading(load)
    }

    const handleQueryString = (newValue: any) => {
        setQueryString(oldValue => ({...oldValue, ...newValue}))
    }

    
    const defineNumberOfPages = () => {
        return (Math.floor(totalPageNumbers / Number(queryString._limit))) 
    }

    const handleChangePageData = async (
        newPage: number,
    ) => {
        const response = await getContent({...queryString, _start: Number(queryString._limit) * newPage})
        
        setNews(response)
    };

    useEffect(() => {
        async function latest() {
                if(loading) {
                const response = await getContent(queryString)
                const resultlength = await getContentCount(queryString)
                setPage(1)
                setTotalPageCount(resultlength) 
                setNews(response) 
                setLoading(false)      
            }
            return
        }
        latest()
    },[loading])

    const tableProps = {
        toggleLoading,
        loading,
        news,
        setQueryString,
        setTotalPageCount,
        defineNumberOfPages,
        queryString,
        setNews,
        handleChangePageData,
        page,
        setPage,
        handleQueryString
    }

    return (
        <MainContext.Provider  value={tableProps}>
            {children}
        </MainContext.Provider>
    )
}