import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function ButtonCmp({ text, onClick, style }) {
  return (
    <Button variant="contained" onClick={onClick} sx={style}>
      {text ? text : "button"}
    </Button>
  );
}
