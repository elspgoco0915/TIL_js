import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const StyledTypography = styled(Typography)(({ theme }) => ({
  flex: 1,
}));

const Header = () => {
  // const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        {/*<Typography className={classes.typographyStyles}>*/}
        <StyledTypography>
          ヘッダー
        </StyledTypography>
        <AccountCircleIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
