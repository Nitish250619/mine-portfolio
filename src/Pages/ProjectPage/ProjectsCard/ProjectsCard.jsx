import React, { useState } from "react";
import { Box, Button, Typography, Grid } from "@mui/material";

const ProjectsCard = ({ project }) => {
  const { name, description, image, demoLink, githubLink } = project;
  const [isZoomed, setIsZoomed] = useState(false);

  // Toggle zoom effect on image click
  const handleImageClick = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "rgba(255, 255, 255, 0.1)", // Transparent background
          borderRadius: "15px",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
          backdropFilter: "blur(10px)", // For glassmorphism effect
          border: "2px solid #ffc107", // Cute border with custom color
          overflow: "hidden",
          transition: "transform 0.2s ease-in-out",
          "&:hover": {
            transform: "scale(1.05)",
            borderColor: "#f50057", // Border color change on hover
          },
        }}
      >
        {/* Project Image with Click-to-Zoom effect */}
        <Box
          sx={{
            width: "100%",
            height: "auto",
            cursor: "pointer",
            overflow: "hidden",
          }}
          onClick={handleImageClick}
        >
          <img
            src={image}
            alt={name}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              transition: "transform 0.4s ease",
              transform: isZoomed ? "scale(1.2)" : "scale(1)", // Zoom effect
            }}
          />
        </Box>

        {/* Project Details */}
        <Box sx={{ padding: 2, textAlign: "center" }}>
          {/* Project Name */}
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1, color: "#ff6f61" }}>
            {name}
          </Typography>

          {/* Project Description */}
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginBottom: 2, color: "#ffffff" }}
          >
            {description}
          </Typography>

          {/* Buttons for Demo and GitHub */}
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <Button
              variant="contained"
              color="secondary"
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                textTransform: "none",
                fontWeight: "bold",
                bgcolor: "#ff4081",
                "&:hover": {
                  bgcolor: "#f50057",
                },
              }}
            >
              Demo
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                textTransform: "none",
                fontWeight: "bold",
                borderColor: "#ff4081",
                color: "#ff4081",
                "&:hover": {
                  borderColor: "#f50057",
                  color: "#f50057",
                },
              }}
            >
              GitHub
            </Button>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default ProjectsCard;
