import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import StudyCards from './StudyCards';

import { readDeck } from '../utils/api';

function StudyPage() {
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
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item"><Link to={`/decks/${deckId}`}>{deck.name}</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Study</li>
        </ol>
      </nav>
      <h1>{deck.name}: Study</h1>
        {notEnoughCards ? (
          <div>
            <h2>Not enough cards.</h2>
            <p>You need at least 3 cards to study. There are {deck?.cards?.length} cards in this deck.</p>
            <Link to={`/decks/${deckId}/cards/new`}>
              <button type="button" className="btn btn-primary">Add Cards</button>
            </Link>
          </div>
        ) : (
          <div>
            <StudyCards deck={deck} />
          </div>
        )}
    </div>
  );
}


export default StudyPage