import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
<<<<<<< HEAD
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Loading />
  }

  if (cocktails.length < 1) {
    return (
      <h2 className='section-title'>
        no cocktails matched your search criteria
      </h2>
    )
  }

  return (
    <section className='section'>
      <h2 className='section-title'>
        cocktails
      </h2>
      <div className='cocktails-center'>
        {cocktails.map((item)=> {
          return <Cocktail key={item.id} {...item} />
        })}
      </div>
    </section>
=======
  return (
    <div>
      <h2>cocktail list component</h2>
    </div>
>>>>>>> f68c5a55a819e3047eca2e2563d15f6e993a8b55
  )
}

export default CocktailList
<<<<<<< HEAD


// Search cocktail by name
// www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

=======
>>>>>>> f68c5a55a819e3047eca2e2563d15f6e993a8b55
