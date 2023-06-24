import React from 'react'
import "./Heading.scss"

export default function Heading(props) {
const { heading, span } = (props)

  return (
       <div className="heading">
        <h2>
          {heading} <span>{span}</span>
        </h2>
    </div>
  )
}
