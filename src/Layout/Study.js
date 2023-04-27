import React, {Fragment, useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import { readDeck } from '../utils/api';
import Card from './Card';

function Study() {
    const {deckId} = useParams()
    const [deck, setDeck] = useState({})

    useEffect(() => {
      readDeck(deckId).then((data) => setDeck(data));
      }, [deckId]);

  return (
    <Fragment>
      <Link to="/" type="btn" className="btn btn-primary">Go Home</Link>
      <h1>Study: Rendering in React</h1>
      {deck.cards?.map(card => {
        return <Card card={card}/>
      })}
    </Fragment>
  )
}

export default Study