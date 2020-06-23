import React from "react";
import axios from "axios";

export default class PersonList extends React.Component {
  state = {country: "Germany"};

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
       this.handleSubmit()
    }, 100);
    
  }
  handleSubmit = (event) => {
    if(this.state.country!=='Germany'){
       event.preventDefault();
    }
    

    const user = {
      country: this.state.country,
    };

    axios
      .get(`https://restcountries.eu/rest/v2/name/${user.country}`)
      .then((res) => {
        let data = res.data;
        console.log(data);
        let {
          name,
          capital,
          population,
          subregion,
          currencies,
          timezones,
          languages,
          flag,
        } = data[0];
        this.setState({
          name,
          capital,
          population,
          subregion,
          currencies,
          timezones,
          languages,
          flag,
        });
        console.log(this.state);
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
              placeholder="Write a country"
            />
          </label>
          <button type="submit">Search</button>
        </form>
        <h2>{this.state.name}</h2>
        <img src={this.state.flag} alt={this.state.country} width="200px" />
        <p><strong>Region: </strong>({this.state.subregion})</p>
        <p>
          <strong>Capital: </strong>
          {this.state.capital}
        </p>
        <p>
          <strong>population: </strong>
          {this.state.population}
        </p>
        {/* <strong>{this.state.currencies}</strong>
        <strong>{this.state.languages}</strong> */}
      </div>
    );
  }
}
