import React from 'react';
import {Box , Stack, Typography,Button } from "@mui/material";
import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box
    sx={{
        mt:{lg:'150px',xs:'70px'},
        
        ml:{lg:'100px', sm:'50px'}
    }}
    position ='relative'
    p="20px"
    >
        <Typography color="#FF2625"
        fontWeight="600" fontSize="26px"
        > Fitness Club </Typography>
        <Typography color="Black" 
        fontWeight="700" 
        mb="23px" mt="30px"
        sx={{fontSize:{lg:'40px',xs:'40px'}}}
        >Sweat Smile <br/>and Repeat
        </Typography>
        <Typography
        fontSize="22px"
        LineHeight="35px"
        mb={2}
        >
            Check out the most effective exercises
        </Typography>


        <Button variant='contained'
        color ='error' href="#exercises" 
        sx={{backgroundColor:'#ff2625',padding:'10px'}}
        >Explore Exercises
        </Button>
        
        
        <Typography
        
        fontSize='250px'
        fontWeight={600} color = "#ff2625"
        sx={{opacity:0.1,display:{lg:'block' ,xs:'none'}, mt:{lg:'-50px'}}}
        >
            Exercise
        </Typography>
        <img src={HeroBannerImage} alt="banner"
        className="hero-banner-img"
        />
        

    </Box>

  )
} 

export default HeroBanner 