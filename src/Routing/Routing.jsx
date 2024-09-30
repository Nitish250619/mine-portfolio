import React from 'react'
import HomePage from "../Pages/HomePage/HomePage";
import AboutPage from "../Pages/AboutPage/AboutPage";
import ProjectPage from "../Pages/ProjectPage/ProjectPage";
import ResumePage from "../Pages/ResumePage/ResumePage";
import ExperiencePage from "../Pages/ExperiencePage/ExperiencePage";
import NavBarComponent from "../Components/NavBarComponent/NavBarComponent"
import { Route ,Routes } from 'react-router-dom';
import { Box } from '@mui/material';



const Routing = () => {
  return (
    <Box >
        <NavBarComponent />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/resume" element={<ResumePage />} />
        </Routes>
    </Box>
  )
}

export default Routing