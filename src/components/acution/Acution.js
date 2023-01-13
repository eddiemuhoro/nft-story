import { Button } from '@mui/material'
import React from 'react'
import Eth from '../images/ethereum.png'
import './acution.css'
import FadeImage from '../images/FadeImage.png'

const Acution = () => {
    const acutions = [
        {
            id: 1,
            src:'./Images/colorfulcat.png',
            currentBid: 123,
        },
        {
            id: 2,
            src:'./Images/goldenhour.png',
            currentBid: 123,
        },
        {
            id: 3,
            src:'./Images/bluepanda.png',
            currentBid: 123,
        }
    ]
  return (
    <div style={{marginBottom:'100px'}}>
     <div className='fade-images-acution'>
        <img src={FadeImage} alt='fade' />
    </div>
        <section  className='acution-header'>
            <div className='acution-header'>
                <h1>Live Acution</h1>
            </div>
            <div className='acution-subheader'>
                <p>The largest and unique Super rare NFT marketplace
                    For crypto-collectibles</p>
            </div>
        </section>
            <div className='acution-items'>
                {acutions.map(acution => {
                    return (
                        <div key={acution.id}>
                            <img src={acution.src} alt={acution.id} /> 
                            <div className='bid-wrapper' style={{width:"100%",margin:'auto' }}>   
                                <section className='bid-section'> 
                                        
                                    <div className='current-bid'>
                                        <p>Current Bid</p>
                                    <p style={{color:'#15BFFD', display:'flex', alignItems:'center', fontWeight:'bolder'}}><img src={Eth} alt='eth'/> {acution.currentBid} ETH</p>
                                    </div>
                                    <Button sx={{bgclor:'blue'}}>Place Bid</Button>
                                
                                </section>
                            </div>  
                        </div>
                            )
                        }
                    )
                }
            </div>
    </div>
  )
}

export default Acution