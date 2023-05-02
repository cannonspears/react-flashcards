import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import DeckForm from './DeckForm';
import Breadcrumb from './Breadcrumb';

import { createDeck } from '../utils/api'

import { BsHouseFill } from "react-icons/bs";

function CreateDeck() {
  const initialFormData = {
    name: "",
    description: ""
  }
  const history = useHistory()
  const [formData, setFormData] = useState({...initialFormData})

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    createDeck(formData)
    .then(({id}) => history.push(`/decks/${id}`))
  }

  return (
    <div>
      <Breadcrumb currentPage="Create Deck"/>
      <h1>Create Deck</h1>
      <DeckForm handleChange={handleChange} handleSubmit={handleSubmit} formData={formData} path={"/"}/>
    </div>
  )
}

export default CreateDeck
