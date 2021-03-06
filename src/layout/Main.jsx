import React from "react";
import {Movies} from "../components/Movies";
import {Search} from "../components/Search";
import {Preloader} from "../components/Preloader";

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      loading: false,
      error: ""
    }

    this.searchMovies = this.searchMovies.bind(this);
  }

  searchMovies(movie, movieType = 'all') {
    this.setState({loading: true})
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${movie}${movieType !== 'all' ? `&type=${movieType}` : ''}`)
      .then(response => response.json())
      .then(data => this.setState({movies: data.Search, loading: false, error: data.Error}));
  }

  render() {
    const {movies, loading, error} = this.state;
    return (
      <main>
        <section>
          <div className="container content">
            <Search searchMovies={this.searchMovies} autofocus />
            {loading
              ? <Preloader />
              : <Movies movies={movies} error={error} />
            }
          </div>
        </section>
      </main>
    );
  }
}

export {Main}