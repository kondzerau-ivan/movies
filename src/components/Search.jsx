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
        <div className="input-field col s12">
          <input type="text"
                 placeholder="Movie you are looking for"
                 value={this.state.search}
                 autoFocus={this.props.autofocus}
                 onChange={(event) => {this.setState({search: event.target.value})}}
                 onKeyDown={this.handleKey}
          />
        </div>
      </div>
    );
  }
}

export {Search}