import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const heroSlides = [
  {
    id: 1,
    title: "Trendy Women's Clothing Collection",
    description:
      "Step out in style — discover the latest women’s fashion handpicked for you.",
    image:
      "https://i.pinimg.com/1200x/84/ba/44/84ba440441f2c801eede64c5dac3107d.jpg",
    offer: "New Arrivals • Up to 50% OFF",
    button1: "Shop Now",
    button2: "View Collection",
  },
  {
    id: 2,
    title: "Elegant Ethnic Wear for Every Occasion",
    description:
      "From festive sarees to everyday kurtis — redefine your ethnic wardrobe with timeless elegance.",
    image:
      "https://i.pinimg.com/1200x/27/33/cc/2733cc86d01e2560777f51d4c592fe7a.jpg",
    offer: "Festive Sale • Up to 40% OFF",
    button1: "Explore Ethnic",
    button2: "Shop Now",
  },
  {
    id: 3,
    title: "Casual & Chic Styles You’ll Love",
    description:
      "Elevate your everyday look with comfy yet stylish outfits — perfect for every mood.",
    image:
      "https://i.pinimg.com/736x/8e/e8/65/8ee8658e792f1287f989cda2b707f968.jpg",
    offer: "Buy 2 Get 1 Free",
    button1: "Shop Casuals",
    button2: "View Looks",
  },
  {
    id: 4,
    title: "Exclusive Women's Collection 2025",
    description:
      "Redefine your wardrobe with luxurious fashion crafted for confidence and grace.",
    image:
      "https://i.pinimg.com/1200x/b7/88/94/b788945fa174b679f489fcbad3297188.jpg",
    offer: "Limited Time • Flat 30% OFF",
    button1: "Shop Now",
    button2: "Discover More",
  },
];


const HeroCarousel = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: 500, sm: 450, md: 500 },
        overflow: "hidden",
        borderRadius: 0,
      }}
    >
      <AnimatePresence mode="wait">
        {heroSlides.map(
          (slide, index) =>
            index === currentSlide && (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8 }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              >
                {/* Background Image */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundImage: `
                      linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.25)),
                      url(${slide.image})
                    `,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    zIndex: 0,
                  }}
                />

                {/* Content Section */}
                <Box
                  sx={{
                    position: "relative",
                    zIndex: 1,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    color: "white",
                    p: { xs: 3, sm: 6, md: 8 },
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      mb: 2,
                      fontSize: { xs: "1.8rem", sm: "2.3rem", md: "2.8rem" },
                      color:"#FFF"
                    }}
                  >
                    {slide.title}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      fontSize: { xs: "1rem", md: "1.1rem" },
                      maxWidth: 600,
                      opacity: 0.9,
                      color:"#FFF"
                    }}
                  >
                    {slide.description}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,
                      justifyContent: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        px: 3,
                        py: 1.2,
                        borderRadius: 3,
                        fontWeight: 600,
                        fontSize: { xs: "0.9rem", sm: "1rem" },
                      }}
                      onClick={() => navigate("/products")}
                    >
                      {slide.button1}
                    </Button>

                    <Button
                      variant="outlined"
                      color="inherit"
                      sx={{
                        px: 3,
                        py: 1.2,
                        borderRadius: 3,
                        fontWeight: 600,
                        fontSize: { xs: "0.9rem", sm: "1rem" },
                        borderColor: "white",
                        color: "white",
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255,0.1)",
                          borderColor: "white",
                        },
                      }}
                      onClick={() => navigate("/products")}
                    >
                      {slide.button2}
                    </Button>
                  </Box>

                  {/* Offer Tag */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 20,
                      left: 20,
                      bgcolor: "error.main",
                      color: "white",
                      px: 2,
                      py: 0.8,
                      borderRadius: 2,
                      fontWeight: 600,
                      fontSize: { xs: "0.8rem", sm: "0.9rem" },
                      boxShadow: 2,
                    }}
                  >
                    {slide.offer}
                  </Box>
                </Box>
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Dots Navigation */}
      <Box
        sx={{
          position: "absolute",
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 1.5,
        }}
      >
        {heroSlides.map((_, i) => (
          <Box
            key={i}
            onClick={() => setCurrentSlide(i)}
            sx={{
              width: currentSlide === i ? 16 : 10,
              height: 10,
              borderRadius: 5,
              bgcolor: currentSlide === i ? "primary.main" : "rgba(255,255,255,0.6)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default HeroCarousel;
