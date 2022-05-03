import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface RowRangeProps {
    quantity: string;
    setQuantity: React.Dispatch<React.SetStateAction<string>>
}

export const SelectRowRange = ({quantity, setQuantity}: RowRangeProps) => {

    const handleChange = (event: SelectChangeEvent) => {
        setQuantity(event.target.value as string)
    }

    return (
        <FormControl fullWidth>
            <InputLabel id="range-select">Rows Per Page</InputLabel>
            <Select
                labelId="drange-select"
                id="demo-simple-select"
                value={quantity}
                label="Age"
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