import { Box, CardMedia, Icon, IconButton, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import codingBackground from "../../Assets/coding-back.svg";
import { phrases } from "../../PortfolioData/PortfolioData";

const HomePage = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) =>
        prev === phrases.length - 1 ? 0 : prev + 1
      );
    }, 4000); // 4 seconds delay for each phrase
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentPhrase(phrases[currentPhraseIndex]);
  }, [currentPhraseIndex]);

  const letterVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05 }, // Delay between letters
    }),
    exit: { opacity: 0, y: -20 },
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        p: 4,
      }}
    >
      <Box sx={{ textAlign: { xs: "center", md: "left" }, flex: 1 }}>
        <motion.div initial="hidden" animate="visible">
          <Typography
            variant="h2"
            sx={{
              color: "var(--color-text-light-gray)",
              fontSize: { xs: "2rem", md: "4rem" },
              display: "flex",
              gap: "10px",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            Hi There{" "}
            <IconButton>
              <Icon
                sx={{
                  fontSize: { xs: "2rem", md: "3rem" },
                  color: "white",
                  mb: "5px",
                }}
              >
                👋🏻
              </Icon>
            </IconButton>
          </Typography>

          <motion.div>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "4rem" },
                color: "var(--color-text-light-gray)",
              }}
            >
              I am Nitish Suryan
            </Typography>
          </motion.div>

          <Box sx={{ display: "flex", mt: 4 }}>
            <Box sx={{ display: "inline-block" }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPhraseIndex}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  style={{ display: "inline-block" }}
                >
                  {currentPhrase.split("").map((letter, index) => (
                    <motion.span
                      key={index}
                      custom={index}
                      variants={letterVariant}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      style={{
                        display: "inline-block",
                        marginRight: letter === " " ? "8px" : "0px", // Add spacing for spaces
                      }}
                    >
                      <Typography
                        variant="h2"
                        sx={{
                          fontSize: { xs: "1.5rem", md: "3rem" },
                          color: "#cacaf0",
                        }}
                      >
                        {letter}
                      </Typography>
                    </motion.span>
                  ))}
                </motion.div>
              </AnimatePresence>
            </Box>
          </Box>
        </motion.div>
      </Box>

      <CardMedia
        sx={{
          flex: 1,
          mt: { xs: 4, md: 0 },
          ml: { md: 4 },
          width: { xs: "100%", md: "auto" },
        }}
      >
        <motion.img
          src={codingBackground}
          alt="codingBackground"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", duration: 1.5 }}
          style={{ width: "100%", maxWidth: "600px", height: "auto" }}
        />
      </CardMedia>
    </Box>
  );
};

export default HomePage;
