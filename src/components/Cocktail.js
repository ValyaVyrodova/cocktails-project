import React from 'react'
import { Link } from 'react-router-dom'

<<<<<<< HEAD
const Cocktail = ({ image, name, id, info, glass }) => {
  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src={image} alt={name} />
      </div>
      <div className='cocktail-footer'>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className='btn btn-primary btn-details'>
          details
        </Link>
      </div>
    </article>
=======
const Cocktail = () => {
  return (
    <div>
      <h2>cocktail component</h2>
    </div>
>>>>>>> f68c5a55a819e3047eca2e2563d15f6e993a8b55
  )
}

export default Cocktail
<<<<<<< HEAD


// Lookup full cocktail details by id
// www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007
=======
>>>>>>> f68c5a55a819e3047eca2e2563d15f6e993a8b55
