import React, {Fragment, useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import { readDeck } from '../utils/api';
import CardList from './CardList';




function Study() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState({});
  const [notEnoughCards, setNotEnoughCards] = useState(false);

  useEffect(() => {
    readDeck(deckId).then((data) => {
      if (data.cards.length < 3) {
        setNotEnoughCards(true);
      }
      setDeck(data);
    });
  }, [deckId]);

  return (
    <Fragment>
       <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><Link to="/">Home</Link></li>
        <li class="breadcrumb-item"><Link to={`/decks/${deckId}`}>{deck.name}</Link></li>
        <li class="breadcrumb-item active" aria-current="page">Study</li>
      </ol>
    </nav>
    <h1>{deck.name}: Study</h1>
      {notEnoughCards ? (
        <Fragment>
          <h2>Not enough cards.</h2>
          <p>You need at least 3 cards to study. There are {deck?.cards?.length} cards in this deck.</p>
          <Link to={`/decks/${deckId}/cards/new`}>
            <button type="button" className="btn btn-primary">Add Cards</button>
          </Link>
        </Fragment>
      ) : (
        <Fragment>
          <CardList deck={deck} />
        </Fragment>
      )}
    </Fragment>
  );
}


export default Study