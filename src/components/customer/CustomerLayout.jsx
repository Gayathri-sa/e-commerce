import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Badge,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
  Divider,
} from "@mui/material";
import {
  ShoppingCart,
  Favorite,
  Person,
  Menu as MenuIcon,
  Close as CloseIcon,
  Storefront,
  ArrowForwardIos as ArrowForwardIosIcon,
} from "@mui/icons-material";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const sections = [
  { label: "About", id: "about" },
  { label: "Skills & Tools", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function CustomerLayout() {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const cartItems = useSelector((state) => state.cart.items);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes slideDown {
        from { opacity: 0; transform: translateY(-20%); }
        to { opacity: 1; transform: translateY(0); }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
      setMenuOpen(false);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "#ffffff",
          color: "#111827",
          borderBottom: "1px solid #e5e7eb",
          boxShadow: 'none',
          zIndex: 1201,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 4 } }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton
              sx={{
                background: "linear-gradient(to right, #4f46e5, #06b6d4)",
                width: 40,
                height: 40,
                "&:hover": {
                  background: "linear-gradient(to right, #4338ca, #0891b2)",
                },
              }}
              onClick={() => navigate("/")}
            >
              <Storefront sx={{ color: "white" }} />
            </IconButton>

            <Typography
              variant="h6"
              sx={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                color: "transparent",
                background: "linear-gradient(to right, #4f46e5, #06b6d4)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                fontSize: "1.5rem",
                cursor: "pointer",
              }}
              onClick={() => navigate("/")}
            >
              TechStore
            </Typography>
          </Box>

          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Typography
                onClick={() => navigate("/products")}
                sx={{
                  textTransform: "none",
                  fontWeight: 500,
                  cursor:'pointer',
                }}
              >
                Products
              </Typography>

              <IconButton  onClick={() => navigate("/wishlist")}>
                <Favorite />
              </IconButton>

              <IconButton  onClick={() => navigate("/cart")}>
                <Badge badgeContent={cartItems.length} color="error">
                  <ShoppingCart />
                </Badge>
              </IconButton>

              {isAuthenticated ? (
                <IconButton  onClick={() => navigate("/profile")}>
                  <Person />
                </IconButton>
              ) : (
                <Button
                  onClick={() => navigate("/login")}
                  sx={{
                    textTransform: "none",
                    border: "1px solid #e5e7eb",
                    color: "text.primary",
                    px: 2,
                    "&:hover": { backgroundColor: "grey.100" },
                  }}
                >
                  Login
                </Button>
              )}
            </Box>
          )}

          {isMobile && (
            <IconButton
              edge="end"
              onClick={() => setMenuOpen(!menuOpen)}
              sx={{
                background: "linear-gradient(to right, #4f46e5, #06b6d4)",
                color: "#fff",
                "&:hover": {
                  background: "linear-gradient(to right, #4338ca, #0891b2)",
                },
              }}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          )}
        </Toolbar>

        {isMobile && menuOpen && (
          <Box
            sx={{
              position: "absolute",
              top: "64px",
              left: 0,
              width: "100%",
              background: "#FFF",
              color: "#fff",
              animation: "slideDown 0.3s ease",
              boxShadow: "0px 10px 20px rgba(0,0,0,0.4)",
              zIndex: 1200,
            }}
          >
            <List>
              {sections.map(({ label, id }) => (
                <ListItem key={id} disablePadding>
                  <ListItemButton
                    onClick={() => handleScroll(id)}
                    sx={{
                      mx: 2,
                      mb: 1,
                      borderRadius: 2,
                      background:
                        activeSection === id
                          ? "linear-gradient(to right, #4f46e5, #06b6d4)"
                          : "transparent",
                      "&:hover": {
                        background: "linear-gradient(to right, #3730a3, #2563eb)",
                      },
                    }}
                  >
                    <ListItemIcon sx={{ color: "#a5b4fc", minWidth: 32 }}>
                      <ArrowForwardIosIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      primary={label}
                      primaryTypographyProps={{
                        fontWeight: activeSection === id ? 700 : 500,
                        color: activeSection === id ? "#fff" : "#cbd5e1",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}

              <Divider sx={{ borderColor: "#1e293b", my: 1 }} />

              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => {
                    isAuthenticated ? navigate("/profile") : navigate("/login");
                    setMenuOpen(false);
                  }}
                  sx={{
                    mx: 2,
                    borderRadius: 2,
                    background:
                      "linear-gradient(to right, #1e40af, #2563eb)",
                    "&:hover": { opacity: 0.9 },
                  }}
                >
                  <ListItemIcon sx={{ color: "#fff", minWidth: 32 }}>
                    <Person />
                  </ListItemIcon>
                  <ListItemText
                    primary={isAuthenticated ? "Profile" : "Login"}
                    primaryTypographyProps={{
                      fontWeight: 600,
                      color: "#fff",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        )}
      </AppBar>

      <Toolbar />
      <Box component="main">
        <Outlet />
      </Box>
    </Box>
  );
}
