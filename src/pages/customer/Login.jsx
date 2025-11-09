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

// --- Placeholder/Mock Imports (for isolated testing) ---
const useDispatch = () => () => {};
const useNavigate = () => (path) => console.log("Navigating to:", path);
const useLocation = () => ({ state: null });
const login = (payload) => ({ type: "AUTH/LOGIN", payload });
// --------------------------------------------------------

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

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();

  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (
      formData.email === "admin@example.com" &&
      formData.password === "admin123"
    ) {
      dispatch(
        login({
          id: 1,
          name: "Admin User",
          email: formData.email,
          role: "admin",
        })
      );
      navigate("/admin");
    } else if (
      formData.email === "user@example.com" &&
      formData.password === "user123"
    ) {
      dispatch(
        login({ id: 2, name: "John Doe", email: formData.email, role: "user" })
      );
      navigate(from, { replace: true });
    } else {
      setError("Invalid email or password");
    }
  };

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "linear-gradient(180deg, #f6f9ff 0%, #fbfcfe 100%)",
        p: { xs: 2, sm: 4, md: 6 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Floating Background Blobs */}
      <motion.div
        style={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          filter: "blur(70px)",
          background:
            "radial-gradient(circle at 30% 30%, rgba(0,83,224,0.22), rgba(0,83,224,0.06))",
          top: -60,
          left: -80,
          zIndex: 0,
        }}
        variants={floatVariant}
        animate="animate"
      />
      <motion.div
        style={{
          position: "absolute",
          width: 260,
          height: 260,
          borderRadius: "50%",
          filter: "blur(60px)",
          background:
            "radial-gradient(circle at 70% 60%, rgba(255,94,58,0.16), rgba(255,94,58,0.04))",
          bottom: -70,
          right: -80,
          zIndex: 0,
        }}
        variants={floatVariant}
        animate="animate"
      />

      {/* Main Card */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariant}
        style={{ zIndex: 2 }}
      >
        <Paper
          elevation={10}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            maxWidth: 1100,
            width: "100%",
            borderRadius: 3,
            overflow: "hidden",
          }}
        >
          {/* LEFT COLUMN (Illustration) */}
          <motion.div
            variants={leftColVariant}
            style={{
              flex: "1 1 0",
              background:
                "linear-gradient(135deg, rgba(0,83,224,1) 0%, rgba(0,114,255,0.9) 100%)",
              color: "#fff",
              padding: isMdUp ? 48 : 24,
              display: isMdUp ? "flex" : "none",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Box sx={{ maxWidth: 400 }}>
              <Typography
                variant="h4"
                fontWeight={800}
                sx={{ lineHeight: 1.1 }}
              >
                Discover Your Next Favorite Outfit
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.9, mt: 2 }}>
                Explore curated women’s fashion — modern visuals, seamless
                checkout, and an admin dashboard to manage products
                effortlessly.
              </Typography>
              <motion.div
                whileHover={{ scale: 1.04, rotate: -2 }}
                transition={{ type: "spring", stiffness: 240, damping: 18 }}
              >
                <Box
                  component="img"
                  src="https://www.lakshita.com/cdn/shop/files/LK05308-4.jpg?v=1756968111&width=1200"
                  alt="Fashion Illustration"
                  sx={{
                    width: "100%",
                    maxWidth: 420,
                    mt: 4,
                    borderRadius: 3,
                    boxShadow: "0 20px 60px rgba(2,6,23,0.3)",
                  }}
                />
              </motion.div>
            </Box>
          </motion.div>

          {/* RIGHT COLUMN (Login Form) */}
          <Box
            sx={{
              flex: "1 1 0",
              p: { xs: 3, sm: 5, md: 6 },
              bgcolor: "background.paper",
              minWidth: { md: 420 },
            }}
          >
            {/* Brand Header */}
            <Box display="flex" alignItems="center" gap={1} mb={3}>
              <ShoppingCartIcon sx={{ color: "#0053e0", fontSize: 28 }} />
              <Typography variant="h6" fontWeight={700}>
                Trendy Collection
              </Typography>
            </Box>

            {/* Title + Subtitle */}
            <motion.div variants={fieldVariant}>
              <Typography
                component="h2"
                variant={isSmUp ? "h4" : "h5"}
                fontWeight={800}
                gutterBottom
              >
                Welcome Back
              </Typography>
            </motion.div>
            <motion.div variants={fieldVariant}>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Sign in to continue to your account
              </Typography>
            </motion.div>

            {/* Error Alert */}
            {error && (
              <motion.div variants={fieldVariant}>
                <Alert severity="error" sx={{ mb: 2 }}>
                  {error}
                </Alert>
              </motion.div>
            )}

            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial="hidden"
              animate="visible"
              variants={containerVariant}
            >
              <motion.div variants={fieldVariant}>
                <TextField
                  fullWidth
                  required
                  id="email"
                  label="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  margin="normal"
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
                  required
                  name="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  margin="normal"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
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

              <motion.div
                variants={fieldVariant}
                style={{ textAlign: "right", marginTop: 6 }}
              >
                <Link href="/forgot-password" variant="body2" underline="hover">
                  Forgot password?
                </Link>
              </motion.div>

              {/* Submit Button */}
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
                  Login
                </Button>
              </motion.div>

              <motion.div
                variants={fieldVariant}
                style={{
                  display: "flex",
                  flexDirection: isSmUp ? "row" : "column",
                  gap: 12,
                  marginTop: 12,
                }}
              ></motion.div>

              {/* Demo Info + Register Link */}
              <motion.div
                variants={fieldVariant}
                style={{
                  padding: 12,
                  background: "rgba(240,242,246,0.9)",
                  borderRadius: 10,
                  marginTop: 18,
                }}
              >
                <Typography variant="body2" fontWeight={700}>
                  Demo Credentials:
                </Typography>
                <Typography variant="caption" display="block">
                  Admin: admin@example.com / admin123
                </Typography>
                <Typography variant="caption" display="block">
                  User: user@example.com / user123
                </Typography>
              </motion.div>

              <motion.div
                variants={fieldVariant}
                style={{ textAlign: "center", marginTop: 18 }}
              >
                <Typography variant="body2">
                  Don’t have an account?{" "}
                  <Link
                    href="/register"
                    variant="body2"
                    underline="hover"
                    fontWeight={700}
                  >
                    Sign up
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

export default Login;
