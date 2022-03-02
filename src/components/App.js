import React from "react";
import Searchbar from "./Searchbar";
import Images from "./Images";
import unsplash from "../api/unsplash";
import Users from "./Users";

class App extends React.Component {
  state = { images: [] };
  handleSearchSubmit = async (term) => {
    const resp = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ images: resp.data.results });
  };
  render() {
    return (
      <div className="ui container">
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <Images images={this.state.images} />
        {/* <Users /> */}
      </div>
    );
  }
}

export default App;
