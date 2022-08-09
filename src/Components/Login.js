import React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

//rendered by App.jsx
export default function Login(props) {
  return (
    <>
      {!props.loggedIn ? (
        <div className="textfield">
          <Stack spacing={1}>
            <TextField
              className="textfield-child"
              id="demo-helper-text-misaligned"
              label="Required"
              defaultValue="Username"
              sx={{ width: "30%", margin: "auto" }}
              required
            />
            <TextField
              className="textfield-child"
              id="demo-helper-text-misaligned"
              label="Required"
              defaultValue="Password"
              sx={{ width: "30%", margin: "auto" }}
              required
            />
          </Stack>
        </div>
      ) : null}
      <Button
        onClick={() => props.setLoggedIn(!props.loggedIn)}
        className="login-button"
        variant="contained"
        color="success"
      >
      { props.loggedIn ?  "Logged Out" : "Log In"}
      </Button>
    </>
  );
}
