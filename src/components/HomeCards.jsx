import React from 'react'
import {  useSelector } from 'react-redux'

import Card from './Card';

function HomeCards() {
  const cards=useSelector(store=>store.Cards)
  
  // Shuffle array
const shuffled = cards.sort(() => 0.5 - Math.random());

// Get sub-array of first n elements after shuffled
let selected = shuffled.slice(0, 3);
// const dispatch=useDispatch();
//     const handler=(id)=>{
//         dispatch(AddLike(id));
//     }

  return (
    <div>
        {<div className="d-flex flex-wrap p-3">
    {selected.map((el) => {
      return <Card card={el}  />;
    })}
  </div>}
    </div>
  )
}

export default HomeCards