// ImageSlider.js
import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { 
  Box, 
  IconButton, 
  Card, 
  CardMedia, 
  CardContent, 
  Typography,
  useTheme,
  useMediaQuery
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const SliderContainer = styled(Box)(() => ({
  position: 'relative',
  width: '100%',
  overflow: 'hidden',
  padding: '20px 0', // Add vertical padding
}));

const SliderTrack = styled(Box)(() => ({
  display: 'flex',
  transition: 'transform 300ms ease-in-out',
}));

const SlideItem = styled(Box)(({ theme }) => ({
  flexShrink: 0,
  padding: theme.spacing(2), // Increased padding between slides
}));

const NavigationButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  zIndex: 1,
}));

const ImageCaption = styled(CardContent)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.9)',
  padding: theme.spacing(1),
}));

const ImageSlider = ({ onImageClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const theme = useTheme();

  // Responsive breakpoints
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const isSm = useMediaQuery(theme.breakpoints.only('sm'));
  const isMd = useMediaQuery(theme.breakpoints.only('md'));

  // Sample image data
  const images = [
    {
      id: 1,
      url: 'images/home/ai_machine_learning.jpeg',
      caption: 'AI & Machine Learning Solutions',
    },
    {
      id: 2,
      url: 'images/home/custom_software_developement.jpeg',
      caption: 'Custom Software Development',
    },
    {
      id: 3,
      url: 'images/home/web_mobile_app.jpeg',
      caption: 'Web & Mobile App Development',
    },
    {
      id: 4,
      url: 'images/home/data_analytics.jpeg',
      caption: 'Data Analytics & Big Data Solutions',
    },
    {
      id: 5,
      url: 'images/home/block_chain.jpeg',
      caption: 'Blockchain Development',
    },
    {
      id: 6,
      url: 'images/home/it_consulting.jpeg',
      caption: 'IT Consulting & Strategy',
    },
  ];

  // Create an array with duplicated items for smooth infinite scrolling
  const extendedImages = [...images, ...images];

  // Updated items to show based on screen size
  const getItemsToShow = () => {
    if (isXs) return 1.5;
    if (isSm) return 2.5;
    if (isMd) return 2.5; // Changed to 2.5 for medium screens
    return 3.5; // Changed to 3.5 for large screens
  };

  // Handle the infinite scroll reset
  useEffect(() => {
    if (currentIndex >= images.length) {
      setIsTransitioning(true);
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, images.length]);

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex >= images.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      });
    }, 2000);

    return () => clearInterval(timer);
  }, [images.length]);

  // Navigation handlers
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return images.length - 1;
      }
      return prevIndex - 1;
    });
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex >= images.length - 1) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  return (
    <SliderContainer>
      <SliderTrack
        sx={{
          transform: `translateX(-${(currentIndex * (100 / getItemsToShow()))}%)`,
          transition: isTransitioning ? 'none' : 'transform 300ms ease-in-out',
        }}
      >
        {extendedImages.map((image, index) => (
          <SlideItem
            key={`${image.id}-${index}`}
            sx={{
              width: `${100 / getItemsToShow()}%`,
            }}
          >
            <Card
              onClick={() => onImageClick(image)}
              sx={{
                position: 'relative',
                cursor: 'pointer',
                '&:hover': {
                  boxShadow: theme.shadows[18],
                },
                height: '600px', // Increased card height
                borderRadius: '12px', // Added rounded corners
                overflow: 'hidden',
              }}
            >
              <CardMedia
                component="img"
                image={image.url}
                alt={image.caption}
                sx={{
                  objectFit: 'cover',
                  height: '100%',
                  width: '100%',
                }}
              />
              <ImageCaption>
                <Typography 
                  variant="body1" 
                  color="white"
                  sx={{
                    fontWeight: 500,
                    fontSize: '1.1rem',
                  }}
                >
                  {image.caption}
                </Typography>
              </ImageCaption>
            </Card>
          </SlideItem>
        ))}
      </SliderTrack>

      <NavigationButton
        onClick={handlePrevClick}
        sx={{ 
          left: theme.spacing(2),
          width: 48,
          height: 48,
        }}
      >
        <ChevronLeftIcon fontSize="large" />
      </NavigationButton>
      <NavigationButton
        onClick={handleNextClick}
        sx={{ 
          right: theme.spacing(2),
          width: 48,
          height: 48,
        }}
      >
        <ChevronRightIcon fontSize="large" />
      </NavigationButton>
    </SliderContainer>
  );
};

export default ImageSlider;