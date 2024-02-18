import React from 'react'
import { Link } from 'react-router-dom'

const SingleTest = ({
    _id,
    name,
    language,
    tags,
}) => {
  return (
    <div>

        <h2>{name}</h2>
        <p>{language}</p>
        <p>{tags}</p>
        <Link to={`../test/${_id}`} className='btn'>
            Start
        </Link>

    </div>
  )
}

export default SingleTest