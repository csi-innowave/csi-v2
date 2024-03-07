import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import GlassAppBar from "./ui/GlassAppBar";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
const pages = ["Team", "Events", "Gallery", "About"];

function Header() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleNavigation = (page) => {
    navigate(`${page}`);
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    // handlePageNavigate(page);
    setAnchorElNav(null);
  };

  return (
    <GlassAppBar position="fixed">
      <Container maxWidth="xl" className="">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <div className="hidden md:flex">
            <div className="w-36 p-2 h-full">
              <Link to={"/"}>
                <img
                  src="https://res.cloudinary.com/dpp2rltxx/image/upload/v1709819749/csi/uwmdhwkpunbabkatohsf.png"
                  alt=""
                />
              </Link>
            </div>
            <Link
              to={
                "https://drive.google.com/file/d/1GVeWn4GE9DQkwQOEhKW10tApuoYgsR3U/view"
              }
              className="bg-white px-2 py-1 my-auto rounded-lg font-bold hover:bg-gray-200 text-black "
            >
              BROCHURE
            </Link>
          </div>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <div className="font-bold">
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Button
                      sx={{ color: "black" }}
                      onClick={() => {
                        handleNavigation(page);
                      }}
                      textAlign="center"
                    >
                      {page}
                    </Button>
                  </MenuItem>
                ))}
              </div>
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { sm: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 300,

              color: "inherit",
              textDecoration: "none",
            }}
          >
            <div className="flex">
              <Link to={"/"}>
                <div className="w-36 h-full">
                  <img
                    src="https://res.cloudinary.com/dpp2rltxx/image/upload/v1709819749/csi/uwmdhwkpunbabkatohsf.png"
                    alt=""
                  />
                </div>
              </Link>
              <Link
                to={
                  "https://drive.google.com/file/d/1GVeWn4GE9DQkwQOEhKW10tApuoYgsR3U/view"
                }
                className="bg-white px-2 py-1 my-auto rounded-lg font-bold hover:bg-gray-200 text-black "
              >
                BROCHURE
              </Link>
            </div>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => {
                  handleNavigation(page);
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </GlassAppBar>
  );
}
export default Header;
