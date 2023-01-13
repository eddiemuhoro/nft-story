import React from 'react'
import Spiral from '../images/Rectangle.png'
import './marketplace.css'
const NftBottom = () => {
  const nftItems = [
    {
      id: 1,
      name: 'NFT 1',
      desc: 'Lorem ipsum dolor sit amet consectetur. Congue eu arcu neque um semper. Eros  ',

    },
    {
      id: 2,
      name: 'NFT 2',
      desc: 'Lorem ipsum dolor sit amet consectetur. Congue eu arcu neque um semper. Eros  ',
    },
    {
      id: 3,
      name: 'NFT 3',
      desc: 'Lorem ipsum dolor sit amet consectetur. Congue eu arcu neque um semper. Eros  ',
    },
  ]
  return (
    <div className='nft-marketplace'>
      <section className=' market-place' >
        <img src={Spiral} alt='spiral' />
      </section>
      <h1 style={{color:'transparent'}}>sc</h1>
      <div style={{textAlign:'center', marginTop:"30px"}}>
        <h1>Marketplace</h1>
        <p>The largest and unique Super rare NFT marketplace
        For crypto-collectibles</p>
      </div>
      <div style={{display:"flex",  height:'100%'}}>
        
        <main className='marketplace-items'>
          {
            nftItems.map((item) => {
              return (
                <div className='marketplace-box'>
                  <h1>{item.name}</h1>
                  <p>{item.desc}</p>
                </div>
              )
            }
            )}
          </main>

          <main className='marketplace-items2'>
          {
            nftItems.map((item) => {
              return (
                <div className='marketplace-box'>
                  <h1>{item.name}</h1>
                  <p>{item.desc}</p>
                </div>
              )
            }
            )}
          </main>
      </div>
      
    </div>
  )
}

export default NftBottom