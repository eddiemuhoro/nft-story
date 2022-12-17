import React from 'react'
import './coll.css'
import TableData from './TableData'
import BasicTable from './TableData'
import FadeImage from '../images/FadeImage.png'
const Collections = () => {
    const categories=[
        {
            id:1,
            name:'24H',

        },
        {
            id:2,
            name:'7D',
        },
        {
            id:3,
            name:'All ',
        },
    ]
  return (
    <div className='collection-wrapper'>
         <div className='fade-image-table'>
        <img src={FadeImage} alt='fade' />
    </div>
        <div className='collection-title'>
            <h1>Collections</h1>
        </div>
        <div className='categories'>
            {categories.map((category) => (
                <div className='category' key={category.id}>
                    <p>{category.name}</p>
                </div>
            ))}
        </div>

   <TableData />
    </div>
  )
}

export default Collections