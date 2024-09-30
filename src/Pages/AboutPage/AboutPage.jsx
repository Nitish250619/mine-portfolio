import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import Particle from "./Particle/Particle";
import Techstack from "./Techstack/Techstack";
import Aboutcard from "./AboutCard/AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack/Toolstack";

function About() {
  return (
    <Container maxWidth="lg" sx={{marginBottom:"40px"}}>
      <Particle />
      <Container>
        <Grid
          container
          spacing={3}
          justifyContent="center"
          style={{ padding: "10px" }}
        >
          <Grid
            item
            md={7}
            style={{ paddingTop: "30px", paddingBottom: "50px" }}
          >
            <Typography variant="h4" sx={{ paddingBottom: "20px" , color: "#cacaf0" }}>
              Know Who <strong className="purple">I'M</strong>
            </Typography>
            <Aboutcard />
          </Grid>
          <Grid
            item
            md={5}
            sx={{ marginTop: { xs: 0, lg: "250px" } }}
          >
            <img src={laptopImg} alt="about" style={{ width: "100%" }} />
          </Grid>
        </Grid>
        <Typography variant="h4" sx={{color:"var(--color-text-off-white)"}} >
          Professional <strong>Skillset </strong>
        </Typography>

        <Techstack />

        <Typography variant="h4" sx={{color:"var(--color-text-off-white)"}} >
          <strong className="purple">Tools</strong> I use
        </Typography>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
