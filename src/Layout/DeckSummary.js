import React from "react";
import {Link} from "react-router-dom";

function DeckSummary({ deck: {name, cards, description, id} }) {
  return (
      <div className="card mb-2">
          <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <h6>{cards.length} cards</h6>
              <p classname="card-text">{description}</p>
              <Link to={`/decks/${id}`} type="button" class="btn btn-secondary m-1">VIEW</Link>
              <Link to={`/decks/${id}/study`} type="button" class="btn btn-primary m-1">STUDY</Link>
              <Link type="button" class="btn btn-danger m-1">DELETE</Link>
          </div>
      </div>
  );
}

export default DeckSummary;
