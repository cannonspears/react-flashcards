import React, {useState, useEffect, Fragment} from 'react'
import {useParams, Link} from 'react-router-dom'
import CardDetails from "./CardDetails"

import { readDeck } from '../utils/api';

function DeckDetails() {
    const {deckId} = useParams()

    const [deck, setDeck] = useState({})

    console.log(deck);

    useEffect(() => {
        readDeck(deckId).then((data) => setDeck(data));
    }, [deckId]);

    return (
        <Fragment>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">{deck.name}</li>
                </ol>
            </nav>
            <div className="pb-2">
                <div className="mb-2">
                    <h2>{deck.name}</h2>
                    <p>{deck.description}</p>
                    <Link to="#" type="button" class="btn btn-secondary mr-1">EDIT</Link>
                    <Link to={`/decks/${deckId}/study`} type="button" class="btn btn-primary m-1">STUDY</Link>
                    <Link to="#" type="button" class="btn btn-primary m-1">ADD CARDS</Link>
                    <Link type="button" class="btn btn-danger m-1">DELETE</Link>
                </div>
                <h2>Cards</h2>
                {deck?.cards?.map(card => {
                    return <CardDetails card={card} />
                })}
            </div>

        </Fragment>
    )
}

export default DeckDetails