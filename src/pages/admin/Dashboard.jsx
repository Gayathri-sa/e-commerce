import React from 'react'
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material'
import {
  ShoppingCart,
  People,
  AttachMoney,
  Inventory,
  TrendingUp,
} from '@mui/icons-material'

const Dashboard = () => {
  const stats = [
    { title: 'Total Revenue', value: '$24,569', icon: <AttachMoney />, change: '+12%' },
    { title: 'Total Orders', value: '1,248', icon: <ShoppingCart />, change: '+8%' },
    { title: 'Total Products', value: '456', icon: <Inventory />, change: '+5%' },
    { title: 'Total Users', value: '8,742', icon: <People />, change: '+15%' },
  ]

  const recentOrders = [
    { id: 1, customer: 'John Doe', date: '2024-01-15', amount: '$199.99', status: 'Delivered' },
    { id: 2, customer: 'Jane Smith', date: '2024-01-14', amount: '$299.99', status: 'Processing' },
    { id: 3, customer: 'Bob Johnson', date: '2024-01-14', amount: '$149.99', status: 'Shipped' },
    { id: 4, customer: 'Alice Brown', date: '2024-01-13', amount: '$399.99', status: 'Delivered' },
  ]

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard Overview
      </Typography>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box>
                    <Typography color="textSecondary" gutterBottom variant="overline">
                      {stat.title}
                    </Typography>
                    <Typography variant="h4" component="div">
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" color="success.main">
                      <TrendingUp sx={{ fontSize: 16, verticalAlign: 'text-bottom' }} />
                      {stat.change} from last month
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      color: 'primary.main',
                      backgroundColor: 'primary.light',
                      borderRadius: '50%',
                      p: 1,
                    }}
                  >
                    {stat.icon}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Recent Orders */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Recent Orders
              </Typography>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Order ID</TableCell>
                      <TableCell>Customer</TableCell>
                      <TableCell>Date</TableCell>
                      <TableCell>Amount</TableCell>
                      <TableCell>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {recentOrders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell>#{order.id}</TableCell>
                        <TableCell>{order.customer}</TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell>{order.amount}</TableCell>
                        <TableCell>
                          <Box
                            sx={{
                              display: 'inline-block',
                              px: 1,
                              py: 0.5,
                              borderRadius: 1,
                              backgroundColor:
                                order.status === 'Delivered'
                                  ? 'success.light'
                                  : order.status === 'Processing'
                                  ? 'warning.light'
                                  : 'info.light',
                              color: 'white',
                              fontSize: '0.75rem',
                            }}
                          >
                            {order.status}
                          </Box>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Dashboard