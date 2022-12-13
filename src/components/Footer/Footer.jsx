import { Box, Typography } from '@mui/material'
import { Container } from '@mui/material'
import React from 'react'
import { COPY } from "../../libs/constantes"

const Footer = () => {
  return (
   <Box component="footer" sx={{ bgcolor:'silver', py: 6, bottom:0 }}>
        <Container maxWidth='xl'>
            <img src={COPY} width="60" alt="logo"/>
            <Typography variant="h6" align="center" gutterBottom>
              Copyright 2022
            </Typography>
        </Container>
   </Box> 
  )
}

export default Footer;