import { Box, Stack } from '@mui/material'
import { Header } from './components/Header'
import { RouteContentHandler } from './components/RouteContentHandler'

function App() {

  return (
    <Box sx={{ overflow: "hidden", height: "100vh"}}>
      <Stack sx={{ height: "100%" }}>
        <Header />
        <RouteContentHandler />
      </Stack>
    </Box>
  )
}

export default App
