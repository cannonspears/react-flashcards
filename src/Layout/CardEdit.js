import React, {Fragment, useState, useEffect} from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { readDeck, readCard, updateCard } from "../utils/api";

function CardEdit() {
    const initialFormData = {
        front: "",
        back: ""
    }
    const history = useHistory()
    const {deckId, cardId} = useParams()
    const [deck, setDeck] = useState({})
    const [card, setCard] = useState({})
    const [formData, setFormData] = useState({...initialFormData})

    useEffect(() => {
        readDeck(deckId).then((data) => setDeck(data));
    }, [deckId]);

    useEffect(() => {
        readCard(cardId).then((data) => {
            setCard(data)
            setFormData(data)
        });
    }, [cardId]);

    const handleSubmit = (event) => {
        event.preventDefault()
        updateCard(formData)
        .then(() => history.push(`/decks/${deckId}`))
    }

    const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

    return (
        <Fragment>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to={`/decks/${deckId}`}>{deck.name}</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Edit Card {cardId}</li>
                </ol>
            </nav>
            <h2>Edit Card</h2>
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

                <Link to={`/decks/${deckId}`} type="button" className="btn btn-secondary mr-2" role="button">Cancel</Link>
                <button type="submit" className="btn btn-primary">Submit</button>

            </form>
        </Fragment>
    )
}

export default CardEdit