import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const StyledTypography = styled(Typography)(({ theme }) => ({
  flex: 1,
}));

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <StyledTypography>
          ヘッダー
        </StyledTypography>
        <AccountCircleIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
