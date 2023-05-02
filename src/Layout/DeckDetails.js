import React, { useState, useEffect } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import CardDetails from "./CardDetails"

import { readDeck, deleteDeck } from '../utils/api';

function DeckDetails() {
    const { deckId } = useParams()
    const history = useHistory()
    const [deck, setDeck] = useState({})

    const handleDelete = () => {
        const confirm = window.confirm("Delete this deck?")
        if (confirm) {
            deleteDeck(deckId)
            .then(() => history.push("/"))
        }
    }

    useEffect(() => {
        readDeck(deckId).then((data) => setDeck(data));
    }, [deckId]);

    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">{deck.name}</li>
                </ol>
            </nav>
            <div className="pb-2">
                <div className="mb-2">
                    <h2>{deck.name}</h2>
                    <p>{deck.description}</p>
                    <Link to={`/decks/${deckId}/edit`} type="button" className="btn btn-secondary mr-1">EDIT</Link>
                    <Link to={`/decks/${deckId}/study`} type="button" className="btn btn-primary m-1">STUDY</Link>
                    <Link to={`/decks/${deckId}/cards/new`} type="button" className="btn btn-primary m-1">ADD CARDS</Link>
                    <button onClick={handleDelete} type="button" className="btn btn-danger m-1">DELETE</button>
                </div>
                <h2>Cards</h2>
                {deck?.cards?.map(card => {
                    return <CardDetails card={card} />
                })}
            </div>
        </div>
    )
}

export default DeckDetails