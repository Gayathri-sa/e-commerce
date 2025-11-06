import React from 'react'
import {
  Container,
  Paper,
  Typography,
  Button,
  Box,
  Card,
  CardContent,
  Grid,
} from '@mui/material'
import { CheckCircle, ShoppingBag } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion"
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'

const OrderSuccess = () => {
  const navigate = useNavigate()
  const { width, height } = useWindowSize()

  return (
    <Container maxWidth="sm" sx={{ py: 3}}>
      {/* Confetti */}
      <Confetti width={width} height={height} numberOfPieces={200} recycle={false} />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Paper
          elevation={6}
          sx={{
            p: 4,
            textAlign: 'center',
            borderRadius: 4,
            background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            <CheckCircle
              sx={{
                fontSize: 80,
                color: 'success.main',
                mb: 2,
                transform: 'rotate(-10deg)',
              }}
            />
          </motion.div>

          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 'bold', color: 'success.dark' }}
          >
            Order Confirmed!
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            gutterBottom
            sx={{ mb: 4 }}
          >
            Thank you for your purchase! Your order is on its way and will be delivered soon.
          </Typography>

          <Card
            variant="outlined"
            sx={{
              mb: 4,
              borderRadius: 3,
              border: '2px dashed #4caf50',
              backgroundColor: '#f9fff9',
            }}
          >
            <CardContent>
              <Grid container spacing={2} textAlign="left">
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="text.secondary">
                    Order Number
                  </Typography>
                  <Typography variant="body1" fontWeight="bold">
                    #ORD-{Date.now()}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="text.secondary">
                    Estimated Delivery
                  </Typography>
                  <Typography variant="body1" fontWeight="bold">
                    Jan 25, 2024
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="text.secondary">
                    Total Amount
                  </Typography>
                  <Typography variant="body1" fontWeight="bold">
                    $199.99
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="subtitle2" color="text.secondary">
                    Payment Method
                  </Typography>
                  <Typography variant="body1" fontWeight="bold">
                    Credit Card
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<ShoppingBag />}
              sx={{
                background: 'linear-gradient(90deg, #43e97b, #38f9d7)',
                color: '#fff',
                fontWeight: 'bold',
                px: 4,
                '&:hover': {
                  background: 'linear-gradient(90deg, #38f9d7, #43e97b)',
                },
              }}
              onClick={() => navigate('/products')}
            >
              Continue Shopping
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: '#4caf50',
                color: '#4caf50',
                fontWeight: 'bold',
                px: 4,
                '&:hover': {
                  borderColor: '#43e97b',
                  backgroundColor: '#f0fff0',
                },
              }}
              onClick={() => navigate('/profile')}
            >
              View Orders
            </Button>
          </Box>
        </Paper>
      </motion.div>
    </Container>
  )
}

export default OrderSuccess
