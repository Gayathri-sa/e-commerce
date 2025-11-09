import React, { useState } from "react";
import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  Link,
  Alert,
  IconButton,
  InputAdornment,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

// --- Placeholder/Mock Redux functions (keep consistent with your Login page) ---
const useDispatch = () => () => {};
const useNavigate = () => (path) => console.log("Navigating to:", path);
const register = (payload) => ({ type: "AUTH/REGISTER", payload });
// --------------------------------------------------------------------------------

/* Motion variants */
const containerVariant = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};

const fieldVariant = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const leftColVariant = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.2, 0.9, 0.2, 1] },
  },
};

const floatVariant = {
  animate: {
    y: [0, -12, 0],
    rotate: [0, 2, 0, -2, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    },
  },
};

const SocialButton = ({ children, startIcon, sx }) => (
  <Button
    variant="outlined"
    fullWidth
    startIcon={startIcon}
    sx={{
      py: 1.1,
      borderRadius: 2,
      textTransform: "none",
      borderColor: "rgba(0,0,0,0.08)",
      "&:hover": {
        transform: "translateY(-4px)",
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
      },
      ...sx,
    }}
  >
    {children}
  </Button>
);

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    dispatch(
      register({
        id: Date.now(),
        name: formData.name,
        email: formData.email,
        role: "user",
      })
    );

    navigate("/login");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "linear-gradient(180deg, #f6f9ff 0%, #fbfcfe 100%)",
        p: { xs: 3, md: 6 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Floating blobs for soft motion background */}
      <motion.div
        style={{
          position: "absolute",
          width: 380,
          height: 380,
          borderRadius: "50%",
          filter: "blur(70px)",
          background:
            "radial-gradient(circle at 30% 30%, rgba(0,83,224,0.22), rgba(0,83,224,0.06))",
          top: -80,
          left: -120,
          zIndex: 0,
        }}
        variants={floatVariant}
        animate="animate"
      />
      <motion.div
        style={{
          position: "absolute",
          width: 320,
          height: 320,
          borderRadius: "48%",
          filter: "blur(55px)",
          background:
            "radial-gradient(circle at 70% 60%, rgba(255,94,58,0.16), rgba(255,94,58,0.04))",
          bottom: -90,
          right: -100,
          zIndex: 0,
        }}
        variants={floatVariant}
        animate="animate"
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariant}
        style={{ zIndex: 2 }}
      >
        <Paper
          elevation={12}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            maxWidth: 1100,
            width: "100%",
            borderRadius: 3,
            overflow: "hidden",
          }}
        >
          {/* LEFT VISUAL SECTION */}
          <motion.div
            variants={leftColVariant}
            style={{
              flex: "1 1 0",
              background:
                "linear-gradient(135deg, rgba(0,83,224,1) 0%, rgba(0,114,255,0.9) 100%)",
              color: "#fff",
              padding: isMdUp ? 48 : 18,
              minWidth: 340,
              display: isMdUp ? "flex" : "none",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box sx={{ maxWidth: 380 }}>
              <Typography
                variant="h3"
                fontWeight={800}
                sx={{ lineHeight: 1.05 }}
              >
                Join the Style Revolution
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.92, mt: 2 }}>
                Create your account and unlock personalized fashion
                recommendations, faster checkout, and exclusive deals.
              </Typography>

              <motion.div whileHover={{ scale: 1.04, rotate: -2 }}>
                <Box
                  component="img"
                  src="https://www.lakshita.com/cdn/shop/files/LK05308-4.jpg?v=1756968111&width=1200"
                  alt="Fashion Illustration"
                  sx={{
                    width: "100%",
                    maxWidth: 420,
                    height: "auto",
                    borderRadius: 3,
                    mt: 4,
                    boxShadow: "0 25px 60px rgba(2,6,23,0.35)",
                  }}
                />
              </motion.div>
            </Box>
          </motion.div>

          {/* RIGHT FORM SECTION */}
          <Box
            sx={{
              flex: "1 1 0",
              p: { xs: 4, sm: 6 },
              bgcolor: "background.paper",
            }}
          >
            <Box display="flex" alignItems="center" gap={1} mb={3}>
              <ShoppingCartIcon sx={{ color: "#0053e0", fontSize: 30 }} />
              <Typography variant="h6" fontWeight={700}>
                Trendy Collection
              </Typography>
            </Box>

            <Typography
              component="h2"
              variant="h4"
              fontWeight={800}
              gutterBottom
            >
              Create an Account
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Sign up to get started with your shopping journey
            </Typography>

            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}

            <motion.form
              onSubmit={handleSubmit}
              initial="hidden"
              animate="visible"
              variants={containerVariant}
            >
              <motion.div variants={fieldVariant}>
                <TextField
                  fullWidth
                  label="Full Name"
                  name="name"
                  required
                  margin="normal"
                  value={formData.name}
                  onChange={handleChange}
                  sx={{
                    "& .MuiInputBase-root": {
                      borderRadius: 2,
                      bgcolor: "#f7f9fc",
                    },
                  }}
                />
              </motion.div>
              <motion.div variants={fieldVariant}>
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  required
                  margin="normal"
                  value={formData.email}
                  onChange={handleChange}
                  sx={{
                    "& .MuiInputBase-root": {
                      borderRadius: 2,
                      bgcolor: "#f7f9fc",
                    },
                  }}
                />
              </motion.div>
              <motion.div variants={fieldVariant}>
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  required
                  margin="normal"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleClickShowPassword}>
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiInputBase-root": {
                      borderRadius: 2,
                      bgcolor: "#f7f9fc",
                    },
                  }}
                />
              </motion.div>
              <motion.div variants={fieldVariant}>
                <TextField
                  fullWidth
                  label="Confirm Password"
                  name="confirmPassword"
                  required
                  margin="normal"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  sx={{
                    "& .MuiInputBase-root": {
                      borderRadius: 2,
                      bgcolor: "#f7f9fc",
                    },
                  }}
                />
              </motion.div>

              <motion.div variants={fieldVariant} style={{ marginTop: 18 }}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  sx={{
                    py: 1.4,
                    borderRadius: 2,
                    bgcolor: "#0053e0",
                    "&:hover": {
                      bgcolor: "#0044b3",
                      transform: "translateY(-3px)",
                    },
                    boxShadow: "0 12px 30px rgba(0,83,224,0.22)",
                    textTransform: "none",
                    fontWeight: 700,
                  }}
                >
                  Sign Up
                </Button>
              </motion.div>

              <motion.div
                variants={fieldVariant}
                style={{ textAlign: "center", marginTop: 18 }}
              >
                <Typography variant="body2">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    variant="body2"
                    underline="hover"
                    fontWeight={700}
                  >
                    Sign In
                  </Link>
                </Typography>
              </motion.div>
            </motion.form>
          </Box>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default Register;
