import React, { useState } from 'react'
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
  Divider,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { clearCart } from '../../store/slices/cartSlice'
import { createOrder } from '../../store/slices/orderSlice'

const Checkout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { items } = useSelector((state) => state.cart)
  const [contactData, setContactData] = useState({
    email: '',
    phone: '',
    newsOffers: true,
  })
  const [shippingData, setShippingData] = useState({
    country: 'India',
    firstName: '',
    lastName: '',
    company: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
    saveInfo: false,
  })
  const [billingAddress, setBillingAddress] = useState('same')
  const [addTip, setAddTip] = useState(false)

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = subtotal * 0.1
  const total = subtotal + tax

  const handlePlaceOrder = () => {
    const order = {
      id: Date.now(),
      date: new Date().toISOString().split('T')[0],
      status: 'processing',
      total,
      items,
      contact: contactData,
      shipping: shippingData,
    }
    dispatch(createOrder(order))
    dispatch(clearCart())
    toast.success('Order placed successfully!')
    navigate('/order-success')
  }

  return (
    <Container maxWidth="lg" sx={{ py: 2 ,mt:3}}>
        <Grid container spacing={4} sx={{ height: 'calc(100vh - 100px)' }}>
        {/* Left Column - Forms */}
        <Grid 
          item 
          xs={12} 
          md={7} 
          sx={{ 
            maxHeight: '100%', 
            overflowY: 'auto', 
            pr: 1 
          }}
        >
          {/* Delivery Section */}
          <Card sx={{ mb: 3, border: '1px solid #e0e0e0' }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Delivery
              </Typography>

              {/* Country */}
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Country
                </Typography>
                <TextField
                  fullWidth
                  size="small"
                  value={shippingData.country}
                  onChange={(e) => setShippingData({ ...shippingData, country: e.target.value })}
                />
              </Box>

              {/* Name Row */}
              <Grid container spacing={2} sx={{ mb: 2 }}>
                <Grid item xs={6}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                    First name
                  </Typography>
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="First name"
                    value={shippingData.firstName}
                    onChange={(e) => setShippingData({ ...shippingData, firstName: e.target.value })}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                    Last name
                  </Typography>
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="Last name"
                    value={shippingData.lastName}
                    onChange={(e) => setShippingData({ ...shippingData, lastName: e.target.value })}
                  />
                </Grid>
              </Grid>

              {/* Company */}
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Company (optional)
                </Typography>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Company"
                  value={shippingData.company}
                  onChange={(e) => setShippingData({ ...shippingData, company: e.target.value })}
                />
              </Box>

              {/* Address */}
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Address
                </Typography>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Address"
                  value={shippingData.address}
                  onChange={(e) => setShippingData({ ...shippingData, address: e.target.value })}
                />
              </Box>

              {/* Apartment */}
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Apartment, suite, etc. (optional)
                </Typography>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Apartment, suite, etc."
                  value={shippingData.apartment}
                  onChange={(e) => setShippingData({ ...shippingData, apartment: e.target.value })}
                />
              </Box>

              {/* City, State, ZIP */}
              <Grid container spacing={2} sx={{ mb: 2 }}>
                <Grid item xs={4}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                    City
                  </Typography>
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="City"
                    value={shippingData.city}
                    onChange={(e) => setShippingData({ ...shippingData, city: e.target.value })}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                    State
                  </Typography>
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="State"
                    value={shippingData.state}
                    onChange={(e) => setShippingData({ ...shippingData, state: e.target.value })}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                    PIN Code
                  </Typography>
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="PIN Code"
                    value={shippingData.zipCode}
                    onChange={(e) => setShippingData({ ...shippingData, zipCode: e.target.value })}
                  />
                </Grid>
              </Grid>

              {/* Phone */}
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Phone
                </Typography>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Phone"
                  value={shippingData.phone}
                  onChange={(e) => setShippingData({ ...shippingData, phone: e.target.value })}
                />
              </Box>

              <FormControlLabel
                control={
                  <Checkbox 
                    checked={shippingData.saveInfo}
                    onChange={(e) => setShippingData({ ...shippingData, saveInfo: e.target.checked })}
                  />
                }
                label="Save this information for next time"
              />
            </CardContent>
          </Card>

          {/* Shipping Method */}
          <Card sx={{ mb: 3, border: '1px solid #e0e0e0' }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Shipping method
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Enter your shipping address to view available shipping methods.
              </Typography>
            </CardContent>
          </Card>

          {/* Payment Section */}
          <Card sx={{ mb: 3, border: '1px solid #e0e0e0' }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Payment
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                All transactions are secure and encrypted.
              </Typography>
              
              <Box sx={{ p: 2, border: '1px solid #e0e0e0', borderRadius: 1, mb: 2 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                  Cards, UPI, Net Banking, Wallet, etc. by PayU India
                </Typography>
              </Box>

              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                After clicking "Pay now", you will be redirected to complete your purchase securely.
              </Typography>

              <FormControl component="fieldset" sx={{ mb: 2 }}>
                <FormLabel component="legend" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Billing address
                </FormLabel>
                <RadioGroup
                  value={billingAddress}
                  onChange={(e) => setBillingAddress(e.target.value)}
                >
                  <FormControlLabel 
                    value="same" 
                    control={<Radio />} 
                    label="Same as shipping address" 
                  />
                  <FormControlLabel 
                    value="different" 
                    control={<Radio />} 
                    label="Use a different billing address" 
                  />
                </RadioGroup>
              </FormControl>

              <FormControlLabel
                control={
                  <Checkbox 
                    checked={addTip}
                    onChange={(e) => setAddTip(e.target.checked)}
                  />
                }
                label="Show your support for the team at Commission store"
              />
            </CardContent>
          </Card>

          {/* Pay Now Button */}
          <Button
            fullWidth
            variant="contained"
            size="large"
            onClick={handlePlaceOrder}
            sx={{ 
              py: 1.5, 
              fontSize: '1.1rem',
              backgroundColor: '#000',
              '&:hover': { backgroundColor: '#333' },
            }}
          >
            Pay now
          </Button>
        </Grid>

        {/* Right Column - Order Summary */}
        <Grid item xs={12} md={5}>
          <Box 
            sx={{ 
              position: 'sticky', 
              top: 20, 
              height: 'fit-content', 
              bgcolor: '#f7f7f7', 
              borderRadius: 1,
              p: 2
            }}
          >
            <Card sx={{ border: 'none', boxShadow: 'none', bgcolor: 'transparent' }}>
              <CardContent sx={{ p: 0 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Order Summary
                </Typography>

                {items.map((item) => (
                  <Box key={item.id} sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box 
                        sx={{ 
                          width: 40, 
                          height: 40, 
                          backgroundColor: '#e0e0e0',
                          borderRadius: 1,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Typography variant="body2" color="text.secondary">
                          {item.quantity}
                        </Typography>
                      </Box>
                      <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                        {item.name}
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </Typography>
                  </Box>
                ))}

                <Divider sx={{ my: 2 }} />

                <Box sx={{ mb: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Subtotal</Typography>
                    <Typography variant="body2">${subtotal.toFixed(2)}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Shipping</Typography>
                    <Typography variant="body2">$0.00</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Tax</Typography>
                    <Typography variant="body2">${tax.toFixed(2)}</Typography>
                  </Box>
                </Box>

                <Divider sx={{ my: 2 }} />

                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Total
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    ${total.toFixed(2)}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Checkout
