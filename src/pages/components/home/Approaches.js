import React from "react";
import { 
  Box, 
  Typography, 
  Button, 
  Container, 
  Card, 
  CardContent, 
  CardMedia, 
  CardActions 
} from "@mui/material";
import Grid from '@mui/material/Grid2';

const approaches = [
  {
    title: "Client-Centric Solutions",
    description:
      "We prioritize understanding our clients' unique needs to deliver customized solutions that align with their goals.",
    img: "images/home/client_centric_solution.jpeg",
  },
  {
    title: "Innovation-Driven Development",
    description:
      "Embracing the latest technologies, we focus on driving innovation and building future-proof solutions.",
    img: "images/home/innovation_driven _development.jpeg",
  },
  {
    title: "Agile & Scalable Processes",
    description:
      "Our agile methods ensure faster delivery and adaptability while building scalable solutions for growth.",
    img: "images/home/agile_scalable.jpeg",
  },
  {
    title: "Commitment to Excellence",
    description:
      "We adhere to the highest standards, ensuring every solution is of top-notch quality and reliability.",
    img: "images/home/commitment.jpeg",
  },
];

const OurApproaches = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8,mt:5 }}>
      <Box sx={{ mb: 6, textAlign: 'left' }}>
        <Typography 
          variant="h3" 
          component="h2" 
          gutterBottom 
          sx={{ 
            fontWeight: 'light',
            mb: 2
          }}
        >
          Our Approach
        </Typography>
        <Typography 
          variant="p" 
          color="text.secondary" 
          sx={{ 
            maxWidth: '800px',
            mb: 4
          }}
        >
          We believe in delivering exceptional value through innovative solutions that transform businesses. 
          Our methodology combines industry best practices with cutting-edge technology to ensure success.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {approaches.map((approach, index) => (
          <Grid size={{xs:12, sm:6, md:3}} key={index}>
            <Card 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 2,
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 8,
                },
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  height: 250, // Increased height from 140px to 250px
                  width: '100%',
                  objectFit: 'cover'
                }}
                image={approach.img}
                alt={approach.title}
              />
              <CardContent sx={{ flexGrow: 1, pb: 0 }}> {/* Reduced padding bottom */}
                <Typography 
                  gutterBottom 
                  variant="h6" 
                  component="h3"
                  sx={{ fontWeight: 'medium' }}
                >
                  {approach.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {approach.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ p: 2, pt: 1 }}> {/* Adjusted padding */}
                <Button 
                  size="small" 
                  color="primary"
                  sx={{ 
                    transition: 'all 0.3s',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      backgroundColor: 'primary.main',
                      color: 'white',
                    }
                  }}
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default OurApproaches;