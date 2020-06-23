import React from "react";
import axios from "axios";
import NumbersFormat from "../helpers"


export default class PersonList extends React.Component {
  state = { country: "Germany" };

  handleChange = (event) => {
    this.setState({
      country: event.target.value,
      map: `https://www.google.com/maps/place/${event.target.value}/`,
    });
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        country: "Germany",
      });
      this.handleSubmit();
    }, 100);
  }
  handleSubmit = (event) => {
    if (this.state.country !== "Germany") {
      event.preventDefault();
    }

    const user = {
      country: this.state.country,
    };

    axios
      .get(`https://restcountries.eu/rest/v2/name/${user.country}`)
      .then((res) => {
        let data = res.data[0];
        console.log(data);
        let { name, capital, population, subregion, timezones, flag } = data;
        this.setState({
          name,
          capital,
          population,
          subregion,
          timezones,
          languages: [
            data.languages.map((n) => {
              return <span>{n.name}, </span>;
            }),
          ],
          flag,
          curName: data.currencies[0].name,
          curSymbol: data.currencies[0].symbol,
        });
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Country Name:
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              placeholder="Write a country name"
            />
          </label>
          <button type="submit">Search</button>
        </form>
        <h2>{this.state.name}</h2>
        <img src={this.state.flag} alt={this.state.country} width="200px" />
        <p>
          <strong>Region: </strong>({this.state.subregion})
        </p>
        <p>
          <strong>Capital: </strong>
          {this.state.capital}
        </p>
        <p>
          <strong>population: </strong>{NumbersFormat(this.state.population)}
          
        </p>
        <p>
          <strong>currency: </strong>
          {this.state.curName}({this.state.curSymbol})
        </p>
        <p>
          <strong>language(s): </strong>
          {this.state.languages}
        </p>
      </div>
    );
  }
}
