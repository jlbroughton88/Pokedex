import React from 'react';
import Header from "./components/Header"
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      isLoading: false
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  // Capitalize first letter
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  fetchData() {
    // GET ALL POKEMON
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0")
      .then(res => res.json())
      .then(data => data.results.map(poke => (
        {
          name: `${poke.name}`,
          url: `${poke.url}`
        }
      )))
      .then(pokemon => this.setState({
        pokemon
      }))
      .catch(error => console.log("parsing failed", error))
  }

  render() {
    const { pokemon, isLoading } = this.state;
    return (
      <div className="App">
        <Header />
        <div className="container">
          {
            !isLoading ? pokemon.map(poke => {
              const { name, url } = poke;
              
              return <div key={name} className="pokeDiv">
                <p>{this.capitalizeFirstLetter(name)}</p>
                <a href={`${url}`}>View</a>
              </div>
            }) : null
          }
        </div>

      </div>
    );
  }
}

export default App;
