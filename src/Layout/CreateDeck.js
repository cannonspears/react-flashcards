import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

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
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/"><BsHouseFill /> Home</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Create Deck</li>
        </ol>
      </nav>
      <h1>Create Deck</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Deck Name"
            onChange={handleChange}
            value={formData.name}
            />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="3"
            placeholder="Brief description of the deck"
            onChange={handleChange}
            value={formData.description}
            />
        </div>
        <Link to="/" type="button" className="btn btn-secondary mr-2" role="button">Cancel</Link>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default CreateDeck
