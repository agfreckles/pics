import React from "react";

class Searchbar extends React.Component {
  state = { term: "", password: "" };
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term)
  };
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <label className="ui label">Search</label>
          <input
            type="text"
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
          />
          {/* <input
            type="password"
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          {this.state.password.length < 4 ? "Too short" : ""} */}
        </form>
      </div>
    );
  }
}
export default Searchbar;
