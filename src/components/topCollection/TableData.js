import React from 'react'

const TableData = () => {
    const titles = [
        {
            id: 1,
            name: 'Rank',
        },
        {
            id: 2,
            name: 'Collection',
        },
        {
            id: 3,
            name: 'Volume',
        },
        {
            id: 4,
            name: 'Price',
        },
        {
            id: 5,
            name: 'Change',
        },
    ]
    const data=[
        {
            id:1,
            rank:1,
            image: 'https://ca-times.brightspotcdn.com/dims4/default/83de13e/2147483647/strip/true/crop/2000x2706+0+0/resize/1200x1624!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fff%2F2c%2Fdedf568e4af087cab5f0a5c76f32%2Fla-ca-bk-a-promised-land-barack-obama-183.JPG',
            collection:'Bored Ape Yacht Club',
            percent:'20.00%',
            volume:'230.38 ETH',
            price:'12.38 ETH',
            change:'138',
        },
        {
            id:2,
            rank:2,
            image: 'https://ca-times.brightspotcdn.com/dims4/default/83de13e/2147483647/strip/true/crop/2000x2706+0+0/resize/1200x1624!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fff%2F2c%2Fdedf568e4af087cab5f0a5c76f32%2Fla-ca-bk-a-promised-land-barack-obama-183.JPG',
            collection:'Bored Ape Yacht Club',
            percent:'23.32%',
            volume:'200.38 ETH',
            price:'19.38 ETH',
            change:'118',
        },
        {
            id:2,
            rank:2,
            image: 'https://ca-times.brightspotcdn.com/dims4/default/83de13e/2147483647/strip/true/crop/2000x2706+0+0/resize/1200x1624!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fff%2F2c%2Fdedf568e4af087cab5f0a5c76f32%2Fla-ca-bk-a-promised-land-barack-obama-183.JPG',
            collection:'Bored Ape Yacht Club',
            percent:'23.32%',
            volume:'200.38 ETH',
            price:'19.38 ETH',
            change:'118',
        },
        {
            id:2,
            rank:2,
            image: 'https://ca-times.brightspotcdn.com/dims4/default/83de13e/2147483647/strip/true/crop/2000x2706+0+0/resize/1200x1624!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fff%2F2c%2Fdedf568e4af087cab5f0a5c76f32%2Fla-ca-bk-a-promised-land-barack-obama-183.JPG',
            collection:'Bored Ape Yacht Club',
            percent:'23.32%',
            volume:'200.38 ETH',
            price:'19.38 ETH',
            change:'118',
        },
        
    ]
  return (
    <div>
        <table>
            {titles.map((title) => (
                <th key={title.id}>{title.name}</th>
            ))}

            {data.map((item) => (
                <tr key={item.id}>
                    <td> {item.rank}</td>
                    <td className='icon' style={{verticalAlign:'middle'}}><img src={item.image}/> {item.collection}</td>
                    <td>
                        {item.volume}
                        <p>{item.percent}</p>
                    </td>
                    <td>{
                    item.price}
                      <p>{item.percent}</p>
                    </td>
                    <td>{item.change}</td>
                </tr>
            ))}
        
        </table>
    </div>
  )
}

export default TableData