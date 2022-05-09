import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useContext } from 'react';
import { MainContext } from '../../context/main-content-context';

export const SelectRowRange = () => {

    const { setQueryString, queryString, toggleLoading } = useContext(MainContext)

    const handleChange = (event: SelectChangeEvent) => {
        toggleLoading(true)
        setQueryString({...queryString, _limit: event.target.value as string})
    }

    return (
        <FormControl sx={{
            width: '100%',
            mb: 1
        }}>
            <InputLabel id="range-select">Colunas por página</InputLabel>
            <Select
                id="range-select"
                value={queryString._limit}
                label="Colunas por página"
                onChange={handleChange}
                
            >
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={25}>25</MenuItem>
                <MenuItem value={50}>50</MenuItem>
                <MenuItem value={100}>100</MenuItem>
            </Select>
        </FormControl>
    )
}