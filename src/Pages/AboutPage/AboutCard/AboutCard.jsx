import React from "react";
import {
  Box,
  Typography,
  Divider,
  Avatar,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { deepPurple, teal } from "@mui/material/colors";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const AboutCard = () => {
  return (
    <Card
      sx={{
        maxWidth: { xs: '100%', sm: 600 },
        margin: "auto",
        borderRadius: "15px",
        boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
        backgroundColor: "var(--color-bg-dark-navy)",
        padding: { xs: 3, sm: 4 },
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "scale(1.02)", // Slight zoom effect on hover
        },
      }}
    >
      <CardContent>
        {/* Avatar with Title */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            mb: { xs: 3, sm: 4 },
          }}
        >
          <Avatar
            alt="Nitish Suryan"
            sx={{
              bgcolor: deepPurple[500],
              width: { xs: 60, sm: 80 },
              height: { xs: 60, sm: 80 },
              fontSize: { xs: 24, sm: 32 },
            }}
          >
            NS
          </Avatar>
          <Typography
            variant="h5"
            color="text.primary"
            sx={{
              fontWeight: "bold",
              textAlign: { xs: "center", sm: "left" },
              marginTop: { xs: 2, sm: 0 },
              color: deepPurple[500],
            }}
          >
            Nitish Suryan
          </Typography>
        </Box>

        {/* Intro Text */}
        <Typography
          variant="body1"
          color="text.primary"
          sx={{
            fontSize: { xs: "1rem", sm: "1.2rem" },
            lineHeight: 1.6,
            textAlign: "justify",
            color:"var(--color-text-light-gray)",
            mb: 3,
          }}
        >
          Hi Everyone, I am{" "}
          <span style={{ color: deepPurple[500], fontWeight: "bold" }}>
            Nitish Suryan
          </span>{" "}
          from{" "}
          <span style={{ color: teal[500], fontWeight: "bold" }}>
            Meerut, India. 🌍
          </span>
          . I'm currently employed as a Software Engineer at{" "}
          <span style={{ color: deepPurple[500], fontWeight: "bold" }}>
            Tech Mahindra{" "}
          </span>
          where I’m passionate about turning ideas into impactful solutions. I
          love pushing the boundaries of technology and design, creating
          experiences that not only solve problems but also delight users. My
          goal is to continuously innovate, learn, and build projects that make
          a difference. 💡🚀
        </Typography>

        <Divider sx={{ mb: 3 }} />

        {/* Activities Section */}
        <Typography
          variant="h6"
          color="text.primary"
          sx={{
            textAlign: "center",
            fontSize: { xs: "1rem", sm: "1.25rem" },
            fontWeight: "bold",
            mb: 2,
            color:"#f8f8ff"
          }}
        >
          Apart from coding, here are some activities I love!
        </Typography>

        <Grid container spacing={2} sx={{ mb: 3 }}>
          {[
            { activity: "Playing Games", iconColor: deepPurple[500] },
            { activity: "Writing Tech Blogs", iconColor: teal[500] },
            { activity: "Travelling", iconColor: deepPurple[500] },
          ].map((item, index) => (
            <Grid
              item
              xs={12}
              sm={4}
              key={index}
              sx={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}
            >
              <ArrowDownwardIcon sx={{ fontSize: 40, color: item.iconColor }} />
              <Typography
                variant="body1"
                color="#cacaf0"
                sx={{ fontSize: { xs: "1rem", sm: "1.1rem" }, mt: 1 }}
              >
                {item.activity}
              </Typography>
            </Grid>
          ))}
        </Grid>

        {/* Inspirational Quote */}
        <Typography
          variant="body2"
          sx={{
            fontStyle: "italic",
            textAlign: "center",
            fontSize: { xs: "0.9rem", sm: "1rem" },
            mt: 2,
            color:"var(--color-text-light-gray)",
          }}
        >
          "Strive to build things that make a difference!"
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AboutCard;
