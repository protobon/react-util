import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

interface CarouselProps {
  images: { src: string; alt: string }[];
}

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box
    sx={{
      position: "relative",
      maxWidth: "100%",
      maxHeight: "100%",
      objectFit: "contain",
      overflow: "hidden",
    }}
    >
      <Box
        sx={{
          display: "flex",
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {images.map((image, index) => (
          <Box
            key={index}
            component="img"
            src={image.src}
            alt={image.alt}
            sx={{
              width: "100%",
              height: "100%",
              margin: 0,
            }}
          />
        ))}
      </Box>

      {/* Navigation Buttons */}
      <IconButton
        onClick={handlePrevious}
        sx={{
          position: "absolute",
          top: "50%",
          left: "10px",
          '&:hover': {
            backgroundColor: "rgba(0,0,0,0.5)",
          },
          color: "white",
          zIndex: 1,
        }}
      >
        <ArrowBack />
      </IconButton>

      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          top: "50%",
          right: "10px",
          '&:hover': {
            backgroundColor: "rgba(0,0,0,0.5)",
          },
          color: "white",
          zIndex: 1,
        }}
      >
        <ArrowForward />
      </IconButton>

      {/* Indicators */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          bottom: "10px",
          width: "100%",
        }}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 10,
              height: 10,
              margin: "0 5px",
              borderRadius: "50%",
              backgroundColor: index === currentIndex ? "white" : "gray",
              transition: "background-color 0.3s",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};