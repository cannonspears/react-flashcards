import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
import CardForm from "./CardForm";

import { readDeck, readCard, updateCard } from "../utils/api";

function CardEdit() {
    const initialFormData = {
        front: "",
        back: ""
    }
    const history = useHistory()
    const { deckId, cardId } = useParams()
    const [deck, setDeck] = useState({})
    const [card, setCard] = useState({})
    const [formData, setFormData] = useState({...initialFormData})

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

    useEffect(() => {
        readDeck(deckId).then((data) => setDeck(data));
    }, [deckId]);

    useEffect(() => {
        readCard(cardId).then((data) => {
            setCard(data)
            setFormData(data)
        });
    }, [cardId]);

    return (
        <div>
            <Breadcrumb deck={deck} currentPage={`Edit Card ${cardId}`} />
            <h2>Edit Card</h2>
            <CardForm handleChange={handleChange} handleSubmit={handleSubmit} formData={formData} deckId={deckId} doneText="Cancel" saveText="Submit" />
        </div>
    )
}

export default CardEdit