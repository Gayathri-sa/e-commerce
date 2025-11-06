import React, { useState } from 'react'
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  Rating,
  Chip,
  Divider,
  IconButton,
  TextField,
} from '@mui/material'
import { Add, Remove } from '@mui/icons-material'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { addToCart } from '../../store/slices/cartSlice'
import { products } from '../../data/mockData'
import { motion } from 'framer-motion'

const ProductDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const product = products.find(p => p.id === parseInt(id))

  if (!product) {
    return (
      <Container>
        <Box textAlign="center" py={8}>
          <Typography variant="h4">Product not found</Typography>
          <Button variant="contained" onClick={() => navigate('/products')} sx={{ mt: 2 }}>
            Back to Products
          </Button>
        </Box>
      </Container>
    )
  }

  const handleQuantityChange = (newQuantity) => {
    setQuantity(Math.max(1, newQuantity))
  }

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }))
    toast.success('Product added to cart!')
  }

  const handleBuyNow = () => {
    dispatch(addToCart({ ...product, quantity }))
    navigate('/cart')
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {/* Product Images */}
        <Grid item xs={12} md={6}>
          <Box sx={{ mb: 2 }}>
            <motion.img
              src={product.images ? product.images[selectedImage] : product.image}
              alt={product.name}
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: 400,
                objectFit: 'cover',
                borderRadius: 12,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </Box>

          {product.images && (
            <Box sx={{ display: 'flex', overflowX: 'auto', gap: 1 }}>
              {product.images.map((image, index) => (
                <motion.img
                  key={index}
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  style={{
                    width: 80,
                    height: 80,
                    objectFit: 'cover',
                    borderRadius: 8,
                    cursor: 'pointer',
                    border: selectedImage === index ? '2px solid #2563eb' : '2px solid transparent',
                    flexShrink: 0,
                  }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </Box>
          )}
        </Grid>

        {/* Product Info */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Typography variant="h5" component="h1" gutterBottom sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}>
              {product.name}
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, flexWrap: 'wrap', gap: 1 }}>
              <Rating value={product.rating} readOnly size="small" />
              <Typography variant="body2" color="text.secondary">
                ({product.reviewCount} reviews)
              </Typography>
            </Box>

            <Typography variant="h6" color="primary.main" gutterBottom sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
              ${product.price}
              {product.originalPrice && (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ textDecoration: 'line-through', display: 'inline', ml: 1 }}
                >
                  ${product.originalPrice}
                </Typography>
              )}
            </Typography>

            <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              <Chip label={product.brand} variant="outlined" />
              <Chip label={product.category} variant="outlined" />
              {!product.inStock && <Chip label="Out of Stock" color="error" />}
            </Box>

            <Typography variant="body2" paragraph>
              {product.description}
            </Typography>

            {product.features && (
              <Box sx={{ mb: 3, ml: 2 }}>
                <Typography variant="subtitle1" gutterBottom>
                  Key Features:
                </Typography>
                <ul>
                  {product.features.map((feature, index) => (
                    <li key={index}>
                      <Typography variant="body2">{feature}</Typography>
                    </li>
                  ))}
                </ul>
              </Box>
            )}

            <Divider sx={{ my: 3 }} />

            {/* Quantity Selector & Buttons */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: { xs: 'stretch', sm: 'center' },
                gap: 2,
                mb: 3,
              }}
            >
              {/* Quantity Selector */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  border: '1px solid #e0e0e0',
                  borderRadius: 1,
                  width: 'fit-content'
                }}
              >
                <IconButton
                  onClick={() => handleQuantityChange(quantity - 1)}
                  disabled={quantity <= 1}
                  size="small"
                >
                  <Remove fontSize="small" />
                </IconButton>

                <TextField
                  value={quantity}
                  onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                  inputProps={{
                    min: 1,
                    style: {
                      textAlign: 'center',
                      width: '50px',
                      border: 'none',
                      borderLeft: '1px solid #e0e0e0',
                      borderRight: '1px solid #e0e0e0',
                      borderRadius: 0,
                      padding: '8px 4px'
                    },
                  }}
                  variant="standard"
                  size="small"
                  sx={{
                    '& .MuiInput-underline:before': {
                      borderBottom: 'none !important',
                    },
                    '& .MuiInput-underline:after': {
                      borderBottom: 'none !important',
                    },
                    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                      borderBottom: 'none !important',
                    },
                  }}
                />

                <IconButton
                  onClick={() => handleQuantityChange(quantity + 1)}
                  size="small"
                >
                  <Add fontSize="small" />
                </IconButton>
              </Box>

              {/* Buttons */}
              <Box sx={{ display: 'flex', gap: 2, flex: 1 }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  sx={{
                    flex: 1,
                  }}
                >
                  Add to Cart
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  onClick={handleBuyNow}
                  disabled={!product.inStock}
                  sx={{
                    flex: 1,

                  }}
                >
                  Buy Now
                </Button>
              </Box>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ProductDetails
