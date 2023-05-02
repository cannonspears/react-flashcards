import React, { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

import { readDeck, createCard } from "../utils/api"

function CreateCard(){
    const initialFormData = {
        front: "",
        back: ""
    }
    const { deckId } = useParams()
    const [deck, setDeck] = useState({})
    const [formData, setFormData] = useState({...initialFormData})
    
    const handleChange = (event) => {
        setFormData({
        ...formData,
        [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        createCard(deckId, formData)
        setFormData(initialFormData)
    }
    
    useEffect(() => {
        readDeck(deckId).then((data) => setDeck(data));
    }, [deckId]);

    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item"><Link to={`/decks/${deckId}`}>{deck.name}</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Add Card</li>
                </ol>
            </nav>
            <h2>{deck.name}: Add Card</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                <label htmlFor="name">Front</label>
                <textarea
                    className="form-control"
                    id="front"
                    name="front"
                    rows="3"
                    placeholder="Front side of card"
                    onChange={handleChange}
                    value={formData.front}
                    />
                </div>
                <div className="form-group">
                <label htmlFor="description">Back</label>
                <textarea
                    className="form-control"
                    id="back"
                    name="back"
                    rows="3"
                    placeholder="Back side of card"
                    onChange={handleChange}
                    value={formData.back}
                    />
                </div>
                <Link to={`/decks/${deckId}`} type="button" className="btn btn-secondary mr-2" role="button">Done</Link>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        </div>
    )
}

export default CreateCard