import React from "react";
import Movies  from "../components/Movies";

export default class Main extends React.Component {
  state = {
    movies: [],
  }

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=a8c73077&s=avengers')
      .then(response => response.json())
      .then(data => this.setState({movies: data.Search}));
  }

  render() {
    const {movies} = this.state;

    return(
      <main>
        <div className="container mx-auto px-6 pb-44">
          {
            movies.length ?
            <Movies movies={movies} /> :
            <h2>Loading...</h2>
          }
          
        </div>
      </main>
    );
  };

}