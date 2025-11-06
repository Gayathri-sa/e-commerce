import React, { useState } from 'react';
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Link,
  Alert,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { login } from '../../store/slices/authSlice';
import { motion } from "framer-motion";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const from = location.state?.from?.pathname || '/';

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (formData.email === 'admin@example.com' && formData.password === 'admin123') {
      dispatch(login({ id: 1, name: 'Admin User', email: formData.email, role: 'admin' }));
      navigate('/admin');
    } else if (formData.email === 'user@example.com' && formData.password === 'user123') {
      dispatch(login({ id: 2, name: 'John Doe', email: formData.email, role: 'user' }));
      navigate(from, { replace: true });
    } else {
      setError('Invalid email or password');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Paper
          elevation={6}
          sx={{
            padding: 4,
            borderRadius: 3,
            width: '100%',
            boxShadow: '0px 10px 30px rgba(0,0,0,0.1)',
            background: 'linear-gradient(to bottom, #fff, #f5f5f5)',
          }}
        >
          <Typography
            component="h1"
            variant="h5"
            align="center"
            fontWeight={600}
            gutterBottom
          >
            Welcome Back
          </Typography>

          {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="dense"
              required
              fullWidth
              size="small"
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={formData.email}
              onChange={handleChange}
              sx={{
                '& .MuiInputBase-root': { borderRadius: 2 },
              }}
            />
            <TextField
              margin="dense"
              required
              fullWidth
              size="small"
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formData.password}
              onChange={handleChange}
              sx={{
                '& .MuiInputBase-root': { borderRadius: 2 },
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{
                mt: 2,
                mb: 1,
                py: 1.5,
                borderRadius: 3,
                background: 'linear-gradient(90deg, #1976d2, #42a5f5)',
                '&:hover': { background: 'linear-gradient(90deg, #1565c0, #1e88e5)' },
              }}
            >
              Sign In
            </Button>

            <Box textAlign="center" mb={2}>
              <Link href="/register" variant="body2" underline="hover">
                Don't have an account? Sign Up
              </Link>
            </Box>

            {/* Demo Credentials */}
            <Box sx={{ p: 2, bgcolor: 'grey.50', borderRadius: 2 }}>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Demo Credentials:
              </Typography>
              <Typography variant="body2">Admin: admin@example.com / admin123</Typography>
              <Typography variant="body2">User: user@example.com / user123</Typography>
            </Box>
          </Box>
        </Paper>
      </motion.div>
    </Container>
  );
};

export default Login;
