import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import AutocompleteCmp from "../Components/MuiComponents/AutoCompleteCmp";
import ButtonCmp from "../Components/MuiComponents/ButtonCmp";
import InputCmp from "../Components/MuiComponents/InputCmp";

const Home = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setcountry] = useState("");
  const [gender, setgender] = useState("");
  const foo = () => {
    console.log("details: ", firstName, lastName, country, gender);
  };

  const countryOptions = [
    { label: "Pakistan", year: 1947 },
    { label: "India", year: 1947 },
    { label: "Nepal", year: 2000 },
  ];
  const genderOptions = ["Male", "FeMale", "Others"];
  return (
    <Box>
      <Typography variant="h1">HOME PAGE</Typography>
      <Box display="flex" flexDirection="column" width="50%" gap="20px" m={5}>
        <Box display="flex" gap="20px">
          <InputCmp
            label="First Name"
            placeholder="Enter your first Name"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <InputCmp
            label="Last Name"
            placeholder="Enter your Last Name"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            style={{ color: "red !important" }}
          />
        </Box>
        <AutocompleteCmp
          label="Country"
          options={countryOptions}
          onChange={(value) => {
            setcountry(value);
          }}
        />
        <AutocompleteCmp
          label="Gender"
          options={genderOptions}
          onChange={(value) => {
            setgender(value);
          }}
        />
        <ButtonCmp text="HOME PAGE" onClick={foo} style={{ width: "50%" }} />
      </Box>
    </Box>
  );
};

export default Home;
