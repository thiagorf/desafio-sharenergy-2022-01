import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { FormHandler } from '../../FormHandler';
import { SelectRowRange } from '../../SelectRowRange';

const FiltersContainer = styled(Stack)({
    display: "flex",
    padding: "1rem",
    gap: "1rem",
    maxWidth: "28rem",
})


export const FilterContainer = () => {
    return (
        <FiltersContainer sx={{flex: {md: 1}, mb: "1rem"}}>
            <Box sx={{width: "100", maxWidth: "26rem", display: {xs: "none", sm: "block"}, height: {xs: "240px"}}}>
                <SelectRowRange />   
                <FormHandler />
            </Box>
            <Accordion sx={{ display: {sm: "none"}, mb: "1rem"}}>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
        >
          <Typography>Menu</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Box sx={{width: "100", maxWidth: "26rem"}}>
                <SelectRowRange />   
                <FormHandler />
            </Box>
        </AccordionDetails>
      </Accordion>
        </FiltersContainer>
    )
}