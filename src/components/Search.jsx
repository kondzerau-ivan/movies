import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.inputTextRef = React.createRef();
  }

  componentDidMount() {
    this.inputTextRef.current.focus();
  }

  render() {
    return (
      <div className="row">
        <div className="input-field col s12">
          <input ref={this.inputTextRef} type="text" placeholder="Movie you are looking for" />
        </div>
      </div>
    );
  }
}

export {Search}