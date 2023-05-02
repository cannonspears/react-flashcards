import React from "react"
import { Link, useHistory } from "react-router-dom"
import { deleteCard } from "../utils/api"

function CardDetails({card}) {
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
                <h5 class="card-title">{card.front}</h5>
                <p classname="card-text">{card.back}</p>
                <Link to="#" type="button" class="btn btn-secondary m-1">EDIT</Link>
                <button onClick={handleDelete} type="button" class="btn btn-danger m-1">DELETE</button>
            </div>
        </div>
    )
}

export default CardDetails