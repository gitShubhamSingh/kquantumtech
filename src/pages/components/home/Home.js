import React from 'react'

import { ThemeProvider, Toolbar, useTheme} from '@mui/material'
import Box from '@mui/material/Box'
import Banner from './Banner'
import Services from './Services'
import Approaches from './Approaches'
import DevelopementStructure from './DevelopementStructure'
import Clients from './Clients'
import ContactUs from './ContactUs'
import Testimonial from './Testimonial'
import Products from './Products'

const Home = () => {

    // Getting theme
    const theme = useTheme()

  return (
   <>
    <Banner/>
    <Products/>
    <Services/>
    <Approaches/>
    <DevelopementStructure/>
    <Clients/>
    <ContactUs/>
    <Testimonial/>
   </>
  )
}

export default Home