import React from "react";
import Movies  from "../components/Movies";
import Spinner from "../components/Spinner";
import Search from "../components/Search";

export default class Main extends React.Component {
  state = {
    movies: [],
  }

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=a8c73077&s=avengers')
      .then(response => response.json())
      .then(data => this.setState({movies: data.Search}));
  }

  searchMovies = (str) => {
    fetch(`http://www.omdbapi.com/?apikey=a8c73077&s=${str}`)
      .then(response => response.json())
      .then(data => this.setState({movies: data.Search}));
  }

  render() {
    const {movies} = this.state;

    return(
      <main>
        <div className="container mx-auto p-6 pb-44">
          <Search searchMovies={this.searchMovies} />
          {
            movies.length ?
            <Movies movies={movies} /> :
            <Spinner />
          }
          
        </div>
      </main>
    );
  };

}