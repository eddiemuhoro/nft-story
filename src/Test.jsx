import React from 'react'
import axios from 'axios'
import { useGridSelector } from '@mui/x-data-grid'
const Test = () => {
    // const [bids, setBids] = React.useState([])
    // const [loading, setLoading] = React.useState(false)
    // React.useEffect(() => {
    //     setLoading(true)
    //     axios.request('http://localhost:4000/message', 
    
                
    //             )
    //         .then((response) => {

    //             setBids(response.data);
    //             console.log(response.data)
    //         }).catch((error) => {
    //             console.log(error);

    //         }
    //         ).finally(() => {
    //             setLoading(false)
    //         })
    //     }, []
    // )

    const bids=[
        {
            message:'hello there',
            user:[{
                name:'ken'
            }]
        },
        {
            message:'hello there',
            user:[{
                name:'ken'
            }]
        }
    ]
  return (
    <div>
        {bids.map((bid, index)=>(
            <div key={index}>
                <h1>{bid.message}</h1>
                {bid.user.map((c,i)=>(
                    <div key={i}>
                        <p>{c.name}</p>
                    </div>
                ))}
            </div>
        ))}
    </div>
  )
}

export default Test