import React from 'react'
import './Cards.css'

function Cards({id, title, body}) {

    return (
        <div key={id} className="container">
                <h3>{title}</h3>
                <p>{body}</p>
        </div>
    )
}

export default Cards
