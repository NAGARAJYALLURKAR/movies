"use client"
import styles from './page.module.css'
import { useEffect, useState } from "react"
import axios from 'axios'
import MovieCard from "./components/MovieCard/MovieCard"

export default function Home() {
  let [cardData, setCardData] = useState([]) // to store the response data from api
  let [searchQuery, setSearchQuery] = useState('') // to store the search query
  let [filteredData, setFilteredData] = useState([]) // to store array of data after filter or after search 
  useEffect(()=>{
    axios.get('https://www.omdbapi.com/?apikey=45f0782a&s=war')
    .then(res => setCardData(res.data.Search))
    .catch(err => console.log(err.message))
  },[])
  const getSearchValue = (e) =>{
    let search = e.target.value // collecting the value from user and storing it in variable
    let filteredmovies = cardData.filter((item) => item.Title.toLowerCase().includes(search.toLowerCase())) // getting the title of the movie and comparing with search query and creating new array
    setFilteredData(filteredmovies) // setting the filtered data state 
    setSearchQuery(e.target.value)

 }
  

  return (
    <main className={styles.mainContainer}>
      <div className={styles.searchContainer}>
        <input 
          className={styles.search} 
          type="text" 
          placeholder="Enter  Movie Name.."
          id='search'
          onChange={(e)=>getSearchValue(e)}
          value={searchQuery}
          
            
        />
      </div>
      <div className={styles.cardContainer}>
      {/* if searchquery and filterData is empty then we render all the "movies" and if there is any filtered data and search query is prenet then render the "fliltered data" */}
        {
          searchQuery == "" && filteredData.length == 0 ?
          cardData.map((item,idx) => <MovieCard movie = {item} key={idx}/>):
          filteredData.map((item,idx) => <MovieCard movie = {item} key={idx}/>)

        }
      </div>

    </main>
  )
}
