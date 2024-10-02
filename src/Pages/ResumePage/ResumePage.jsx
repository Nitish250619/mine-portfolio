import React from "react";
import { Container, Grid, Button, Box } from "@mui/material";
import Particle from "../AboutPage/Particle/Particle"; // Assuming this is your custom particle component
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../../Assets/Front-End Engineer.pdf"; // Path to your PDF file

// Import react-pdf-viewer components
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

function ResumePage() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  // Dynamic height based on viewport width
  const viewerHeight = window.innerWidth < 600 ? "500px" : "800px"; // Adjust height based on screen width

  return (
    <Box sx={{ position: "relative", padding: 4 }}>
      {/* Particle effect (assuming this is a custom component for background particles) */}
      <Particle />

      <Container sx={{ textAlign: "center" }}>
        {/* PDF Viewer */}
        <Grid container justifyContent="center" sx={{ marginBottom: 4 }}>
          <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
            <div
              style={{
                border: "1px solid #e4e4e4",
                maxWidth: "960px",
                width: "100%",
                height: viewerHeight, // Use dynamic height here
                overflow: "hidden", // Prevent scrolling
              }}
            >
              <Viewer
                fileUrl={pdf}
                plugins={[defaultLayoutPluginInstance]} // Use the default layout plugin for toolbar, zoom, etc.
              />
            </div>
          </Worker>
        </Grid>

        {/* Download Button */}
        <Grid container justifyContent="center">
          <Button
            variant="contained"
            href={pdf}
            download // This ensures the PDF is downloaded on click
            target="_blank"
            startIcon={<AiOutlineDownload />}
            sx={{ maxWidth: "250px" }}
          >
            Download CV
          </Button>
        </Grid>
      </Container>
    </Box>
  );
}

export default ResumePage;
