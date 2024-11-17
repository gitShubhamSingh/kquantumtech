import { useTheme } from '@emotion/react'
import React from 'react'

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';

import { Box,Typography,Container,Grid2, Button, ThemeProvider,IconButton } from '@mui/material';

const footerItems = [
  {
    id: 1,
    title: 'Get Social With Us',
    content: [
      {
        id:1,
        title:"Linkedin",
        icon:<LinkedInIcon sx={{fontSize:"50px"}}/>,
        href:'https://www.linkedin.com/'
    },
    {
        id:2,
        title:"Twitter",
        icon:<GoogleIcon sx={{fontSize: "50px"}} />,
        href:'https://www.google.com/'
    },
    {
        id:3,
        title:"Instagram",
        icon:<InstagramIcon sx={{fontSize: "50px"}} />,
        href:'https://www.instagram.com/'
    },
    
        
    ]
  }, 
  {
    id: 1,
    title: 'Explore KQuantum',
    content: [
        {
            id: 1.1,
            title: 'Our Products',
            component: '/products'
        },
        {
            id: 1.2,
            title: 'IT Services',
            component: '/services'
        },
        {
            id: 1.3,
            title: 'AI & ML Solutions',
            component: '/ai-ml'
        },
        {
            id: 1.4,
            title: 'Cyber Security',
            component: '/cyber-security'
        },
        {
            id: 1.5,
            title: 'Cloud Computing',
            component: '/cloud-computing'
        },
        {
            id: 1.6,
            title: 'Blockchain Technology',
            component: '/blockchain'
        },
        {
            id: 1.7,
            title: 'Generative AI Solutions',
            component: '/generative-ai'
        },
        {
            id: 1.8,
            title: 'Custom Software Development',
            component: '/software-development'
        },
        {
            id: 1.9,
            title: 'Training & Workshops',
            component: '/training'
        },
        
    ]
  },
  
  {
    id: 2,
    title: 'Our Expertise',
    content: [
        {
            id: 2.1,
            title: 'AI & Machine Learning Solutions',
            component: '/ai-ml'
        },
        
        {
            id: 2.3,
            title: 'Custom Software Development',
            component: '/software-development'
        },
        {
            id: 2.4,
            title: 'Cloud Computing Solutions',
            component: '/cloud-computing'
        },
        
        {
            id: 2.6,
            title: 'Data Analytics & Insights',
            component: '/data-analytics'
        },
        {
            id: 2.7,
            title: 'Natural Language Processing Services',
            component: '/nlp'
        },
        {
            id: 2.8,
            title: 'Computer Vision Applications',
            component: '/computer-vision'
        },
       
        {
            id: 2.10,
            title: 'DevOps & CI/CD Implementation',
            component: '/devops'
        },
        {
            id: 2.11,
            title: 'Enterprise IT Consulting',
            component: '/it-consulting'
        }
    ]
  },
  {
    id: 3,
    title: 'About KQuantum',
    content: [
        {
            id: 3.1,
            title: 'About Us',
            component: '/about'
        }, 
        {
          id: 3.1,
          title: 'Terms and Conditions',
          component: '/terms-and-conditions'
      },
      {
          id: 3.2,
          title: 'Privacy Policy',
          component: '/privacy-policy'
      },
      {
          id: 3.3,
          title: 'Help Center',
          component: '/help'
      },
      {
          id: 3.4,
          title: 'Contact Us',
          component: '/contact'
      },
       
    ]
  },
 
  {
    id: 5,
    title: 'Insights & Career Resources',
    content: [
        {
            id: 5.1,
            title: 'Understanding Machine Learning Types',
            component: '/insights/machine-learning-types'
        },
        {
            id: 5.2,
            title: 'Deep Learning vs. Machine Learning: A Guide',
            component: '/insights/dl-vs-ml'
        },
        {
            id: 5.3,
            title: 'Top Machine Learning Books for Beginners',
            component: '/resources/ml-books'
        },
        {
            id: 5.4,
            title: 'What Does a Machine Learning Engineer Do?',
            component: '/careers/ml-engineer'
        },
        {
            id: 5.5,
            title: 'Essential Python Libraries for ML',
            component: '/resources/python-libraries-ml'
        },
        {
            id: 5.6,
            title: 'Top Machine Learning Certifications to Pursue',
            component: '/resources/ml-certifications'
        },
        {
            id: 5.7,
            title: 'Machine Learning vs. AI: Key Differences & Benefits',
            component: '/insights/ml-vs-ai'
        },
        {
            id: 5.8,
            title: 'Is Machine Learning Hard? Getting Started',
            component: '/guides/getting-started-ml'
        },
        {
            id: 5.9,
            title: 'Machine Learning in Finance: Applications & Use Cases',
            component: '/insights/ml-in-finance'
        }
    ]
  }
  
  
  
  
  
]

