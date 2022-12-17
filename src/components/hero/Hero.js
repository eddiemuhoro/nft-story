import React from 'react'
import HeroImage from '../images/girlvr2.png'
import FadeImage from '../images/FadeImage.png'
import Curve from '../images/vectorline.png'
import './hero.css'
import { Button } from '@mui/material'
const Hero = () => {
    const digits=[
        {
            id:1,
            number: 100,
            title:'Aucation'
        },
        {
            id:2,
            number: 70,
            title:'Artwork'
        },
        {
            id:3,
            number: 80,
            title:'Artist'
        },
    ]
  return (
    <div className='hero-wrapper'>


        <div className='fade-images'>
            <img src={FadeImage} alt='fade' />
        </div>
         <div className='fade-images-right'>
            <img src={FadeImage} alt='fade' />
        </div>
      


        <section className='hero-left'>
            <div className='hero-title'> 
                <h1>Discover</h1>
                <h1> Collect and </h1>
                <h1>Sell NFT</h1>
            </div>
            <div className='hero-text'>
                <p>Explore on the world’s best largest NFT marketplace.</p>
            </div>
            <Button sx={{color:'white'}} className='hero-btn'>Explore</Button>
            <div className='hero-digits'>
                {digits.map((digit) => (
                    <div className='digit' key={digit.id}>
                        <div>
                        <h1>{digit.number}K</h1>
                        <p>{digit.title}</p>
                        </div>
                    </div>
                ))}
            </div>

        </section>
        <section className='hero-right'>
            {/* <div className='fade-images-curve'>
                <img src={Curve} alt='fade' />
            </div> */}
            <div className='hero-image'>
                <img src={HeroImage} alt='vr' />
            </div>
        </section>
    </div>
  )
}

export default Hero