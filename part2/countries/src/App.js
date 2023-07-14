import { useEffect, useState } from "react";
import axios from 'axios'

function App() {
  const [ countries, setCountries ] = useState([])
  const [ filter, setFilter ] = useState('')

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
      .then(results => {
        console.log(results.data)
        setCountries(results.data)
      })
  }, [])

  const renderCountries = (countries) => {
    console.log(countries)
    if(!countries.length) return

    if(countries.length > 10)
      return <span>Too many matches, specify another filter</span>

    if(countries.length > 1) return (
      <>
      {
        countries.map(c => 
        <>
          <span key={c.name.common}>{c.name.common}</span>
          <br />
        </>
      )
      }
      </>
    )
    
    const country = countries[0]

    return (
      <>
        <h1>{country.name.common}</h1>
        <span>capital {country.capital[0]}</span>
        <br />
        <span>population {country.population}</span>

        <h2>languages</h2>
        <ul>
          {
            Object.entries(country.languages).map(([key, value]) => <li key={key}>{value}</li>)
          }
        </ul>
        <img src={country.flags.png} alt={country.flags.alt}/>
      </>
    )
  }

  return (
    <div>
      <div>
        <span>find countries </span>
        <input 
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        />
      </div>
      <div>
        {
          renderCountries(countries
            .filter(c => c.name.common.toLowerCase().includes(filter.toLowerCase()))
          )
        }
      </div>
    </div>
  )
}

export default App;
