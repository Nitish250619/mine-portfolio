import React, { useState } from "react";
import {
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NavBarComponent = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Experience", path: "/experience" },
    { label: "Projects", path: "/projects" },
    { label: "Resume", path: "/resume" },
  ];

  const buttonVariant = {
    hover: { scale: 1.1, transition: { duration: 0.3 } },
    tap: { scale: 0.9 },
  };
  return (
    <>
      {/* Sticky Navbar */}
      <Box
        sx={{
          position: "sticky",
          top: 0,
          marginBottom:"40px",
          bgcolor: "#121732", // Background color for navbar
          color: "white", // Text color
          padding: "16px",
          zIndex: 1000, // Keeps the navbar above the content
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Shadow for elevation
          display: "flex", // Align content horizontally
          justifyContent: "space-between", // Space between logo and menu
          alignItems: "center", // Vertically align items
        }}
      >
        {/* Logo or Title */}
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, color: "var(--color-text-light-gray)" }}
        >
          Nitish
        </Typography>

        {/* Menu for larger screens */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: "25px" }}>
              {menuItems.map((item) => (
                <motion.div
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonVariant}
                  key={item.label}
                >
                  <Button
                    color="inherit"
                    component={Link}
                    to={item.path}
                    sx={{
                      color: "var(--color-text-light-gray)",
                      transition: "color 0.3s ease, background-color 0.3s ease",
                      "&:hover": {
                        backgroundColor: "var(--color-accent-electric-blue)", // Hover Background Color
                        color: "var(--color-text-off-white)", // Hover Text Color
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                </motion.div>
              ))}

              <motion.div
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariant}
              >
                <Button
                  sx={{
                    color: "var(--color-text-light-gray)",
                    transition: "color 0.3s ease, background-color 0.3s ease",
                    "&:hover": {
                      backgroundColor: "var(--color-accent-electric-blue)",
                      color: "var(--color-text-off-white)",
                    },
                  }}
                >
                  Blog
                </Button>
              </motion.div>

              <motion.div
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariant}
              >
                <Button
                  sx={{
                    color: "var(--color-text-light-gray)",
                    transition: "color 0.3s ease, background-color 0.3s ease",
                    "&:hover": {
                      backgroundColor: "var(--color-accent-electric-blue)",
                      color: "var(--color-text-off-white)",
                    },
                  }}
                >
                  Git
                </Button>
              </motion.div>
            </Box>

        {/* Hamburger Icon for Mobile */}
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: "block", md: "none" } }} // Show only on mobile (xs)
          onClick={handleDrawerToggle} // Open drawer
        >
          <MenuIcon />
        </IconButton>
      </Box>

      {/* Drawer for Mobile Menu */}
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <List sx={{ width: 250 }}>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.label}
                component={Link}
                to={item.path}
                onClick={handleDrawerToggle}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
            <ListItem button>
              <ListItemText primary="Blog" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Git" />
            </ListItem>
          </List>
        </motion.div>
      </Drawer>

      
    </>
  );
};

export default NavBarComponent;



