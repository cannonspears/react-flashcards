import React, {Fragment} from 'react'
import {useParams, Link} from 'react-router-dom'

function DeckDetails() {
    const {deckId} = useParams()
    return (
        <Fragment>
            <Link to="/" type="btn" className="btn btn-primary">Go Home</Link>
            <h1>Deck View</h1>
        </Fragment>
    )
}

export default DeckDetails