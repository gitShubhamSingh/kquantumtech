import React from 'react'
import { Container, ThemeProvider, useTheme, Typography, List, ListItem, ListItemAvatar, ListItemText,Link } from '@mui/material'
import Grid from '@mui/material/Grid2'

// import ImageIcon from '@mui/icons-material/Image';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Groups3Icon from '@mui/icons-material/Groups3';


const Banner = () => {

    // Getting Theme
    const theme = useTheme()

    const bannerText = [
        {
            id:1,
            text:<Typography variant='h3' fontWeight={100}>Empowering Innovation with <br/> <span style={{color:theme.palette.primary.dark,fontWeight:600,fontSize:70}}>Quantum</span> Precision<span style={{color:theme.palette.primary.dark,fontWeight:800}}>.</span></Typography>
        },
        {
            id:2,
            text:<Typography variant='h3' fontWeight={100}><span style={{color:theme.palette.secondary.dark,fontWeight:600,fontSize:70}}>Quantum</span> Solutions for a  Smarter <br/>  Tomorrow<span style={{color:theme.palette.secondary.dark,fontWeight:600}}>.</span></Typography>
        },
        {
            id:3,
            text:<Typography variant='h3' fontWeight={100}>Unlocking the Power of <span style={{color:theme.palette.error.dark,fontWeight:600,fontSize:70}}>Quantum</span> <br/>  Technology <span style={{color:theme.palette.error.dark,fontWeight:600,fontSize:70}}>.</span></Typography>
        },
        {
            id:4,
            text:<Typography variant='h3' fontWeight={100}>Building a <span style={{color:theme.palette.warning.dark,fontWeight:600,fontSize:70}}>Quantum</span> Future <br/> Today<span style={{color:theme.palette.warning.dark,fontWeight:600,fontSize:70}}>.</span></Typography>
        },
        {
            id:5,
            text:<Typography variant='h3' fontWeight={100}><span style={{color:theme.palette.info.dark,fontWeight:600,fontSize:70}}>Quantum</span> Excellence for Modern<br/>  IT Challenges<span style={{color:theme.palette.info.dark,fontWeight:600,fontSize:70}}>.</span></Typography>
        },
        {
            id:6,
            text:<Typography variant='h3' fontWeight={100}>Where  <span style={{color:theme.palette.error.dark,fontWeight:600,fontSize:70}}>Quantum</span> Ideas Transform<br/>  into Reality<span style={{color:theme.palette.error.dark,fontWeight:600,fontSize:70}}>.</span></Typography>
        }
    ]


    const productList = [
        {
            id:1,
            image:'',
            text:'Translation',
            img: 'images/home/Translation.jpeg',
        },
        {
            id:2,
            image:'',
            text:'Transcription',
            img: 'images/home/transcription.jpeg',
        },
        {
            id:3,
            image:'',
            text:'Image Generation',
            img: 'images/home/image_generation.jpeg',
        },
        {
            id:4,
            image:'',
            text:'Chat With Image',
            img: 'images/home/chat_with_image.jpeg',
        },
        {
            id:5,
            image:'',
            text:'Chat With Video',
            img: 'images/home/chat_with_video.jpeg',
        },
        {
            id:6,
            image:'',
            text:'Chat With Audio',
            img: 'images/home/chat_with_audio.jpeg',
        }
    ]

  return (
    <ThemeProvider theme={theme}>   
        {/* Notification */}
        
        <center>
            <Container sx={{mt:3,mb:2}}>

                <Typography variant="p" >Get Exciting offer with our per year Subscription Plans. <a href="https://google.com/">Explore Plans</a></Typography>
            </Container>
        </center>
        <Container maxWidth="xlg" sx={{p:5,backgroundColor:"#f8f8f8"}}>
            <center>
           
        
            <Grid container maxWidth="lg"  style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
               
            }}>
                    <Grid item xs={12} sm={12} md={8} lg={8} style={{ textAlign: 'left' }}>
                        {bannerText[ Math.floor(Math.random() * 6)].text}
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} lg={8} style={{ textAlign: 'right' }}>
                        <Container sx={{mt:{md:5,lg:5}}}>
                            <List>
                                <ListItem>
                                    <ListItemAvatar>
                                        {/* <Avatar> */}
                                            <SupportAgentIcon variant="contained" sx={{fontSize:40}}/>
                                        {/* </Avatar> */}
                                    </ListItemAvatar>
                                    <ListItemText primary="Need a Help ?" secondary={<Link href="#">Contact Us</Link>}></ListItemText>
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        {/* <Avatar> */}
                                            <Groups3Icon variant="contained" sx={{fontSize:40}}/>
                                        {/* </Avatar> */}
                                    </ListItemAvatar>
                                    <ListItemText primary="Get Product & Services" secondary={<Link href="#"> Book a Demo</Link>}></ListItemText>
                                </ListItem>
                            </List>    
                        </Container>
                    </Grid>
                </Grid>
            
           
            
            <Container sx={{mt:15}}>
                <Grid container spacing={2}>
                    {productList.map((item, key)=>
                    
                        <Grid size={{xs:6,sm:3, md:3,lg:2}}>
                        
                            <img
                                src={item.img}
                                alt={item.text}
                                style={{ width: '100px', height: '100px', borderRadius: '8px' }}
                            />
                                <Typography variant="h6" color="textPrimary" mt={1} sx={{fontSize:14}}>
                                {item.text}
                            </Typography>
                        </Grid>
                    )}
                </Grid>
            </Container>
            </center>
        </Container>
    </ThemeProvider>
  )
}

export default Banner