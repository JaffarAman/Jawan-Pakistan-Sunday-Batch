import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function InputCmp({ label, placeholder, onChange, style }) {
  return (
    <TextField
      id="outlined-basic"
      label={label ? label : "Outlined"}
      variant="outlined"
      placeholder={placeholder || "enter your placeholder"}
      onChange={onChange}
      sx={{
        input: style,
      }}
    />
  );
}
