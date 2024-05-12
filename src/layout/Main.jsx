import React, {useState, useEffect} from "react";
import Movies  from "../components/Movies";
import Spinner from "../components/Spinner";
import Search from "../components/Search";

export default function Main() {
  const [movies, setMovies] = useState([]);
  const [loading, setloading] = useState(true);

  const searchMovies = (str, type = 'all') => {
    setloading(true);
    fetch(`https://www.omdbapi.com/?apikey=a8c73077&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
      .then(response => response.json())
      .then(data => {
        setMovies(data.Search);
        setloading(false);
      })
  }

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=a8c73077&s=avengers`)
    .then(response => response.json())
    .then(data => {
      setMovies(data.Search);
      setloading(false);
    })
  }, [])

  return(
    <main>
      <div className="container mx-auto p-6 pb-44">
        <Search searchMovies={searchMovies} />
        {
          loading ?
          <Spinner /> :
          <Movies movies={movies} />
        }
        
      </div>
    </main>
  );
}