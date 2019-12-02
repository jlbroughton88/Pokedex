import React from 'react';
import styled from "styled-components"
import Pokemon from "./Pokemon"


class PokemonList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemonList: [],
            isLoading: false,
            currentLimit: 20,
            searchValue: ""
        };
    };

    componentDidMount() {
        this.fetchData()
    };

    loadMore = () => {
        this.setState(prevState => ({
            currentLimit: prevState.currentLimit + 20
        }), () => this.fetchData())
        console.log(this.state.currentLimit)
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
        const { pokemonList, isLoading, searchValue } = this.state;



        return (
            <div className="pokeContainer">
                {/* <input name="search" id="search" type="text" value={searchValue} autoComplete="off" />
                <button type="submit" >Search</button> */}
                {
                    !isLoading ? pokemonList.map(poke => {

                        const { name, url } = poke;

                        return <Pokemon key={name} name={name} url={url} />
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
    font-size: 1.15rem;
    cursor: pointer;
    font-family: "biko";
    outline: none;
    padding: 0;
    padding: 2px 4px;
    -webkit-appearance: none;
    -moz-appearance: none;
    transition: all ease-in-out 0.3s;
    border-radius: 5px;

    @media(min-width: 800px) {
        font-size: 1.3rem;
        padding: 2%;
    }

    

    :hover{
        transform: scale(1.05);
        background: #383838;
        color: #ffffff;
    }

`

export default PokemonList;