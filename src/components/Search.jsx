import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ''
    }

    this.handleKey = this.handleKey.bind(this);
  }

  handleKey(event) {
    if(event.key === 'Enter') {
      this.props.searchMovies(this.state.search);
    }
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
          <button className="btn" onClick={() => this.props.searchMovies(this.state.search)}>Search</button>
        </div>
        <div className="row">
          <label className="col s4 label-type">
            <input className="with-gap radio" name="group3" type="radio" checked/>
            <span className="span">All</span>
          </label>
          <label className="col s4 label-type">
            <input className="with-gap radio" name="group3" type="radio" checked/>
            <span className="span">Movies</span>
          </label>
          <label className="col s4 label-type">
            <input className="with-gap radio" name="group3" type="radio" checked/>
            <span className="span">Series</span>
          </label>
        </div>
      </div>
    );
  }
}

export {Search}