import React from 'react';
import { Box } from '@mui/material';
import { keyframes } from '@mui/system';

const bounce = keyframes`
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1); }
`;

const BallLoader = ({
  size = 60,
  colors = ['#1976d2', '#ff4081', '#ffc107'],
  margin = 8,
}) => {
  const ballStyle = (color) => ({
    backgroundColor: color,
    borderRadius: '50%',
    display: 'inline-block',
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
      bgcolor="rgba(255,255,255,0.7)" // optional backdrop
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          gap: {
            xs: 1,   // small gap for phones
            sm: 2,   // tablets
            md: 3,   // laptops
          },
        }}
      >
        {colors.map((c, i) => (
          <Box
            key={i}
            sx={{
              ...ballStyle(c),
              width: {
                xs: size * 0.4, // mobile
                sm: size * 0.6, // tablet
                md: size,       // desktop
              },
              height: {
                xs: size * 0.4,
                sm: size * 0.6,
                md: size,
              },
              margin: {
                xs: margin * 0.5,
                sm: margin * 0.75,
                md: margin,
              },
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default BallLoader;
