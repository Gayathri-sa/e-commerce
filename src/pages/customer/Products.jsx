import React, { useState, useMemo } from 'react'
import {
  Container,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Slider,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Box,
  Chip,
  Button,
  IconButton,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { products } from '../../data/mockData'
import { motion } from 'framer-motion'
import { ShoppingCart, Favorite, FavoriteBorder } from '@mui/icons-material'

const Products = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedBrand, setSelectedBrand] = useState('')
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [minRating, setMinRating] = useState(0)
  const [wishlist, setWishlist] = useState([])

  const categories = [...new Set(products.map(p => p.category))]
  const brands = [...new Set(products.map(p => p.brand))]

  const toggleWishlist = (id) => {
    setWishlist(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    )
  }

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description?.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = !selectedCategory || product.category === selectedCategory
      const matchesBrand = !selectedBrand || product.brand === selectedBrand
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
      const matchesRating = product.rating >= minRating
      return matchesSearch && matchesCategory && matchesBrand && matchesPrice && matchesRating
    })
  }, [searchTerm, selectedCategory, selectedBrand, priceRange, minRating])

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box
        sx={{
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 3,
          p: 2,
          mb: 2,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: 2,
          backgroundColor: 'background.paper',
        }}
      >
        <TextField
          label="Search"
          size="small"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ flex: { xs: '1 1 100%', md: '1 1 200px' } }}
        />

        <FormControl size="small" sx={{ minWidth: 140 }}>
          <InputLabel>Category</InputLabel>
          <Select
            value={selectedCategory}
            label="Category"
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <MenuItem value="">All</MenuItem>
            {categories.map(c => <MenuItem key={c} value={c}>{c}</MenuItem>)}
          </Select>
        </FormControl>

        <FormControl size="small" sx={{ minWidth: 140 }}>
          <InputLabel>Brand</InputLabel>
          <Select
            value={selectedBrand}
            label="Brand"
            onChange={(e) => setSelectedBrand(e.target.value)}
          >
            <MenuItem value="">All</MenuItem>
            {brands.map(b => <MenuItem key={b} value={b}>{b}</MenuItem>)}
          </Select>
        </FormControl>

        <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 200px' } }}>
          <Typography variant="caption" sx={{ display: 'block', mb: 0.5 }}>
            Price Range (${priceRange[0]} - ${priceRange[1]})
          </Typography>
          <Slider
            value={priceRange}
            onChange={(e, val) => setPriceRange(val)}
            min={0}
            max={1000}
            step={10}
            size="small"
          />
        </Box>

        <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 180px' } }}>
          <Typography variant="caption" sx={{ display: 'block', mb: 0.5 }}>
            Min Rating ({minRating}+)
          </Typography>
          <Slider
            value={minRating}
            onChange={(e, val) => setMinRating(val)}
            min={0}
            max={5}
            step={0.5}
            size="small"
          />
        </Box>

        <Button
          variant="outlined"
          color="error"
          size="small"
          onClick={() => {
            setSearchTerm('')
            setSelectedCategory('')
            setSelectedBrand('')
            setPriceRange([0, 1000])
            setMinRating(0)
          }}
        >
          Clear Filters
        </Button>
      </Box>

      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
        Products ({filteredProducts.length})
      </Typography>

      <Grid container spacing={2}>
        {filteredProducts.map((product, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={2.4}
            key={product.id}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card
                sx={{
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  overflow: 'hidden',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  '&:hover': { borderColor: 'primary.main' },
                }}
                onClick={() => navigate(`/products/${product.id}`)}
              >
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.name}
                    height="180"
                    sx={{
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease',
                      '&:hover': { transform: 'scale(1.05)' },
                    }}
                  />
                  <IconButton
                    size="small"
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleWishlist(product.id)
                    }}
                    sx={{
                      position: 'absolute',
                      top: 8,
                      right: 8,
                      bgcolor: 'white',
                      '&:hover': { bgcolor: 'grey.100' },
                    }}
                  >
                    {wishlist.includes(product.id) ? (
                      <Favorite sx={{ color: 'red', fontSize: 20 }} />
                    ) : (
                      <FavoriteBorder sx={{ color: 'grey.600', fontSize: 20 }} />
                    )}
                  </IconButton>
                </Box>

                <CardContent sx={{ flexGrow: 1, p: 1.5 }}>
                  <Typography
                    variant="subtitle1"
                    noWrap
                    sx={{ fontWeight: 'bold', fontSize: '0.9rem', mb: 0.5 }}
                  >
                    {product.name}
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                    <Rating value={product.rating} readOnly size="small" />
                    <Typography variant="caption" sx={{ ml: 0.5 }}>
                      ({product.reviewCount})
                    </Typography>
                  </Box>

                  <Typography variant="caption" color="text.secondary">
                    {product.brand} • {product.category}
                  </Typography>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1, mb: 1 }}>
                    <Typography
                      variant="subtitle2"
                      sx={{ fontWeight: 'bold', color: 'primary.main' }}
                    >
                      ${product.price}
                    </Typography>
                    {product.originalPrice && (
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ textDecoration: 'line-through', fontSize: '0.75rem' }}
                      >
                        ${product.originalPrice}
                      </Typography>
                    )}
                  </Box>

                  <Button
                    variant="outlined"
                    size="small"
                    fullWidth
                    startIcon={<ShoppingCart fontSize="small" />}
                    sx={{
                      borderRadius: 2,
                      textTransform: 'none',
                      fontSize: '0.8rem',
                      py: 0.5,
                      '&:hover': { bgcolor: 'primary.main', color: 'white' },
                    }}
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* No Results */}
      {filteredProducts.length === 0 && (
        <Box textAlign="center" py={8}>
          <Typography variant="body1" color="text.secondary">
            No products found matching your filters.
          </Typography>
        </Box>
      )}
    </Container>
  )
}

export default Products
