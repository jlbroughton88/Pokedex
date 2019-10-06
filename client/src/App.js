import React from 'react';
import Header from "./components/Header"
import PokemonList from "./components/PokemonList";
import './App.css';

class App extends React.Component {


  render() {
    return (
        <div className="App">
          <Header />
          <PokemonList />
        </div>
    );
  }
}

export default App;
