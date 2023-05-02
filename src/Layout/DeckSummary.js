import React from "react";
import {Link, useHistory} from "react-router-dom";

import { deleteDeck } from "../utils/api";

function DeckSummary({ deck: {name, cards, description, id} }) {

    const history = useHistory()

    const handleDelete = () => {
        const confirm = window.confirm("Delete this deck?")
        if (confirm) {
            deleteDeck(id)
            .then(() => history.go(0))
        }
    }

  return (
      <div className="card mb-2">
          <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <h6>{cards.length} cards</h6>
              <p className="card-text">{description}</p>
              <Link to={`/decks/${id}`} type="button" className="btn btn-secondary m-1">VIEW</Link>
              <Link to={`/decks/${id}/study`} type="button" className="btn btn-primary m-1">STUDY</Link>
              <button onClick={handleDelete} type="button" className="btn btn-danger m-1">DELETE</button>
          </div>
      </div>
  );
}

export default DeckSummary;
