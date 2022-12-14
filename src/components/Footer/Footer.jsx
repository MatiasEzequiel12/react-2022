import { Box, Typography } from '@mui/material'
import { Container } from '@mui/material'
import React from 'react'
import { COPY } from "../../libs/constantes"
import './Footer.css'

const Footer = () => {
  return (
   <Box component="Footer" sx={{ bgcolor:'silver', py: 6, bottom:0 }}>
        <Container maxWidth='sm'>
            <img src={COPY} width="60" alt="logo"/>
            <Typography variant="h6" align="center" gutterBottom>
              <a href='https://www.linkedin.com/in/matias-ezequiel-palacio-5728b9249/'>Copyright 2022</a>
            </Typography>
        </Container>
   </Box> 
  )
}

export default Footer;