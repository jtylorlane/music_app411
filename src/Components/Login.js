import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

//rendered by App.jsx
export default function Login(props) {
  return (
    <>
      <Stack spacing={2}>
        <TextField
          id="demo-helper-text-misaligned"
          label="Required"
          defaultValue="Username"
          sx={{ width: "30%" }}
          required
        />
        <TextField
          id="filled-required"
          label="Required"
          defaultValue="Password"
          sx={{ width: "30%" }}
          required
        />
      </Stack>

      <Button
        onClick={() => props.setLoggedIn(true)}
        className="login-button"
        variant="contained"
        color="success"
      >
        Login
      </Button>
    </>
  );
}