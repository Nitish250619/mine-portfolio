import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import {experiences} from "../../PortfolioData/experiences"

const ExperiencePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "var(--color-bg-dark-navy)", // Background color
        padding: { xs: "10px", sm: "20px", md: "40px" }, // Adjust padding for mobile
        overflowX: "hidden", // Prevent horizontal scroll
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          width: "100%",
          maxWidth: "1290px", // Limit max width to prevent overflow
          textAlign: "center",
        }}
      >
        {/* Title */}
        <Typography
          variant="h4"
          sx={{
            marginBottom: "40px",
            color: "var(--color-text-off-white)",
            fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" }, // Responsive font size
          }}
        >
          My Experience & Education
        </Typography>

        {/* Vertical Timeline */}
        <Box
          sx={{
            position: "relative",
            padding: { xs: "10px 0", sm: "20px" }, // Adjust padding for smaller screens
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: { xs: "10%", md: "50%" }, // Align the line for mobile
              transform: { xs: "translateX(0)", md: "translateX(-50%)" }, // Adjust based on screen size
              width: "4px",
              height: "100%",
              backgroundColor: "var(--color-accent-neon-magenta)", // Line color
            },
          }}
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              style={{
                position: "relative",
                marginBottom: "40px",
              }}
            >
              {/* Dot */}
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: { xs: "10%", md: "50%" }, // Adjust dot position for mobile
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "var(--color-text-off-white)",
                  borderRadius: "50%",
                  border: "4px solid var(--color-accent-neon-magenta)",
                  width: "16px",
                  height: "16px",
                  zIndex: 1,
                }}
              />

              {/* Experience Details */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: {
                    xs: "left",
                    md: index % 2 === 0 ? "left" : "right",
                  }, // Adjust text alignment for mobile
                  paddingLeft: { xs: "55px", md: index % 2 === 0 ? "100px" : 0 }, // Adjust padding to avoid overflow
                  paddingRight: { xs: "0", md: index % 2 !== 0 ? "100px" : 0 }, // Adjust padding for right-aligned text
                  marginLeft: { xs: "0", md: index % 2 === 0 ? "0" : "auto" }, // Remove negative margins
                  marginRight: { xs: "0", md: index % 2 !== 0 ? "0" : "auto" },
                  maxWidth: { xs: "90%", md: "50%" }, // Limit the width to prevent overflow
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: "var(--color-text-off-white)",
                    fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" }, // Responsive text size
                    fontWeight: "bold",
                  }}
                >
                  {experience.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "var(--color-accent-lime-green)",
                    marginBottom: "5px",
                    fontSize: { xs: "0.9rem", sm: "1rem" }, // Adjust size for mobile
                  }}
                >
                  {experience.year}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "var(--color-text-light-gray)",
                    fontSize: { xs: "0.8rem", sm: "1rem" }, // Adjust size for mobile
                  }}
                >
                  {experience.description}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ExperiencePage;
