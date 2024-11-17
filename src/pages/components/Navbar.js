import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';

import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

// Icons
import MenuIcon from '@mui/icons-material/Menu';
import { Container, ThemeProvider, useTheme } from '@mui/material';
import logo from './home/assets/logo.png'


const drawerWidth = 350;
const navItems = ['Home','Products & Services', 'About', 'Career','Contact'];

const Navbar = (props) => {
    
    // Getting Universal Theme
    const theme = useTheme()

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
      };

    // Defining Drawer
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ my: 2 }}>
        <img
            src={logo} 
            width="40px"
        />
        </Typography>
        <Divider />
        <List>
            {navItems.map((item) => (
            <ListItem key={item} disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item} />
                </ListItemButton>
            </ListItem>
            ))}
        </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={theme}>

   
    <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar component="nav" sx={{backgroundColor:`rgba(255,255,255,0.95)`}}>
            <Container>
                <Toolbar variant='regular'>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' },color:"#000" }}
                    >
                        <MenuIcon />
                    </IconButton>
                  
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block'},mt:2,mb:1, color:theme.palette.primary.main }}
                    >
                       {/* <IconButton> */}
                        <img
                            src={logo} 
                            width="40px"
                        />
                       {/* </IconButton> */}
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                        <Button key={item} sx={{ ml:2, textTransform:'none', color:"#000"}}>
                            {item}
                        </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
        <nav>
            <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            >
            {drawer}
            </Drawer>
        </nav>
      
      <Toolbar />
        
    </Box>
    </ThemeProvider>
  )
}

export default Navbar