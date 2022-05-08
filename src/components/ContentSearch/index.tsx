import TextField from '@mui/material/TextField';
import React from "react"

interface SearchProps {
    handle: (text: string) => void
}

export const ContentSearch = ({ handle}: SearchProps) => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handle(event.target.value)
    }

    return (
        <TextField
                sx={{ flex: 1, mb: 1 }}
                placeholder="Procure um titulo"
                onChange={handleChange}
            />
    )
}