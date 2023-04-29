import React, {useState, Fragment} from 'react'
import { Link } from 'react-router-dom'

function CreateDeck() {
  const initialFormData = {
    name: "",
    description: ""
  }

  const [formData, setFormData] = useState({...initialFormData})

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Submitted");
  }

  return (
    <Fragment>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><Link to="/">Home</Link></li>
          <li class="breadcrumb-item active" aria-current="page">Create Deck</li>
        </ol>
      </nav>
      <h1>Create Deck</h1>
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

        <a type="button" className="btn btn-secondary mr-2" href="/" role="button">Cancel</a>
        <button type="submit" class="btn btn-primary">Submit</button>
        
      </form>
    </Fragment>
  )
}

export default CreateDeck
