import { useTheme } from '@emotion/react'
import { ThemeProvider, Typography } from '@mui/material'
import React from 'react'

const Testimonial = () => {
    const theme=useTheme()

  return (
    <ThemeProvider theme={theme}>
        <Typography variant='p' sx={{mt:100}}> </Typography>
    </ThemeProvider>
  )
}

export default Testimonial