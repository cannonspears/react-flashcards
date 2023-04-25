import React from 'react'
import {useParams} from 'react-router-dom'

function DeckDetails() {
    const {deckId} = useParams()
    return (
        <h1>Deck Details</h1>
    )
}

export default DeckDetails