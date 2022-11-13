import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 3,
    top: 5,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={cart.length} color="secondary">
        <ShoppingCartIcon sx={{ color: "white" }} />
      </StyledBadge>
    </IconButton>
  );
}
