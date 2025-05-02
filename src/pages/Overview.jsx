"use client"

import { useState, useEffect } from "react"
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material"
import { AccountBalance, AttachMoney, People } from "@mui/icons-material"

function Overview() {
  const [loanData, setLoanData] = useState([])

  // Simulating data fetch
  useEffect(() => {
    // This would be an API call in a real application
    const mockData = [
      { id: 1, name: "Ahmed Khan", amount: 50000, date: "2023-05-15", status: "Active" },
      { id: 2, name: "Sara Ali", amount: 25000, date: "2023-06-20", status: "Pending" },
      { id: 3, name: "Imran Ahmed", amount: 100000, date: "2023-04-10", status: "Completed" },
      { id: 4, name: "Fatima Zaidi", amount: 75000, date: "2023-07-05", status: "Active" },
    ]

    setLoanData(mockData)
  }, [])

  // Calculate summary data
  const totalLoans = loanData.length
  const totalAmount = loanData.reduce((sum, loan) => sum + loan.amount, 0)
  const activeLoans = loanData.filter((loan) => loan.status === "Active").length

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Overview
      </Typography>

      {/* Summary Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ bgcolor: "#e3f2fd" }}>
            <CardContent sx={{ display: "flex", alignItems: "center" }}>
              <People sx={{ fontSize: 40, mr: 2, color: "#1976d2" }} />
              <Box>
                <Typography variant="h5">{totalLoans}</Typography>
                <Typography variant="body2">Total Loans</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ bgcolor: "#e8f5e9" }}>
            <CardContent sx={{ display: "flex", alignItems: "center" }}>
              <AttachMoney sx={{ fontSize: 40, mr: 2, color: "#2e7d32" }} />
              <Box>
                <Typography variant="h5">Rs. {totalAmount.toLocaleString()}</Typography>
                <Typography variant="body2">Total Amount</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ bgcolor: "#fff8e1" }}>
            <CardContent sx={{ display: "flex", alignItems: "center" }}>
              <AccountBalance sx={{ fontSize: 40, mr: 2, color: "#ff9800" }} />
              <Box>
                <Typography variant="h5">{activeLoans}</Typography>
                <Typography variant="body2">Active Loans</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Recent Loans Table */}
      <Typography variant="h6" sx={{ mb: 2 }}>
        Recent Loan Requests
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ bgcolor: "#f5f5f5" }}>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loanData.map((loan) => (
              <TableRow key={loan.id}>
                <TableCell>{loan.id}</TableCell>
                <TableCell>{loan.name}</TableCell>
                <TableCell>Rs. {loan.amount.toLocaleString()}</TableCell>
                <TableCell>{loan.date}</TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: "inline-block",
                      px: 1,
                      py: 0.5,
                      borderRadius: 1,
                      bgcolor: loan.status === "Active" ? "#e8f5e9" : loan.status === "Pending" ? "#fff8e1" : "#f5f5f5",
                      color: loan.status === "Active" ? "#2e7d32" : loan.status === "Pending" ? "#ff9800" : "#616161",
                    }}
                  >
                    {loan.status}
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default Overview
