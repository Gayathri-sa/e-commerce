import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
  Rating,
  Button,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { products, categories } from "../../data/mockData";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import HeroCarousel from "../../components/customer/HeroCarousel";

const Home = () => {
  const navigate = useNavigate();
  const featuredProducts = products.slice(0, 20);
  const featuredCategories = categories.slice(0, 4);
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleAddToCart = () => {
    toast.success("Product added to cart!");
  };

  return (
    <Box>

      {/*  Hero Section */}
      <HeroCarousel />
      {/* Categories Section */}
      <Box sx={{p:2}}>
      <Typography variant="h4" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
        Shop by Category
      </Typography>
      <Grid container spacing={3} sx={{ mb: 3 }}>
        {featuredCategories.map((category) => (
          <Grid item xs={12} sm={6} md={3} key={category.id}>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Card
                sx={{
                  cursor: "pointer",
                  borderRadius: 3,
                  overflow: "hidden",
                  border: "1px solid #e0e0e0",
                  position: "relative",
                  "&:hover .overlay": { opacity: 1 },
                }}
                onClick={() => navigate("/products")}
              >
                <CardMedia
                  component="img"
                  height="150"
                  image={category.image}
                  alt={category.name}
                  sx={{ objectFit: "cover" }}
                />
                <Box
                  className="overlay"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    bgcolor: "rgba(0,0,0,0.3)",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                  }}
                >
                  <Typography variant="body1" sx={{color:'#FFF'}}>{category.name}</Typography>
                  <Typography variant="body1" sx={{color:'#FFF'}}>
                    {category.count} products
                  </Typography>
                </Box>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Featured Products */}
      <Typography variant="h4" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
        Featured Products
      </Typography>
      <Grid container spacing={2}>
        {featuredProducts.map((product, index) => (
          <Grid
            item
            key={product.id}
            sx={{
              flex: "1 1 calc(20% - 16px)",
              maxWidth: "20%",
              "@media (max-width:1200px)": {
                maxWidth: "25%",
                flex: "1 1 calc(25% - 16px)",
              },
              "@media (max-width:900px)": {
                maxWidth: "33.33%",
                flex: "1 1 calc(33.33% - 16px)",
              },
              "@media (max-width:600px)": {
                maxWidth: "50%",
                flex: "1 1 calc(50% - 16px)",
              },
              "@media (max-width:400px)": {
                maxWidth: "100%",
                flex: "1 1 100%",
              },
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card
                sx={{
                  cursor: "pointer",
                  borderRadius: 2,
                  border: "1px solid #ddd",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  position: "relative",
                  transition: "all 0.3s ease",
                  "&:hover": { borderColor: "primary.main" },
                }}
              >
                <IconButton
                  onClick={() => toggleWishlist(product.id)}
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    bgcolor: "rgba(255,255,255,0.8)",
                    "&:hover": { bgcolor: "rgba(255,255,255,1)" },
                    zIndex: 2,
                  }}
                >
                  {wishlist.includes(product.id) ? (
                    <Favorite sx={{ color: "red", fontSize: 20 }} />
                  ) : (
                    <FavoriteBorder sx={{ color: "grey.600", fontSize: 20 }} />
                  )}
                </IconButton>

                <CardMedia
                  component="img"
                  height="150"
                  image={product.image}
                  alt={product.name}
                  sx={{
                    objectFit: "cover",
                    transition: "transform 0.4s ease",
                    "&:hover": { transform: "scale(1.08)" },
                  }}
                  onClick={() => navigate(`/products/${product.id}`)}
                />

                <CardContent sx={{ flexGrow: 1, p: 1.5 }}>
                  <Typography
                    variant="subtitle2"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      fontSize: "0.85rem",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                    }}
                    onClick={() => navigate(`/products/${product.id}`)}
                  >
                    {product.name}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
                    <Rating value={product.rating} readOnly size="small" />
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      sx={{ ml: 0.5, fontSize: "0.7rem" }}
                    >
                      ({product.reviewCount})
                    </Typography>
                  </Box>
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: 0.5, mb: 1 }}
                  >
                    <Typography
                      variant="body2"
                      color="primary.main"
                      sx={{ fontWeight: 600 }}
                    >
                      ${product.price}
                    </Typography>
                    {product.originalPrice && (
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{
                          textDecoration: "line-through",
                          fontSize: "0.7rem",
                        }}
                      >
                        ${product.originalPrice}
                      </Typography>
                    )}
                  </Box>

                  <Button
                    variant="outlined"
                    size="small"
                    fullWidth
                    sx={{
                      textTransform: "none",
                      fontSize: "0.75rem",
                      borderRadius: 2,
                      fontWeight: 600,
                      "&:hover": {
                        bgcolor: "primary.main",
                        color: "white",
                        borderColor: "primary.main",
                      },
                    }}
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
      </Box>
    </Box>
  );
};

export default Home;
