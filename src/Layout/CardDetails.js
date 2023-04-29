import React from "react"
import {Link} from "react-router-dom"

function CardDetails({card}) {

    return (
        <div className="card mb-2">
            <div className="card-body">
                <h5 class="card-title">{card.front}</h5>
                <p classname="card-text">{card.back}</p>
                <Link to="#" type="button" class="btn btn-secondary m-1">EDIT</Link>
                <Link to="#" type="button" class="btn btn-danger m-1">DELETE</Link>
            </div>
        </div>
    )
}

export default CardDetails