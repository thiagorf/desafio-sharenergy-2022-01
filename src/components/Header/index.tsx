import { AppBar, Box, Button, IconButton, Link, styled, Toolbar, Typography } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useNavigate } from "react-router-dom"

const AppHeader = styled(AppBar)({
    backgroundColor: "#2e8bc0",
    marginBottom: "1rem",
    position: "sticky",
    top: 0
})

export const Header = () => {

    const navigate = useNavigate();

    return (
        <Box>
            <AppHeader>
                <Toolbar>
                <Typography 
                    variant="h5" 
                    component="div" 
                    sx={{ 
                        flexGrow: 1,
                        "&:hover": {
                            cursor: "pointer"
                        } 
                    }} 
                    onClick={() => navigate("/")}>
                    Spaceflight News
                </Typography>
               
                <Link 
                    href="https://github.com/thiagorf/desafio-sharenergy-2022-01/tree/thiago-ribeiro-farciroli" 
                    target="_blank" rel="noopener" 
                    underline="none"
                    >
                    <IconButton sx={{ color: "#FFF" }}>
                        <GitHubIcon />
                    </IconButton>
                </Link>
                <Link 
                    href="https://www.linkedin.com/in/thiago-rf/" 
                    target="_blank" rel="noopener" 
                    underline="none">
                    <IconButton sx={{ color: "#FFF" }}>
                        <LinkedInIcon />
                    </IconButton>
                </Link>
                </Toolbar>
            </AppHeader>
        </Box>
    )
}