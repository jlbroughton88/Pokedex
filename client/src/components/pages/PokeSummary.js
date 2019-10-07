import React from 'react';
import Header from "../Header"
import styled from "styled-components"



class PokeSummary extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            paramName: props.match.params.pokemon,
            pokemon: {
                id: 0,
                name: '',
                sprites: [],
                abilities: [],
                base_experience: 0,
                forms: [],
                game_showings: [],
                held_items: [],
                moves: [],
                stats: [],
                types: [],
                weight: 0,
                height: 0
            },
            isLoading: false
        }
    }

    componentDidMount() {
        this.fetchData(this.state.paramName)
    }

    fetchData = (nameP) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${nameP}`)
            .then(res => res.json())
            .then(data => this.setState({
                pokemon: {
                    id: data.id,
                    name: data.name,
                    sprites: data.sprites,
                    abilities: data.abilities,
                    base_experience: data.base_experience,
                    forms: data.forms,
                    game_showings: data.game_indices,
                    held_items: data.held_items,
                    moves: data.moves,
                    stats: data.stats,
                    types: data.types,
                    weight: data.weight,
                    height: data.height
                }
            }, () => { console.log(this.state.pokemon) }))
    }

    render() {

        let capitalizeFirstLetter = (string) => {
            return string.charAt(0).toUpperCase() + string.slice(1);
        };


        const {
            id, name, sprites, abilities, base_experience,
            forms, game_showings, held_items, moves,
            types, weight, height, stats
        } = this.state.pokemon;

        console.log(types)
        return (
            <MotherDiv >
                <Header/>
                <Container>
                    <NameDiv><p>{capitalizeFirstLetter(name)}</p></NameDiv>
                     <IdDiv><p>ID: {id}</p></IdDiv>
                <SpritesDiv>
                    <img src={sprites.front_default} alt={sprites.front_default} />
                    <img src={sprites.back_default} alt={sprites.back_default} />
                    <img src={sprites.front_shiny} alt={sprites.front_shiny} />
                    <img src={sprites.back_shiny} alt={sprites.back_shiny} />
                </SpritesDiv>
                <HeightDiv>
                    <p>Height: {height}</p>
                </HeightDiv>
                <WeightDiv>
                    <p>Weight: {weight}lbs</p>
                </WeightDiv>
                <AbilityDiv>
                    <p>Abilities:</p>
                    {abilities.map(ablty => { return <span key={ablty.ability.name}>{ablty.ability.name}<br /></span> })}
                </AbilityDiv>
                <TypesDiv>
                    <p>Types:</p>
                    {types.map(typ => { return <span key={typ.type.name}>{capitalizeFirstLetter(typ.type.name)}</span> })}
                </TypesDiv>
                <StatsDiv>
                    <p>Stats:</p>
                    {stats.map(stt => { return <span key={stt.stat.name}>{capitalizeFirstLetter(stt.stat.name)}: {stt.base_stat}<br /></span> })}
                </StatsDiv>
                <GamesDiv>
                    <p>Appears in:</p>
                    {game_showings.map(shw => { return <span key={shw.version.name}>Pokemon {capitalizeFirstLetter(shw.version.name)} <br /> </span> })}
                </GamesDiv>
                </Container>
               
            </MotherDiv>
        )
    }

}


export default PokeSummary;

const MotherDiv = styled.div`
    text-align: center;
`

const Container = styled.div`
    padding: 7%;
`

const NameDiv = styled.div`
    margin: 1%;
    border: #333 1px dotted;
    padding: 1.5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const IdDiv = styled.div`
    margin: 1%;
    border: #333 1px dotted;
    padding: 1.5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const SpritesDiv = styled.div`
    margin: 1%;
    border: #333 1px dotted;
    padding: 1.5%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
const HeightDiv = styled.div`
    margin: 1%;
    border: #333 1px dotted;
    padding: 1.5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const WeightDiv = styled.div`
    margin: 1%;
    border: #333 1px dotted;
    padding: 1.5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const AbilityDiv = styled.div`
    margin: 1%;
    border: #333 1px dotted;
    padding: 1.5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const TypesDiv = styled.div`
    margin: 1%;
    border: #333 1px dotted;
    padding: 1.5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const StatsDiv = styled.div`
    margin: 1%;
    border: #333 1px dotted;
    padding: 1.5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const GamesDiv = styled.div`
    margin: 1%;
    border: #333 1px dotted;
    padding: 1.5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
