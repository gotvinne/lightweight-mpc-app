import React from 'react'

import { Box, Typography, Link } from '@mui/material';
export default function About() {
  return (
    <Box sx={{ width: '50%', pl: "25%", pt: "5%"}}>
      <Typography variant="body1" gutterBottom>
        This is a repo for implementing the master's thesis for the study programme Cybernetics & Robotics at NTNU the fall 2022. The thesis is handed out by Equinor, and aims on implementing a simpler software framework simulating optimized control on step response models.
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
      <Link href="https://www.itk.ntnu.no/ansatte/imsland_lars/projects2022.html" underline="hover">
        {'Masters thesis description'}
        </Link>
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Master student: Geir Ola Tvinnereim 
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Supervisors:
        Prof. Lars Struen Imsland & Dr. Gisle Otto Eikrem
      </Typography>
    </Box>
  );
}
