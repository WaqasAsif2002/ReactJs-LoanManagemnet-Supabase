"use client"

import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Typography } from "@mui/material"
import { Dashboard, AddCircle, Payment } from "@mui/icons-material"

function Sidebar({ activePage, setActivePage }) {
  const menuItems = [
    { id: "overview", text: "Overview", icon: <Dashboard /> },
    { id: "addLoan", text: "Add Loan Request", icon: <AddCircle /> },
    { id: "payments", text: "Payments", icon: <Payment /> },
    

  ]

  return (
    <Paper
      elevation={3}
      sx={{
        width: 240,
        height: "100%",
        position: "sticky",
        top: 0,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ p: 2, borderBottom: "1px solid #eee" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Loan Dashboard
        </Typography>
      </Box>

      <List sx={{ flexGrow: 1, pt: 0 }}>
        {menuItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              selected={activePage === item.id}
              onClick={() => setActivePage(item.id)}
              sx={{
                "&.Mui-selected": {
                  backgroundColor: "rgba(25, 118, 210, 0.08)",
                  borderLeft: "4px solid #1976d2",
                },
                "&.Mui-selected:hover": {
                  backgroundColor: "rgba(25, 118, 210, 0.12)",
                },
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  )
}

export default Sidebar
