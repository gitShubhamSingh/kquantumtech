import React from 'react'
import { colors, Container, ThemeProvider, Typography, useTheme } from '@mui/material'
import ImageSlider from './ServicesSlider';

const Services = () => {
    const theme=useTheme();

    const handleImageClick = (image) => {
        alert('Image clicked:', image);
      };

  return (
    <ThemeProvider theme={theme}>
        <Container maxWidth="xlg" sx={{mt:10}}>
            <Typography variant='h5'> Services</Typography>
            <Typography variant='h3'>Speed<span style={{color:theme.palette.primary.dark,fontWeight:600,fontSize:70}}>.</span> Stability<span style={{color:theme.palette.error.dark,fontWeight:600,fontSize:70}}>.</span> Scaling<span style={{color:theme.palette.info.dark,fontWeight:600,fontSize:70}}>.</span></Typography>
            
            <Typography sx={{mt:4}}></Typography>

            <ImageSlider onImageClick={handleImageClick}/>
        </Container>
    </ThemeProvider>
  )
}

export default Services