"use client"

import { useState } from "react"
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  FormHelperText,
  Alert,
  Snackbar,
} from "@mui/material"
import { CloudUpload } from "@mui/icons-material"

function AddLoanRequest() {
  const [formData, setFormData] = useState({
    userName: "",
    fatherName: "",
    email: "",
    phoneNumber: "",
    loanAmount: "",
    paybackDate: "",
    cnic: null,
  })

  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      cnic: e.target.files[0],
    })

    if (errors.cnic) {
      setErrors({
        ...errors,
        cnic: "",
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.userName.trim()) newErrors.userName = "Name is required"
    if (!formData.fatherName.trim()) newErrors.fatherName = "Father name is required"

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required"
    } else if (!/^\d{11}$/.test(formData.phoneNumber.replace(/\D/g, ""))) {
      newErrors.phoneNumber = "Phone number should be 11 digits"
    }

    if (!formData.loanAmount) {
      newErrors.loanAmount = "Loan amount is required"
    } else if (isNaN(formData.loanAmount) || Number(formData.loanAmount) <= 0) {
      newErrors.loanAmount = "Please enter a valid amount"
    }

    if (!formData.paybackDate) {
      newErrors.paybackDate = "Payback date is required"
    }

    if (!formData.cnic) {
      newErrors.cnic = "CNIC upload is required"
    }

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const validationErrors = validateForm()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData)

    // Show success message
    setSuccess(true)

    // Reset form
    setFormData({
      userName: "",
      fatherName: "",
      email: "",
      phoneNumber: "",
      loanAmount: "",
      paybackDate: "",
      cnic: null,
    })
  }

  const handleCloseSnackbar = () => {
    setSuccess(false)
  }

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Add Loan Request
      </Typography>

      <Card>
        <CardContent>
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Full Name"
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                  error={!!errors.userName}
                  helperText={errors.userName}
                  required
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Father's Name"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                  error={!!errors.fatherName}
                  helperText={errors.fatherName}
                  required
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  required
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  error={!!errors.phoneNumber}
                  helperText={errors.phoneNumber}
                  required
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth error={!!errors.loanAmount} required>
                  <InputLabel htmlFor="loan-amount">Loan Amount</InputLabel>
                  <OutlinedInput
                    id="loan-amount"
                    name="loanAmount"
                    value={formData.loanAmount}
                    onChange={handleChange}
                    startAdornment={<InputAdornment position="start">Rs.</InputAdornment>}
                    label="Loan Amount"
                  />
                  {errors.loanAmount && <FormHelperText>{errors.loanAmount}</FormHelperText>}
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Payback Date"
                  name="paybackDate"
                  type="date"
                  value={formData.paybackDate}
                  onChange={handleChange}
                  error={!!errors.paybackDate}
                  helperText={errors.paybackDate}
                  InputLabelProps={{ shrink: true }}
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <Button variant="outlined" component="label" startIcon={<CloudUpload />} sx={{ mb: 1 }}>
                  Upload CNIC
                  <input type="file" hidden accept="image/*,.pdf" onChange={handleFileChange} />
                </Button>

                {formData.cnic && (
                  <Typography variant="body2" sx={{ ml: 1 }}>
                    File selected: {formData.cnic.name}
                  </Typography>
                )}

                {errors.cnic && <FormHelperText error>{errors.cnic}</FormHelperText>}
              </Grid>

              <Grid item xs={12}>
                <Button type="submit" variant="contained" size="large" sx={{ mt: 2 }}>
                  Submit Loan Request
                </Button>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>

      <Snackbar
        open={success}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: "100%" }}>
          Loan request submitted successfully!
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default AddLoanRequest
