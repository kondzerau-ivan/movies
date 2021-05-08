import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: 'matrix',
      movieType: 'all',
    }

    this.handleKey = this.handleKey.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleKey(event) {
    if(event.key === 'Enter') {
      this.props.searchMovies(this.state.search, this.state.movieType);
    }
  }

  handleFilter(event) {
    this.setState(
      () => ({movieType: event.target.dataset.type}),
      () => this.props.searchMovies(this.state.search, this.state.movieType)
    );
  }

  componentDidMount() {
    this.props.searchMovies(this.state.search, this.state.movieType)
  }

  render() {
    return (
      <div className="row">
        <div className="input-field">
          <input type="text"
                 placeholder="Movie you are looking for"
                 value={this.state.search}
                 autoFocus={this.props.autofocus}
                 onChange={(event) => {this.setState({search: event.target.value})}}
                 onKeyDown={this.handleKey}
          />
          <button className="btn" onClick={() => this.props.searchMovies(this.state.search, this.state.movieType)}>Search</button>
        </div>
        <div className="row">
          <label className="col s4 label-type">
            <input className="with-gap radio" name="movie-type" type="radio" data-type="all" onChange={this.handleFilter} checked={this.state.movieType === 'all'}/>
            <span className="span">All</span>
          </label>
          <label className="col s4 label-type">
            <input className="with-gap radio" name="movie-type" type="radio" data-type="movie" onChange={this.handleFilter} checked={this.state.movieType === 'movie'}/>
            <span className="span">Movies</span>
          </label>
          <label className="col s4 label-type">
            <input className="with-gap radio" name="movie-type" type="radio" data-type="series" onChange={this.handleFilter} checked={this.state.movieType === 'series'}/>
            <span className="span">Series</span>
          </label>
        </div>
      </div>
    );
  }
}

export {Search}