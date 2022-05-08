import { FormGroup, Button, Stack, Typography } from "@mui/material"
import React, { useContext, useState } from "react"
import { MainContext } from "../../context/main-content-context"
import SearchIcon from "@mui/icons-material/Search"
import { DateRangeParams, SearchParams } from "../../shared/types"
import { ContentSearch } from "../ContentSearch"
import { DateRange } from "../DateRange"
import { idealDateFormat } from "../../utils/isoDate"


export const FormHandler = () => {

    const [formData, setFormData] = useState<SearchParams>({
        title_contains: null,
        publishedAt_lte: null,
        publishedAt_gte: null
    })
    
    const {
        toggleLoading,
        handleQueryString
    } = useContext(MainContext)

    const handleSubmit = async (event: React.SyntheticEvent) => {
        event.preventDefault()

        const idealResponseFormat = {
            ...formData,
            publishedAt_lte: idealDateFormat(formData.publishedAt_lte),
            publishedAt_gte: idealDateFormat(formData.publishedAt_gte)
        }

        handleQueryString(idealResponseFormat)
        toggleLoading(true)
  
    }

    const handleFormInput = (text: string) => {
        setFormData(oldValue => ({...oldValue, title_contains: text}))
    }

    const handleFormDataRange = (dateRange: DateRangeParams) => {
        setFormData(oldValue => ({...oldValue, ...dateRange}))
    }

    return (
        <FormGroup>
            <Stack>
                <DateRange handleRange={handleFormDataRange}/>
                <ContentSearch handle={handleFormInput}/>                               
                <Button
                    variant="contained"
                    endIcon={<SearchIcon />} 
                    type="submit"  
                    sx={{ p: '10px', backgroundColor: "#2e8bc0" }} 
                    aria-label="search" 
                    onClick={handleSubmit}
                >
                    Pesquisar 
                </Button>
            </Stack>
        </FormGroup>
    )
}