// src/components/Particle.js
import React from "react";
import Particles from "react-tsparticles";

const Particle = () => {
  return (
    <Particles
      options={{
        particles: {
          number: {
            value: 50,
          },
          size: {
            value: 3,
          },
          move: {
            speed: 1,
          },
          // Add other particle options as needed
        },
      }}
    />
  );
};

export default Particle;


