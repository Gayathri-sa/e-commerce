// src/App.jsx
import React, { useState, useEffect } from "react";
// The 'Routes' and 'Route' imports are no longer needed here
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Components & Routes
import BallLoader from "./components/common/LoadingSpinner";
import AppRoutes from "./router/AppRoutes"; // Import the new route file

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading (like fetching app config)
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <BallLoader size={60} color="#ff5722" />;

  return (
    <>
      <AppRoutes /> {/* Use the imported route component */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
