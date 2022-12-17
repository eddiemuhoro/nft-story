import React from 'react'
import HeroImage from '../images/img.png'
import FadeImage from '../images/FadeImage.png'
import Star from '../images/Star.png'
import { Button } from '@mui/material'
const Fade = () => {
  return (
    <div className='hero-wrapper'>


    <div className='fade-images story'>
        <img src={FadeImage} alt='fade' />
    </div>
     <div className='fade-images-story'>
        <img src={FadeImage} alt='fade' />
    </div>
    <div className='fade-images-star'>
        <img src={Star} alt='fade' />
    </div>


  
    <section className='hero-right'>
        <div className='hero-image'>
            <img src={HeroImage} alt='vr' />
        </div>
    </section>

    <section className='hero-left'>
        <div className='hero-title'> 
            <h2>NFT Story</h2>
        </div>
        <div className='hero-text'>
            <p>Lorem Ipsum is simply dummy text of the printing
               and typesetting industry. Lorem Ipsum has been the industry's 
               standard dummy text ever since the 1500s, when an unknown printer took a galley 
               of type and scrambled it to make a type specimen book..</p>

               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <Button sx={{color:'white'}} className='hero-btn'>Explore</Button>
    </section>
   
</div>
  )
}

export default Fade