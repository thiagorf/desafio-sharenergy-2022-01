import { Stack, TextField} from "@mui/material"
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker/DesktopDatePicker";
import { useEffect, useState } from "react";
import { DateRangeParams } from "../../shared/types";

interface SetDateRange {
    handleRange: (dateRange: DateRangeParams) => void
}

export const DateRange = ({ handleRange }: SetDateRange) => {
    const [dateRange, setDateRange] = useState<DateRangeParams>({
        publishedAt_lte: null,
        publishedAt_gte: null
    })

    useEffect(() => {
        handleRange(dateRange)

    }, [dateRange])

    return (
        <Stack direction="row" sx={{width: "100%", mb: 1}}>
            <DesktopDatePicker   
                label="De"
                inputFormat="MM/dd/yyyy"
                value={dateRange.publishedAt_gte}
                onChange={(date) => setDateRange({...dateRange, publishedAt_gte: date})}
                
                renderInput={(params) => <TextField {...params} />}
            />
            <DesktopDatePicker
                label="Até"
                inputFormat="MM/dd/yyyy"
                value={dateRange.publishedAt_lte}
                onChange={(date) => setDateRange({...dateRange, publishedAt_lte: date})}
                
                renderInput={(params) => <TextField {...params} />}
            />
        </Stack>
    )
}