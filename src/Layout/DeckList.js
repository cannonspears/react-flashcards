import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom"
import DeckSummary from "./DeckSummary";

import { listDecks } from "../utils/api/index";

function DeckList() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    listDecks().then((data) => setDecks(data));
  }, []);
  
  return (
    <div>
      <Link to="/decks/new" type="button" className="btn btn-secondary mb-3">CREATE DECK</Link>
        {decks.map((deck) => {
          return <DeckSummary key={deck.id} deck={deck} />;
        })}
    </div>
  )
}

export default DeckList;
