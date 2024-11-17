import { useTheme } from '@emotion/react'
import React from 'react'
import { ThemeProvider, Container, Typography, TextField,List,ListItem,ListItemAvatar,ListItemText,Button, Box,  Card, CardMedia } from '@mui/material'
import Grid from '@mui/material/Grid2'

import RingVolumeIcon from '@mui/icons-material/RingVolume';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
const ContactUs = () => {

    const theme = useTheme()
   
  return (
    <ThemeProvider theme={theme}>
        <Container maxWidth="lg" sx={{mb:10 }}>
          
            <Grid container>
                <Grid size={{xs:12, sm:12, md:6, lg:6}} sx={{p:4}}>
                    <Typography 
                        variant="h3" 
                        component="h1" 
                        align="left" 
                        gutterBottom
                        sx={{ mb: 4, fontWeight: 'bold',letterSpacing:2 }}
                    >
                        CONTACTS
                    </Typography>

                    <Card sx={{ maxWidth: 200 }} elevation={0}>
                        {/* <CardActionArea> */}
                            <CardMedia
                            component="img"
                            height="200"
                            width="200"
                            image="images/home/contact_us.jpeg"
                            alt="green iguana"
                            sx={{borderRadius:100}}
                        
                            />
                           
                        {/* </CardActionArea> */}
                    </Card>

                    <Typography variant='p' component="p" sx={{mt:5}}>Use our contact form for all information request or contact us directly using the contact information below.</Typography>
                    
                    <Typography variant='p' component="p" sx={{mt:5}}>Feel Free to get in touch with us via email or phone.</Typography>
                
                </Grid>
                <Grid size={{xs:12, sm:12, md:6, lg:6}} sx={{p:2}}>
                    <Container maxWidth="sm">
                        <Typography variant='p' component="p" sx={{mb:4}}>We will connect you as soon as possible, Thank You</Typography>
                        <Box component="form" noValidate autoComplete="off" >
                            <Grid container spacing={3}>
                                    <Grid item size={{xs:6}}>
                                        <TextField
                                            required
                                            label="First Name"
                                            fullWidth
                                            >

                                        </TextField>
                                    </Grid>
                                    <Grid item size={{xs:6}}>
                                        <TextField
                                                required
                                                label="Last Name"
                                                fullWidth
                                                >

                                            </TextField>
                                    </Grid>

                                    <Grid item size={{xs:12}}>
                                        <TextField
                                            required
                                            label="Email"
                                            fullWidth
                                        >

                                        </TextField>
                                    </Grid>
                                    <Grid item size={{xs:12}}>
                                        <TextField
                                            required
                                            label="Phone Number"
                                            fullWidth
                                        >

                                        </TextField>
                                    </Grid>  
                                    <Grid item size={{xs:12}}>
                                      <TextField multiline maxRows={4} fullWidth label='Message' rows={4}></TextField>
                                    </Grid>
                                    <Grid item size={{xs:12}}>
                                        <Button variant='contained' sx={{textTransform:"none", backgroundColor:"#0052CC"}} >Send Message</Button>
                                    </Grid>
                                    
                            </Grid>
                        </Box>
                    </Container>
                    
                </Grid>
            </Grid>

            <Grid container sx={{mt:5}}>
                <Grid size={{xs:12, sm:12, md:6, lg:6}} sx={{p:4}}>
                    <List>
                        <ListItem>
                            <ListItemAvatar>
                                {/* <Avatar> */}
                                    <AddLocationAltIcon variant="contained" sx={{fontSize:50,color:"#59515E"}}/>
                                {/* </Avatar> */}
                            </ListItemAvatar>
                            <ListItemText primary={<Typography variant='h5' component="p" fontWeight="bold" sx={{letterSpacing:1}}> Our Office Location</Typography>} sx={{ml:1}}></ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>    
                            </ListItemAvatar>
                            <ListItemText primary={<Typography variant='h5' fontWeight="bold">Indore</Typography>} secondary={<Typography variant='p' component="p"> 304, C Block, Silver Mall, RNT Marg South Tukoganj, Indore, Madhya Pradesh - 452001</Typography>}></ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>    
                            </ListItemAvatar>
                            <ListItemText primary={<Typography variant='h5' fontWeight="bold">Mumbai</Typography>} secondary={<Typography variant='p' component="p">Sneh Poonam, D-06 / 606, Vishwa CHS, RDP 8, Charkop Sector 6, Kandivali W, Mumbai, Maharashtra 400067</Typography>}></ListItemText>
                        </ListItem>
                    </List>

                    <Typography variant='h5' component="p" fontWeight="bold"> </Typography>
                </Grid>
                <Grid size={{xs:12, sm:12, md:6, lg:6}} sx={{p:4}}>
                    <List>
                        <ListItem>
                            <ListItemAvatar>
                                {/* <Avatar> */}
                                    <RingVolumeIcon variant="contained" sx={{fontSize:50,color:"#59515E"}}/>
                                {/* </Avatar> */}
                            </ListItemAvatar>
                            <ListItemText primary={<Typography variant='h5' component="p" fontWeight="bold" sx={{letterSpacing:1}}> Phone</Typography>} sx={{ml:1}}></ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
    
                            </ListItemAvatar>
                            <ListItemText secondary={<Typography variant='h5' component="p" sx={{letterSpacing:1}}> +91 623-259-8017</Typography>} sx={{ml:1}}></ListItemText>
                        </ListItem>
                        
                        </List>
                </Grid>
            </Grid>
        </Container>
    </ThemeProvider>
  )
}

export default ContactUs