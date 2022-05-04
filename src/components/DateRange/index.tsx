import { Paper, InputBase, IconButton, Box} from "@mui/material"
import DateRangeIcon from '@mui/icons-material/DateRange';
import { useState } from "react";

interface DateRangeData {
    begins_at: string
    ends_at: string
}

export const DateRange = () => {

    const [dateRange, setDateRange] = useState<DateRangeData>({
        begins_at: "",
        ends_at: ""
    })
    console.log(dateRange);
    

    

    return (
        <>
            <Paper
                component="div"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 200 }}
            >
                <Box sx={{fontSize: '1rem'}}>De</Box>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="20/10/2000"
                    inputProps={{ 'aria-label': 'search google maps' }}
                    onChange={(e) => setDateRange({...dateRange, begins_at: e.target.value})}
                />
                <IconButton sx={{ p: '10px' }} aria-label="search">
                    <DateRangeIcon />
                </IconButton>
            </Paper>   
            <Paper
                component="div"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 200 }}
            >
                <Box sx={{fontSize: '1rem'}}>Até</Box>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="20/10/2000"
                    inputProps={{ 'aria-label': 'search google maps' }}
                    onChange={(e) => setDateRange({...dateRange, ends_at: e.target.value})}
                />
                <IconButton sx={{ p: '10px' }} aria-label="search">
                    <DateRangeIcon />
                </IconButton>
            </Paper>   
        </>
    )
}