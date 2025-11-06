import React from 'react'
import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { useSelector, useDispatch } from 'react-redux'
import { updateOrderStatus } from '../../store/slices/orderSlice'

const AdminOrders = () => {
  const dispatch = useDispatch()
  const { orders } = useSelector((state) => state.orders)

  const columns = [
    { field: 'id', headerName: 'Order ID', width: 100 },
    { field: 'customer', headerName: 'Customer', width: 150 },
    { field: 'date', headerName: 'Date', width: 120 },
    { field: 'amount', headerName: 'Amount', width: 120 },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      renderCell: (params) => (
        <FormControl fullWidth size="small">
          <Select
            value={params.value}
            onChange={(e) => handleStatusChange(params.row.id, e.target.value)}
          >
            <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="processing">Processing</MenuItem>
            <MenuItem value="shipped">Shipped</MenuItem>
            <MenuItem value="delivered">Delivered</MenuItem>
            <MenuItem value="cancelled">Cancelled</MenuItem>
          </Select>
        </FormControl>
      ),
    },
    {
      field: 'items',
      headerName: 'Items',
      width: 200,
      renderCell: (params) => (
        <Typography variant="body2">
          {params.value.length} item(s)
        </Typography>
      ),
    },
  ]

  const handleStatusChange = (orderId, newStatus) => {
    dispatch(updateOrderStatus({ id: orderId, status: newStatus }))
  }

  // Mock data for demonstration
  const mockOrders = [
    {
      id: 1,
      customer: 'John Doe',
      date: '2024-01-15',
      amount: '$199.99',
      status: 'processing',
      items: [{ id: 1, name: 'Wireless Headphones' }]
    },
    {
      id: 2,
      customer: 'Jane Smith',
      date: '2024-01-14',
      amount: '$299.99',
      status: 'shipped',
      items: [{ id: 5, name: 'Designer Handbag' }]
    }
  ]

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Order Management
      </Typography>

      <Card>
        <CardContent>
          <DataGrid
            rows={mockOrders}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[5, 10, 25]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </CardContent>
      </Card>
    </Box>
  )
}

export default AdminOrders