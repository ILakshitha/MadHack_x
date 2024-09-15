import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import trofy from '../assets/tropy.png';


// Custom styles for the card
const StyledCard = styled(Card)(({ theme }) => ({
  margin: '40px',
  maxWidth: 345,
  background: 'radial-gradient(circle, #D2E4F1 0%, #003285 70%)',
 // backgroundColor: 'red', // Dark background similar to your image
  color: '#fff', // White text color
  textAlign: 'center',
  borderRadius: '16px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
}));

const StyledImage = styled('img')({
  maxWidth: '100%',
  borderRadius: '8px',
});


export default function Prizecard() {
  return (
    <div style={{ display: 'flex', justifyContent:'space-evenly' }}>
      <StyledCard>
        <Box >
          {/* The image on top of the card */}
          <StyledImage src={trofy} alt="Trophy Image" sx={{
            height: '400px'
          }} />
        </Box>
        <CardContent>

          <Typography variant="h6" color="">
            Rs.60 000
          </Typography>

          <Typography variant="h5" component="div" gutterBottom>
            2<sup>nd</sup> Place
          </Typography>

        </CardContent>
      </StyledCard>
      <StyledCard>
        <Box >
          {/* The image on top of the card */}
          <StyledImage src={trofy} alt="Trophy Image" sx={{
            height: '400px'
          }} />
        </Box>
        <CardContent>

          <Typography variant="h6" color="">
            Rs.100 000
          </Typography>

          <Typography variant="h5" component="div" gutterBottom>
            1<sup>st</sup> Place
          </Typography>

        </CardContent>
      </StyledCard>
      <StyledCard>
        <Box >
          {/* The image on top of the card */}
          <StyledImage src={trofy} alt="Trophy Image" sx={{
            height: '400px'
          }} />
        </Box>
        <CardContent>

          <Typography variant="h6" color="">
            Rs.20 000
          </Typography>

          <Typography variant="h5" component="div" gutterBottom>
            3<sup>rd</sup> Place
          </Typography>

        </CardContent>
      </StyledCard>
    </div>

  )
}