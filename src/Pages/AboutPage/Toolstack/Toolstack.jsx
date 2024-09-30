import React from "react";
import { Box, Grid, Tooltip, Typography } from "@mui/material";
import { FaGit, FaFigma } from "react-icons/fa";
import { SiVisualstudiocode, SiPostman } from "react-icons/si"; // Importing tool icons

const Toolstack = () => {
  const tools = [
    { name: "VSCode", icon: <SiVisualstudiocode size="4rem" color="#0078d7" /> },
    { name: "Git", icon: <FaGit size="4rem" color="black" /> },
    { name: "Figma", icon: <FaFigma size="4rem" color="#F24E1E" /> },
    { name: "Postman", icon: <SiPostman size="4rem" color="#FF6C37" /> },
  ];

  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={3} justifyContent="center">
        {tools.map((tool) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={tool.name}>
            <Tooltip title={tool.name} arrow>
              <Box
                sx={{
                  width: 200,
                  height: 200,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "#9b9bbf",
                  color: "#000",
                  borderRadius: "12px",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.2s ease, background-color 0.2s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    bgcolor: "#ececec",
                    color: "#000",
                  },
                }}
              >
                {tool.icon}
                <Typography
                  variant="subtitle1"
                  sx={{
                    marginTop: 1,
                    fontWeight: 500,
                    fontSize: "1.1rem",
                  }}
                >
                  {tool.name}
                </Typography>
              </Box>
            </Tooltip>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Toolstack;
