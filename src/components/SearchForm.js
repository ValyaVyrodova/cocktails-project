import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
<<<<<<< HEAD
  const { setSearchTerm } = useGlobalContext()
  const searchValue = React.useRef('');

  React.useEffect(()=>{
    searchValue.current.focus()
  }, [])

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite cocktail</label>
          <input
            type='text'
            id='name'
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
=======
  return (
    <div>
      <h2>search form component</h2>
    </div>
>>>>>>> f68c5a55a819e3047eca2e2563d15f6e993a8b55
  )
}

export default SearchForm
