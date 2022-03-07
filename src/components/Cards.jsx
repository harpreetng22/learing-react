import React from 'react'
import { useSelector } from 'react-redux';
import Card from './Card';

function Cards() {
  const cards=useSelector(store=>store.Cards)
  console.log(cards);

  return (
    <div>
      {<div className="d-flex flex-wrap p-3">
    {cards.map((el) => {
      return <Card card={el}  />;
    })}
  </div>}
  </div>
  )
}

export default Cards