import React from 'react'
import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  IconButton,
} from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { Delete, AdminPanelSettings } from '@mui/icons-material'
import { users } from '../../data/mockData'

const AdminUsers = () => {
  const columns = [
    { 
      field: 'avatar', 
      headerName: 'Avatar', 
      width: 80,
      renderCell: (params) => (
        <img 
          src={params.value} 
          alt="Avatar"
          style={{ 
            width: 40, 
            height: 40, 
            borderRadius: '50%',
            objectFit: 'cover'
          }}
        />
      )
    },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    { 
      field: 'role', 
      headerName: 'Role', 
      width: 120,
      renderCell: (params) => (
        <Chip 
          label={params.value} 
          color={params.value === 'admin' ? 'secondary' : 'default'}
          size="small"
        />
      )
    },
    { field: 'joinDate', headerName: 'Join Date', width: 120 },
    { field: 'orders', headerName: 'Orders', width: 100 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <Box>
          <IconButton
            size="small"
            color={params.row.role === 'admin' ? 'secondary' : 'default'}
            onClick={() => handleRoleToggle(params.row)}
          >
            <AdminPanelSettings />
          </IconButton>
          <IconButton
            size="small"
            color="error"
            onClick={() => handleDelete(params.row.id)}
          >
            <Delete />
          </IconButton>
        </Box>
      ),
    },
  ]

  const handleRoleToggle = (user) => {
    // Implement role toggle logic
    console.log('Toggle role for:', user.name)
  }

  const handleDelete = (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      // Implement delete logic
      console.log('Delete user:', userId)
    }
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        User Management
      </Typography>

      <Card>
        <CardContent>
          <DataGrid
            rows={users}
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

export default AdminUsers