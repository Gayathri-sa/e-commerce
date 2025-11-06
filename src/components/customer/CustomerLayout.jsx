import React from 'react'
import { Outlet } from 'react-router-dom'
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Badge, 
  IconButton, 
  Box,
  InputBase,
  Paper
} from '@mui/material'
import { 
  ShoppingCart, 
  Favorite, 
  Person,
  Search
} from '@mui/icons-material'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { styled, alpha } from '@mui/material/styles'


const SearchContainer = styled(Paper)({
  display: 'flex',
  alignItems: 'center',
  width: 400,
  borderRadius: 25,
  backgroundColor: '#f5f5f5', 
  marginRight: 16,
  marginLeft: 16,
  boxShadow: 'none', 
  transition: 'background-color 0.3s ease',
})


const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'inherit',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: 0,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}))

const CustomerLayout = () => {
  const navigate = useNavigate()
  const { isAuthenticated } = useSelector((state) => state.auth)
  const cartItems = useSelector((state) => state.cart.items)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="static" 
        elevation={1}
        sx={{ 
          backgroundColor: 'white', 
          color: 'text.primary',
          borderBottom: 1,
          borderColor: 'grey.200'
        }}
      >
        <Toolbar sx={{ minHeight: 70 }}>
          {/* Logo */}
          <Typography
            variant="h5"
            component="div"
            sx={{ 
              flexGrow: 0,
              cursor: 'pointer',
              fontWeight: 'bold',
              color: 'primary.main',
              mr: 4
            }}
            onClick={() => navigate('/')}
          >
            TechStore
          </Typography>

          {/* Search Bar */}
          <SearchContainer elevation={0}>
            <SearchIconWrapper>
              <Search />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search products..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </SearchContainer>

          <Box sx={{ flexGrow: 1 }} />

          {/* Navigation Items */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Button 
              color="inherit" 
              onClick={() => navigate('/products')}
              sx={{ 
                textTransform: 'none',
                fontWeight: 500,
                color: 'text.primary',
                '&:hover': {
                  backgroundColor: 'grey.100'
                }
              }}
            >
              Products
            </Button>

            <IconButton 
              color="inherit" 
              onClick={() => navigate('/wishlist')}
              sx={{ 
                color: 'text.secondary',
                '&:hover': {
                  backgroundColor: 'grey.100'
                }
              }}
            >
              <Favorite />
            </IconButton>

            <IconButton 
              color="inherit" 
              onClick={() => navigate('/cart')}
              sx={{ 
                color: 'text.secondary',
                '&:hover': {
                  backgroundColor: 'grey.100'
                }
              }}
            >
              <Badge 
                badgeContent={cartItems.length} 
                color="error"
                sx={{
                  '& .MuiBadge-badge': {
                    fontSize: '0.7rem',
                    height: 18,
                    minWidth: 18,
                  }
                }}
              >
                <ShoppingCart />
              </Badge>
            </IconButton>

            {isAuthenticated ? (
              <IconButton 
                color="inherit" 
                onClick={() => navigate('/profile')}
                sx={{ 
                  color: 'text.secondary',
                  '&:hover': {
                    backgroundColor: 'grey.100'
                  }
                }}
              >
                <Person />
              </IconButton>
            ) : (
              <Button 
                color="inherit" 
                onClick={() => navigate('/login')}
                sx={{ 
                  textTransform: 'none',
                  fontWeight: 500,
                  color: 'text.primary',
                  border: 1,
                  borderColor: 'grey.300',
                  px: 2,
                  '&:hover': {
                    backgroundColor: 'grey.100'
                  }
                }}
              >
                Login
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <main>
        <Outlet />
      </main>
    </Box>
  )
}

export default CustomerLayout