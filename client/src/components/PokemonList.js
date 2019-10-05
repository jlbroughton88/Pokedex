import React from 'react';
import Pokemon from "./Pokemon"


class PokemonList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemonList: [],
            isLoading: false,
            pokemon: {
                id: 0,
                name: '',
                stats: [],
                height: '',
                weight: '',
                sprites: [],
            }
        };
    };

    componentDidMount() {
        this.fetchData()
    };

    

    fetchData() {

        // fetch("https://pokeapi.co/api/v2/pokemon/806")
        //     .then(res => res.json())
        //     .then(data => this.setState({
        //         pokemon: {
        //             id: data.id,
        //             name: data.name,
        //             stats: data.stats,
        //             height: data.height,
        //             weight: data.weight,
        //             sprites: data.sprites
        //         }
        //     }, () => console.log(this.state.pokemon)))

        fetch("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0")
            .then(res => res.json())
            .then(data => data.results.map(poke => (
                {
                    name: `${poke.name}`,
                    url: `${poke.url}`
                }
            ))).then(pokemonList => this.setState({ pokemonList })
            ).catch(error => console.log("parsing failed", error))
    }


    render() {
        const { pokemonList, isLoading } = this.state;

        return (
            <div className="container">
                {
                    !isLoading ? pokemonList.map(poke => {
                        const { name, url, id } = poke;

                        return <Pokemon key={name} name={name} id={id} url={url} />
                    }) : null
                }
            </div>
        );
    }
}

export default PokemonList;