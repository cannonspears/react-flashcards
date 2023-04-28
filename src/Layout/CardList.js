import React from 'react'


function CardList({card}) {
  
  // {deck.cards?.map(card => {
  //         return
  //       })}

  return <div>
    <p>{card.front}</p>
    <p>{card.back}</p>
  </div>
}

export default CardList