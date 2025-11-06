import React from 'react';
import { Box } from '@mui/material';
import { keyframes } from '@mui/system';

const bounce = keyframes`
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1); }
`;

const BallLoader = ({ size = 60, colors = ['#1976d2', '#ff4081', '#ffc107'], margin = 8 }) => {
  const ballStyle = (color) => ({
    width: size,
    height: size,
    backgroundColor: color,
    borderRadius: '50%',
    display: 'inline-block',
    margin: margin,
    animation: `${bounce} 1.4s infinite ease-in-out both`,
  });

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      zIndex={1300}
      pointerEvents="none"
    >
      <Box display="flex">
        {colors.map((c, i) => (
          <Box key={i} sx={{ ...ballStyle(c), animationDelay: `${i * 0.2}s` }} />
        ))}
      </Box>
    </Box>
  );
};


export default BallLoader;
