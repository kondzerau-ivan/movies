import React from "react";
import Movies  from "../components/Movies";
import Spinner from "../components/Spinner";
import Search from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

export default class Main extends React.Component {
  state = {
    movies: [],
    loading: true
  }

  componentDidMount() {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=avengers`)
      .then(response => response.json())
      .then(data => this.setState({movies: data.Search, loading: false}));
  }

  searchMovies = (str, type = 'all') => {
    this.setState({loading: true});
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
      .then(response => response.json())
      .then(data => this.setState({movies: data.Search, loading: false}));
  }

  render() {
    const {movies, loading} = this.state;

    return(
      <main>
        <div className="container mx-auto p-6 pb-44">
          <Search searchMovies={this.searchMovies} />
          {
            loading ?
            <Spinner /> :
            <Movies movies={movies} />
          }
          
        </div>
      </main>
    );
  };

}