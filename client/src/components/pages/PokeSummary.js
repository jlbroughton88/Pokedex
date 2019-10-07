import React from 'react';
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

        const {
            id, name, sprites, abilities, base_experience,
            forms, game_showings, held_items, moves,
            types, weight, height, stats
        } = this.state.pokemon;

        console.log(types)
        return (
            <MotherDiv >
                <IdDiv><p>ID: {id}</p></IdDiv>
                <SpritesDiv>
                    <img src={sprites.front_default} alt={sprites.front_default} />
                <img src={sprites.back_default} alt={sprites.back_default} />
                <img src={sprites.front_shiny} alt={sprites.front_shiny} />
                <img src={sprites.back_shiny} alt={sprites.back_shiny} />
                    </SpritesDiv>
                <HeightDiv><p>Height: {height}</p></HeightDiv>
                <WeightDiv><p>Weight: {weight}lbs</p></WeightDiv>
                <AbilityDiv><p>Abilities: {abilities.map(ablty => { return <span key={ablty.ability.name}>{ablty.ability.name}</span>})}</p></AbilityDiv>
                <TypesDiv><p>Types: <br/>{types.map(typ => { return <span key={typ.type.name}>{typ.type.name}</span>})}</p></TypesDiv>
                <StatsDiv><p>Stats: <br/>{stats.map(stt => { return <span key={stt.stat.name}>{stt.stat.name}: {stt.base_stat}<br/></span>})}</p></StatsDiv>
                <GamesDiv><p>Appears in: Pokemon {game_showings.map(shw => { return <span key={shw.version.name}>{shw.version.name} <br/> </span>})}</p></GamesDiv>
            </MotherDiv>
        )
    }

}


export default PokeSummary;

const MotherDiv = styled.div`
    text-align: center;
    padding: 5%;
`

const IdDiv = styled.div`
    margin: 1%;
    border: #333 1px dotted;
`
const SpritesDiv = styled.div`
margin: 1%;
border: #333 1px dotted;
`
const HeightDiv = styled.div`
margin: 1%;
border: #333 1px dotted;
`
const WeightDiv = styled.div`
margin: 1%;
border: #333 1px dotted;
`
const AbilityDiv = styled.div`
margin: 1%;
border: #333 1px dotted;
`
const TypesDiv = styled.div`
margin: 1%;
border: #333 1px dotted;
`
const StatsDiv = styled.div`
margin: 1%;
border: #333 1px dotted;
`
const GamesDiv = styled.div`
margin: 1%;
border: #333 1px dotted;
`
