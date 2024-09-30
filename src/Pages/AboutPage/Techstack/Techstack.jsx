import React from "react";
import { Box, Grid, Tooltip, Typography } from "@mui/material";
import {
  DiJavascript1,
  DiLinux,
  DiMongodb,
  DiOpensource,
  DiNodejs,
  DiNginx,
  DiReact,
  DiCss3,
  DiDocker,
  DiGit,
  DiHtml5,
} from "react-icons/di";
import { SiTypescript } from "react-icons/si";

// Correctly importing SVG icons for Redux and MUI

import { ReactComponent as ReduxIcon } from "../../../Assets/icons8-redux.svg";
import { ReactComponent as MuiIcon } from "../../../Assets/mui_logo_icon_248416.svg";
import { ReactComponent as ExpressIcon } from "../../../Assets/icons8-express-js.svg";

const Techstack = () => {
  const techStack = [
    { name: "JavaScript", icon: <DiJavascript1 size="4rem" /> },
    { name: "TypeScript", icon: <SiTypescript size="4rem" /> },
    { name: "React", icon: <DiReact size="4rem" /> },
    { name: "Redux", icon: <ReduxIcon width="4rem" height="4rem" /> },
    { name: "Material UI", icon: <MuiIcon width="4rem" height="4rem" /> },
    { name: "CSS", icon: <DiCss3 size="4rem" /> },
    { name: "HTML", icon: <DiHtml5 size="4rem" /> },
    { name: "Node.js", icon: <DiNodejs size="4rem" /> },
    { name: "Express", icon: <ExpressIcon width="4rem" height="4rem" /> },
    { name: "MongoDB", icon: <DiMongodb size="4rem" /> },
    { name: "Linux", icon: <DiLinux size="4rem" /> },
    { name: "Open Source", icon: <DiOpensource size="4rem" /> },
    { name: "Nginx", icon: <DiNginx size="4rem" /> },
    { name: "Docker", icon: <DiDocker size="4rem" /> },
    { name: "Git", icon: <DiGit size="4rem" /> },
  ];

  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={3} justifyContent="center">
        {techStack.map((tech) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={tech.name}>
            <Tooltip title={tech.name} arrow>
              <Box
                sx={{
                  width: 200,
                  height: 200,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "#9b9bbf",
                  color: "Black",
                  borderRadius: "12px",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.2s ease, background-color 0.2s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    bgcolor: "#2b2f55",
                    color: "#cacaf0",
                  },
                }}
              >
                {tech.icon}
                <Typography
                  variant="subtitle1"
                  sx={{
                    marginTop: 1,
                    fontWeight: 500,
                    fontSize: "1.1rem",
                    color: "#1b1f3b",
                    "&:hover": {
                      transform: "scale(1.05)",
                      color: "#cacaf0",
                    },
                  }}
                >
                  {tech.name}
                </Typography>
              </Box>
            </Tooltip>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Techstack;
