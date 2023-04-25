import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

function Study() {
    const {deckId} = useParams()
    
  return (
    <h1>Study</h1>
  )
}

export default Study