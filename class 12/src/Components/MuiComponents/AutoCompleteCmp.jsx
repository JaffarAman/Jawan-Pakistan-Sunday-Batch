import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function AutocompleteCmp({ label, options, onChange }) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options || option2}
      onChange={(event, value) => onChange(value)}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label={label || "label"} />
      )}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top

const option2 = ["OPTION 1", "OPTION 2", "OPTION 3"];
