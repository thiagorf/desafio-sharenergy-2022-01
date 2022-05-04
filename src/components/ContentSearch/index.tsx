import { IconButton, InputBase, Paper } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import React, { useContext, useState } from "react"
import { MainContext } from "../../context/main-content-context"
import { getTotalSearchCount, searchForArticle } from "../../services/newsApi"

interface ContentSearchProps {
    updatePageCount:  React.Dispatch<React.SetStateAction<number>>
}

export const ContentSearch = ({ updatePageCount }: ContentSearchProps) => {
    const [inputText, setInputText] = useState("")

    const { setNews, setInput } = useContext(MainContext)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value)
        
    }

    const handleSearch = async (event: React.SyntheticEvent) => {
        if(!inputText) {
            return
        }
        
        setInput(inputText)
        const response = await searchForArticle(inputText)
        const textMatchesCount = await getTotalSearchCount(inputText)

        setNews(response)
        updatePageCount(textMatchesCount)

    }

    return (
        <>
            <Paper
                component="div"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search a title"
                    inputProps={{ 'aria-label': 'search google maps' }}
                    onChange={handleChange}
                />
                <IconButton sx={{ p: '10px' }} aria-label="search" onClick={handleSearch}>
                    <SearchIcon />
                </IconButton>
            </Paper>     
        </>
    )
}