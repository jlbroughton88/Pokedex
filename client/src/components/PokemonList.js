import React from 'react';
import styled from "styled-components"
import Pokemon from "./Pokemon"


class PokemonList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemonList: [],
            isLoading: false,
            currentLimit: 0,
            currentOffset: 0
        };
    };

    componentDidMount() {
        this.fetchData()
    };

    loadMore = () => {
        this.setState(prevState => ({ 
            currentLimit: prevState.currentLimit + 20
        }), () => this.fetchData())
    }

    fetchData() {
        const { currentLimit, currentOffset } = this.state;
        fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${currentLimit}&offset=${currentOffset}`)
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
                <LoadBtn className="loadBtn" onClick={this.loadMore}>Load More</LoadBtn>
            </div>
        );
    }
}

const LoadBtn = styled.button`
    align-self: center;
    display: flex;
    justify-content: center;
    margin-top: 2.5%;
    padding: 7px 12px;
    font-size: 1rem;
    cursor: pointer;
    font-family: "biko";
    outline: none;
    
    -webkit-appearance: none;
    -moz-appearance: none;
`

export default PokemonList;