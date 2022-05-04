import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter} from "react-router-dom"
import { MainContentContext } from "./context/main-content-context"



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainContentContext>
        <App />
      </MainContentContext>
    </BrowserRouter>
  </React.StrictMode>
)
