import React from "react";
import { Grid, Container } from "@mui/material";
import ProjectsCard from "./ProjectsCard/ProjectsCard";
import {projectList} from "../../PortfolioData/projectList"



const ProjectPage = () => {
  return (
    <Container sx={{ padding: 4 }}>
      <Grid container spacing={3}>
        {projectList.map((project, index) => (
          <ProjectsCard key={index} project={project} />
        ))}
      </Grid>
    </Container>
  );
};

export default ProjectPage;

