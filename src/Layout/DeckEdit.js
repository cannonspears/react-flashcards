import React, {Fragment, useState, useEffect} from "react";
import { useParams, Link, useHistory } from "react-router-dom";

import { readDeck, updateDeck } from "../utils/api/index"

function DeckEdit() {
    const history = useHistory()
    const {deckId} = useParams()
    const [deck, setDeck] = useState({})

    const initialFormData = {
        name: "",
        description: ""
    }

    const [formData, setFormData] = useState({...initialFormData})

    useEffect(() => {
        readDeck(deckId).then((data) => {
            setDeck(data)
            setFormData(data)
        });
    }, [deckId]);

    const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    updateDeck(formData)
    .then(({id}) => history.push(`/decks/${id}`))
  }


    return (
        <Fragment>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                <li class="breadcrumb-item"><Link to={`/decks/${deckId}`}>{deck.name}</Link></li>
                <li class="breadcrumb-item active" aria-current="page">Edit Deck</li>
                </ol>
            </nav>
            <h1>Edit Deck</h1>
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    class="form-control"
                    id="name"
                    name="name"
                    placeholder="Deck Name"
                    onChange={handleChange}
                    value={formData.name}
                    />
                </div>
                <div class="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                    class="form-control"
                    id="description"
                    name="description"
                    rows="3"
                    placeholder="Brief description of the deck"
                    onChange={handleChange}
                    value={formData.description}
                    />
                </div>

                <Link to={`/decks/${deckId}`} type="button" className="btn btn-secondary mr-2" role="button">Cancel</Link>
                <button type="submit" class="btn btn-primary">Submit</button>
                
            </form>
        </Fragment>
    )
}

export default DeckEdit