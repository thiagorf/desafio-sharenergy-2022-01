import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter} from "react-router-dom"
import { MainContentContext } from "./context/main-content-context"
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers'
import { CssBaseline } from '@mui/material'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MainContentContext>
          <CssBaseline />
          <App />
        </MainContentContext>
      </LocalizationProvider> 
    </BrowserRouter>
  </React.StrictMode>
)
