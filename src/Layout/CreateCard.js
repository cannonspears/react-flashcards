import React, {Fragment, useState, useEffect} from "react"
import { useParams, Link } from "react-router-dom"

import { readDeck } from "../utils/api"

function CreateCard(){
    const {deckId} = useParams()
    const [deck, setDeck] = useState({})

    useEffect(() => {
        readDeck(deckId).then((data) => setDeck(data));
    }, [deckId]);

    return (
        <Fragment>
            <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to={`/decks/${deckId}`}>{deck.name}</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Add Card</li>
                    </ol>
                </nav>
                <h2>{deck.name}: Add Card</h2>
                <form >
                    <div class="form-group">
                    <label htmlFor="name">Front</label>
                    <textarea
                        class="form-control"
                        id="front"
                        name="front"
                        rows="3"
                        placeholder="Front side of card"
                        
                        />
                    </div>
                    <div class="form-group">
                    <label htmlFor="description">Back</label>
                    <textarea
                        class="form-control"
                        id="back"
                        name="back"
                        rows="3"
                        placeholder="back side of card"
                
                        />
                    </div>

                    <Link to="/" type="button" className="btn btn-secondary mr-2" role="button">Done</Link>
                    <button type="submit" class="btn btn-primary">Save</button>

                </form>
        </Fragment>
    )
}

export default CreateCard