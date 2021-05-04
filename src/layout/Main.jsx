import React from "react";
import {Movies} from "../components/Movies";
import {Search} from "../components/Search";
import {Preloader} from "../components/Preloader";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    }
  }

  focusInputText() {
    this.inputTextRef.current.focus();
  }

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=f79ef681&s=matrix')
      .then(response => response.json())
      .then(data => this.setState({movies: data.Search}));
  }

  render() {
    const {movies} = this.state;
    return (
      <main>
        <section>
          <div className="container content">
            <Search />
            {movies.length
              ? <Movies movies={movies} />
              : <Preloader />
            }
          </div>
        </section>
      </main>
    );
  }
}

export {Main}