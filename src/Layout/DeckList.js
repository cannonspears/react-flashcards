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
    <React.Fragment>
      <Link to="/decks/new" type="button" class="btn btn-secondary mb-3">CREATE DECK</Link>
      <div className="row">
        {decks.map((deck) => {
          return <DeckSummary deck={deck} />;
        })}
      </div>
    </React.Fragment>
  )
}

export default DeckList;
