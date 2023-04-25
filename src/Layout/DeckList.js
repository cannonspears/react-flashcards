import React from "react";
import {Link} from "react-router-dom"
import DeckSummary from "./DeckSummary";



function DeckList({ decks }) {
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
