// Welcome.jsx

import React from "react"
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import './welcomecss.css'

function Welcome() {
  return (
    <div>
      <h1>Welcome to Loan Management System Created By Muhammad Waqas - SMIT</h1>

      <div id="btnstyle">
        <Link to="/signup" className="btn btn-primary">SignUp</Link>
        <Link to="/login" className="btn btn-success">Login</Link>
      </div>
    </div>
  )
}

export default Welcome
