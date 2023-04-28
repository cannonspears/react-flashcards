import React, {Fragment, useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import { readDeck } from '../utils/api';
import CardList from './CardList';

function Study() {
    const {deckId} = useParams()
    const [deck, setDeck] = useState({})
    console.log("deck", deck)

    useEffect(() => {
      readDeck(deckId).then((data) => setDeck(data));
      }, [deckId]);

  return (
    <Fragment>
      <Link to="/" type="btn" className="btn btn-primary">Go Home</Link>
      <h1>Study: Rendering in React</h1>
        <CardList deck={deck}/>
    </Fragment>
  )
}

export default Study