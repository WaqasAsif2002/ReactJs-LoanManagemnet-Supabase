import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material"

function Payments() {
  // Mock payment data
  const payments = [
    { id: 1, loanId: "L-001", name: "Ahmed Khan", amount: 5000, date: "2023-06-15", status: "Completed" },
    { id: 2, loanId: "L-001", name: "Ahmed Khan", amount: 5000, date: "2023-07-15", status: "Completed" },
    { id: 3, loanId: "L-002", name: "Sara Ali", amount: 2500, date: "2023-07-20", status: "Completed" },
    { id: 4, loanId: "L-004", name: "Fatima Zaidi", amount: 7500, date: "2023-08-05", status: "Pending" },
    { id: 5, loanId: "L-001", name: "Ahmed Khan", amount: 5000, date: "2023-08-15", status: "Pending" },
  ]

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Payments
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ bgcolor: "#f5f5f5" }}>
            <TableRow>
              <TableCell>Payment ID</TableCell>
              <TableCell>Loan ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {payments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell>P-{payment.id.toString().padStart(3, "0")}</TableCell>
                <TableCell>{payment.loanId}</TableCell>
                <TableCell>{payment.name}</TableCell>
                <TableCell>Rs. {payment.amount.toLocaleString()}</TableCell>
                <TableCell>{payment.date}</TableCell>
                <TableCell>
                  <Chip
                    label={payment.status}
                    color={payment.status === "Completed" ? "success" : "warning"}
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default Payments