const followUs = [
  {
      id:1,
      icon:<LinkedInIcon sx={{fontSize:"50px"}}/>,
      href:'https://www.linkedin.com/company/kquantumtech/posts/?feedView=all'
  },
  {
      id:2,
      icon:<GoogleIcon sx={{fontSize: "50px"}} />,
      href:'https://www.google.com/'
  },
  {
      id:3,
      icon:<InstagramIcon sx={{fontSize: "50px"}} />,
      href:'https://www.instagram.com/'
  },
  {
    id:4,
    title:"X",
    icon:<XIcon sx={{fontSize: "50px"}} />,
    href:'https://www.twitter.com/'
  },
  {
    id:5,
    title:"Youtube",
    icon:<YouTubeIcon sx={{fontSize: "50px"}} />,
    href:'https://www.youtube.com/@KQuantumTechnology'
  },
  {
    id:6,
    title:"Facebook",
    icon:<FacebookIcon sx={{fontSize: "50px"}} />,
    href:'https://www.facebook.com/profile.php?id=61568528973667'
  },
  
  
]

const Footer = () => {

  const theme = useTheme()

  return (
    <ThemeProvider theme={theme}>
    <Box bgcolor="#212529" color="white" sx={{flexGrow:1}} px={{xs:1, sm:5}} py={{xs:5, sm:10 }}>
        <Container maxWidth="xlg" >
            <Grid2 container>
               
                {footerItems.map((items, key)=>(
                    <Grid2 item size={{xs:key===4?12:6, sm:key===4?12:6,md:6,lg:key===4?4:2}} key={key+100} >
                            <Typography variant="h5" mb={2} mt={2} sx={{fontWeight:"bold"}}>{items.title}</Typography>
                                {key===0? followUs.map((item, key)=><>
                                  <IconButton sx={{color:"#fff",mr:2,mt:2}} href={item.href} target="_blank">
                                      {item.icon}
                                  </IconButton>
                                 
                                  </>)
                                  :items.content.map((item2, key)=>(
                                                  <Box key={key}>
                                                    <Button to={item2.component} sx={{color:"#fff",textTransform:'none' }} >{item2.icon}{item2.title}</Button>
                                                  </Box>  
                                              ))}            
                       
                    </Grid2>
                ))}
            </Grid2>
            
            {/* <Grid2 container sx={{mt:3}}>
                <Grid2 item size={{xs:12,sm:12,md:4, lg:4}}>
                    <Typography variant="h4" mb={2} mt={2} sx={{fontWeight:"bold", color:"#2596be;"}}>Follow us on</Typography>
                    
                    {followUs.map((item, key)=><>
                        <IconButton sx={{color:"#fff",mr:2}} href={item.href} target="_blank">
                            {item.icon}
                        </IconButton>
                    </>)}
                </Grid2>
                <Grid2 item size={{xs:12, sm:12, md:4, lg:4}}>
                <Typography variant="h6" mb={2} mt={2} sx={{fontWeight:"bold", color:"#2596be;"}}>K-Quantum Toll Free Number</Typography>
                    <Typography variant="p" component="p"><AddIcCallIcon/> &nbsp;&nbsp; +91 6232-598-017</Typography>
                </Grid2>
                <Grid2 item size={{xs:12, sm:12, md:4, lg:4}}>
                    <Typography variant="h6" mb={2} mt={2} sx={{fontWeight:"bold", color:"#2596be;"}}>K-Quantum Contact Email</Typography>
                    <Typography variant="p" component="p"><AttachEmailIcon/> &nbsp;&nbsp; tessa7011@gmail.com</Typography> 
                </Grid2>
            </Grid2> */}



            {/* </Grid> */}
            <Box textAlign="center" pt={{xs:5, sm:10}} pb={{xs:5, sm:0}} sx={{fontFamily:'Figtree', fontSize:12}}>
                <Button sx={{textTransform:"none",color:"#fff"}}>&copy; kquantumtech&reg; {new Date().getFullYear()} All Right Reserved</Button>
            </Box>
        </Container>
    </Box>
</ThemeProvider>
  )
}

export default Footer