import React from "react";
import axios from "axios";

export default class PersonList extends React.Component {
  state = {
    name: "",
  };

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name: this.state.name,
    };

    axios
      .get(`https://restcountries.eu/rest/v2/name/${user.name}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        let data =res.data
        let { name, capital, topLevelDomain, timezones, languages } = data;
        this.setState({
          name,
          capital,
          topLevelDomain,
          timezones,
          languages,
          loading: false,
        });
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Country Name:
            <input type="text" name="name" onChange={this.handleChange} placeholder='Write a country' />
          </label>
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }

  // render() {
  //   return (
  //     <React.Fragment>
  //       <h4>Result here</h4>
  //     </React.Fragment>
  //   );
  // }
}
