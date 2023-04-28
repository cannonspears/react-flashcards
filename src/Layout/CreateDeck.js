import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'

function CreateDeck() {
  return (
    <Fragment>
      <Link to="/" type="btn" className="btn btn-primary">Go Home</Link>
      <h1>Create Deck</h1>
    </Fragment>
  )
}

export default CreateDeck
