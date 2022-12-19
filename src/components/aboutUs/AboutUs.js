import React from 'react'
import Spiral from '../images/spiral.png'
import Spiral2 from '../images/spiral2.png'
import './about.css'
const AboutUs = () => {
  return (
    <div className='about-wrapper'>
        <section className='about-images'>
            <img src={Spiral2} alt='gvr'/>
        </section>
        <section className='about-images center' >
          <img src={Spiral} alt='spiral'/>
        </section>
        <section className='about-content'>
            <h1>Why choose us?</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Congue eu arcu neque um semper. Eros suspendisse varius enim ultrices  isque et quis ctumst. Feugiat amet velit faucibus amet </p>
            <p>Eu feugiat adipiscing viverrfeugiat. Mollis tellus malesuada massa amet lacinia aliquamid ultrices vitae.</p>
        </section>
    </div>
  )
}

export default AboutUs