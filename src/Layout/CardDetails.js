import React from "react"
import { Link, useHistory, useParams } from "react-router-dom"
import { deleteCard } from "../utils/api"

function CardDetails({card}) {
    const {deckId} = useParams()
    const history = useHistory()

    const handleDelete = () => {
        const confirm = window.confirm("Delete this deck?")
        if (confirm) {
            deleteCard(card.id)
            .then(() => history.go(0))
        }
    }

    return (
        <div className="card mb-2">
            <div className="card-body">
                <h5 className="card-title">{card.front}</h5>
                <p className="card-text">{card.back}</p>
                <Link to={`/decks/${deckId}/cards/${card.id}/edit`} type="button" className="btn btn-secondary m-1">EDIT</Link>
                <button onClick={handleDelete} type="button" className="btn btn-danger m-1">DELETE</button>
            </div>
        </div>
    )
}

export default CardDetails