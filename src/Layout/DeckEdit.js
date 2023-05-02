import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import DeckForm from "./DeckForm";

import { readDeck, updateDeck } from "../utils/api/index"

import { BsHouseFill } from "react-icons/bs";

function DeckEdit() {
    const initialFormData = {
        name: "",
        description: ""
    }
    const history = useHistory()
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
    updateDeck(formData)
    .then(({id}) => history.push(`/decks/${id}`))
  }

    useEffect(() => {
        readDeck(deckId).then((data) => {
            setDeck(data)
            setFormData(data)
        });
    }, [deckId]);


    // handleChange, handleSubmit, formData, path

    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/"><BsHouseFill /> Home</Link></li>
                <li className="breadcrumb-item"><Link to={`/decks/${deckId}`}>{deck.name}</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Edit Deck</li>
                </ol>
            </nav>
            <h1>Edit Deck</h1>
            <DeckForm handleChange={handleChange} handleSubmit={handleSubmit} formData={formData} path={`/decks/${deckId}`}/>
        </div>
    )
}

export default DeckEdit