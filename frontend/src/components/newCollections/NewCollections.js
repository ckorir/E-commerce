import React, { useEffect, useState } from 'react'
import '../../css/NewCollections.css'
// import new_collections from '../Assets/new_collections'
import Item from '../item/Item'

export default function NewCollections() {

  const [new_collections,setNewCollections] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/newcollection")
    .then((res) => res.json())
    .then((data) => {
        setNewCollections(data);
    });
  }, []);

  return (
    <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className='collections'>
            {new_collections.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}
