// DashboardOne.jsx

import { useState } from "react"
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import Sidebar from "./components/Sidebar"
import Overview from "./pages/Overview"
import AddLoanRequest from "./pages/AddLoanRequest"
import Payments from "./pages/Payments"

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
})

function DashboardOne() {
  const [activePage, setActivePage] = useState("overview")

  const renderPage = () => {
    switch (activePage) {
      case "overview":
        return <Overview />
      case "addLoan":
        return <AddLoanRequest />
      case "payments":
        return <Payments />
      default:
        return <Overview />
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex", height: "100vh" }}>
        <Sidebar activePage={activePage} setActivePage={setActivePage} />
        <Box component="main" sx={{ flexGrow: 1, p: 3, overflow: "auto" }}>
          {renderPage()}
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default DashboardOne
