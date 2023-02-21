import { Button, IconButton } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "@emotion/react";
import { ColorModeContext } from "../theme";
import { NavLink, Link } from "react-router-dom";

export const MainNav = () => {
  const { colorMode, mode } = React.useContext(ColorModeContext);
  console.log("Color mod is ", colorMode);
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          backgroundColor: "#F0F0F0F0",
        }}
      >
        <Box sx={{}}>
          <NavLink to="/">
            <Button>Home</Button>
          </NavLink>
          <NavLink to="/about">

          <Button>About</Button>
          </NavLink>
          <NavLink to='/contant'>

          <Button>Contant</Button>
          </NavLink>
          <NavLink to='/blog'>

          <Button>Blog</Button>
          </NavLink>
        </Box>
        <Box></Box>
        <IconButton
          sx={{ ml: 1 }}
          onClick={colorMode.toggleColorMode}
          color="inherit"
        >
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </Box>
    </>
  );
};
