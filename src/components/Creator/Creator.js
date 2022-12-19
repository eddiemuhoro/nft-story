import { Button } from '@mui/material'
import React from 'react'
import './creater.css'
const Creator = () => {
    const data=[
        {
            id:1,
            name:'John Doe',
            image:'https://i.ibb.co/0nQqQZp/creater.png',
            eth:'3.22 ETH'
        },
        {
            id:2,
            name:'John Doe',
            image:'https://i.ibb.co/0nQqQZp/creater.png',
            eth:'3.22 ETH'
        },
        {
            id:3,
            name:'John Doe',
            image:'https://i.ibb.co/0nQqQZp/creater.png',
            eth:'3.22 ETH'
        },
        {
            id:4,
            name:'John Doe',
            image:'https://i.ibb.co/0nQqQZp/creater.png',
            eth:'3.22 ETH'
        },
        {
            id:5,
            name:'John Doe',
            image:'https://i.ibb.co/0nQqQZp/creater.png',
            eth:'3.22 ETH'
        },
        {
            id:6,
            name:'John Doe',
            image:'https://i.ibb.co/0nQqQZp/creater.png',
            eth:'3.22 ETH'
        },
        {
            id:7,
            name:'John Doe',
            image:'https://i.ibb.co/0nQqQZp/creater.png',
            eth:'3.22 ETH'
        },
        {
            id:8,
            name:'John Doe',
            image:'https://i.ibb.co/0nQqQZp/creater.png',
            eth:'3.22 ETH'
        },
    ]
  return (
    <div className='creater-container'>
        <section className="creater-top">
            <h1>Our Creater</h1>
            <div className='creater-subheader'>
                 <p>The largest and unique Super rare NFT marketplace
                For crypto-collectibles</p>
            </div>
        </section>
        <section className='creater-items'>
        {
            data.map((item)=>(
            <div className="creater-bottom">
            <div className='creater-left'>
                <section className='creater-image'>
                    <img src="https://i.ibb.co/0nQqQZp/creater.png" alt="creater"  border="0" />
                </section>
                <section className='creater-info'>
                   <h4>John Doe</h4>
                     <p>3.22 ETH</p>
                </section>
            </div>
            <div className='creater-right'>
                <Button  style={{background:'transparent', color:"#15BFFD", fontSize:'13px', borderBottom:"2px solid "}}>Follow</Button>
            </div>
        </div>
            )
        )   
    }
    </section>
        
    </div>
  )
}

export default Creator