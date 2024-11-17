import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Paper,
  useTheme,
  useMediaQuery
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import CodeIcon from '@mui/icons-material/Code';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import DataObjectIcon from '@mui/icons-material/DataObject';

const structureItems = {
  left: [
    {
      title: "Architecture Design",
      description: "Scalable and robust system architecture ensuring long-term sustainability",
      icon: <ArchitectureIcon sx={{ fontSize: {xs: 30, md: 40} }} />
    },
    {
      title: "Security Implementation",
      description: "Advanced security protocols and best practices for data protection",
      icon: <SecurityIcon sx={{ fontSize: {xs: 30, md: 40} }} />
    },
    {
      title: "Performance Optimization",
      description: "Continuous monitoring and optimization for peak performance",
      icon: <SpeedIcon sx={{ fontSize: {xs: 30, md: 40} }} />
    }
  ],
  right: [
    {
      title: "Code Quality",
      description: "Clean, maintainable code. Designed for scalability, efficiency, and adherence to industry standards.",
      icon: <CodeIcon sx={{ fontSize: {xs: 30, md: 40} }} />
    },
    {
      title: "System Integration",
      description: "Seamless integration with existing systems and third-party services",
      icon: <IntegrationInstructionsIcon sx={{ fontSize: {xs: 30, md: 40} }} />
    },
    {
      title: "Data Management",
      description: "Efficient data handling and storage solutions for seamless performance. Engineered to optimize scalability, reliability, and secure accessibility.",
      icon: <DataObjectIcon sx={{ fontSize: {xs: 30, md: 40} }} />
    }
  ]
};

const DevelopmentStructure = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  // const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

  const LineConnector = ({ direction }) => (
    <Box
      sx={{
        position: 'absolute',
        [direction]: '-15px',
        top: '50%',
        width: {xs: '15px', md: '30px'},
        height: '2px',
        backgroundColor: theme.palette.primary.main,
        animation: direction === 'right' ? 'flowRight 2s infinite' : 'flowLeft 2s infinite',
        display: { xs: 'none', md: 'block' }
      }}
    />
  );

  return (
    <Container maxWidth="xl" sx={{mt: {xs: 5, md: 20},mb:{xs:10,md:20}}}>
      <Typography 
        variant="h3" 
        component="h1" 
        align="left" 
        gutterBottom
        sx={{ 
          mb: 2, 
          fontWeight: 'light',
          fontSize: {xs: '2rem', sm: '2.5rem', md: '3rem'}
        }}
      >
        Our IT Development Structure
      </Typography>

      <Typography 
        variant='body1' 
        component="p" 
        sx={{
          mb: {xs: 4, md: 8},
          fontSize: {xs: '0.9rem', md: '1rem'}
        }}
      >
        Our IT Development Structure is designed to deliver innovative, scalable, and efficient solutions. 
        From initial planning to deployment, we follow agile methodologies, ensuring flexibility and 
        adaptability at every stage. By prioritizing collaboration and quality assurance, we create 
        reliable systems tailored to meet diverse business needs.
      </Typography>

      <Grid container spacing={3}>
        {/* Layout changes based on screen size */}
        <Grid container item 
          size={{xs:12}}
          
          spacing={3}
          sx={{
            flexDirection: { xs: 'column', md: 'row' },
            position: 'relative',
            alignItems: { xs: 'center', md: 'flex-start' },
            justifyContent: 'space-between'
          }}
        >
          {/* Left Column */}
          <Grid item size={{xs:12,md:4}} >
            <center>

            {structureItems.left.map((item, index) => (
              <Paper
                key={index}
                elevation={3}
                sx={{
                  p: {xs: 2, md: 3},
                  mb: 4,
                  position: 'relative',
                  transition: 'transform 0.3s',
                  width: {xs: '100%', sm: '90%', md: '100%'},
                  '&:hover': {
                    transform: 'scale(1.05)',
                    zIndex: 2,
                  }
                }}
              >
                {!isMobile && <LineConnector direction="right" />}
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  mb: 2, 
                  color: theme.palette.primary.main 
                }}>
                  {item.icon}
                  <Typography variant="h6" sx={{ 
                    ml: 2, 
                    fontWeight: 'bold',
                    fontSize: {xs: '1rem', md: '1.25rem'}
                  }}>
                    {item.title}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </Paper>
            ))}
            </center>
            
          </Grid>

          {/* Center Column */}
          <Grid item size={{xs:12,md:4}} 
            sx={{ 
              display: 'flex',
              justifyContent: 'center',
              order: { xs: -1, md: 0 },
              mb: { xs: 4, md: 0 }
            }}
          >
            <Paper
              elevation={6}
              sx={{
                mt:10,
                p: {xs: 3, md: 4},
                borderRadius: '50%',
                width: {xs: '250px', md: '300px'},
                height: {xs: '250px', md: '300px'},
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                color: 'white',
                position: 'relative',
                animation: 'pulse 2s infinite',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  width: {xs: '280px', md: '340px'},
                  height: {xs: '280px', md: '340px'},
                  borderRadius: '50%',
                  border: `2px solid ${theme.palette.primary.main}`,
                  animation: 'ripple 2s infinite'
                }
              }}
            >
              <Typography variant="h4" align="center" sx={{ 
                fontWeight: 'bold', 
                mb: 2,
                fontSize: {xs: '1.5rem', md: '2.125rem'}
              }}>
                Development
              </Typography>
              <Typography variant="h4" align="center" sx={{ 
                fontWeight: 'bold',
                fontSize: {xs: '1.5rem', md: '2.125rem'}
              }}>
                Core
              </Typography>
            </Paper>
          </Grid>

          {/* Right Column */}
          <Grid item  size={{xs:12, md:4}}>
            <center>
              {structureItems.right.map((item, index) => (
                <Paper
                  key={index}
                  elevation={3}
                  sx={{
                    p: {xs: 2, md: 3},
                    mb: 4,
                    position: 'relative',
                    transition: 'transform 0.3s',
                    width: {xs: '100%', sm: '90%', md: '100%'},
                    '&:hover': {
                      transform: 'scale(1.05)',
                      zIndex: 2,
                    }
                  }}
                >
                  {!isMobile && <LineConnector direction="left" />}
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    mb: 2, 
                    color: theme.palette.primary.main 
                  }}>
                    {item.icon}
                    <Typography variant="h6" sx={{ 
                      ml: 2, 
                      fontWeight: 'bold',
                      fontSize: {xs: '1rem', md: '1.25rem'}
                    }}>
                      {item.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </Paper>
              ))}
            </center>
          </Grid>
        </Grid>
      </Grid>

      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }

          @keyframes ripple {
            0% { transform: scale(1); opacity: 1; }
            100% { transform: scale(1.2); opacity: 0; }
          }

          @keyframes flowRight {
            0% { transform: scaleX(0); transform-origin: left; }
            100% { transform: scaleX(1); transform-origin: left; }
          }

          @keyframes flowLeft {
            0% { transform: scaleX(0); transform-origin: right; }
            100% { transform: scaleX(1); transform-origin: right; }
          }
        `}
      </style>
    </Container>
  );
};

export default DevelopmentStructure;