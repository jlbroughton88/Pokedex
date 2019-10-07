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
                <Header />
                <Container>
                    <NameDiv>
                        <Name>{capitalizeFirstLetter(name)}</Name>
                    </NameDiv>
                    <IdDiv><p>ID: {id}</p></IdDiv>
                    <SpritesDiv>
                        <DefaultDiv>
                            <DefaultH>Default</DefaultH>
                            <img src={sprites.front_default} alt={sprites.front_default} />
                            <img src={sprites.back_default} alt={sprites.back_default} />
                        </DefaultDiv>

                        <ShinyDiv>
                        <ShinyH>Shiny</ShinyH>
                            <img src={sprites.front_shiny} alt={sprites.front_shiny} />
                            <img src={sprites.back_shiny} alt={sprites.back_shiny} />
                        </ShinyDiv>

                    </SpritesDiv>
                    <HeightDiv>
                        <p>Height: {height}</p>
                    </HeightDiv>
                    <WeightDiv>
                        <p>Weight: {weight}lbs</p>
                    </WeightDiv>
                    <AbilityDiv>
                        <AbilitiesH>Abilities:</AbilitiesH>
                        {abilities.map(ablty => { return <Ability key={ablty.ability.name}>{capitalizeFirstLetter(ablty.ability.name)}<br /></Ability> })}
                    </AbilityDiv>
                    <TypesDiv>
                        <TypesH>Types:</TypesH>
                        {types.map(typ => { return <Type key={typ.type.name}>{capitalizeFirstLetter(typ.type.name)}</Type> })}
                    </TypesDiv>
                    <StatsDiv>
                        <StatsH>Stats:</StatsH>
                        {stats.map(stt => { return <Stat key={stt.stat.name}>{capitalizeFirstLetter(stt.stat.name)}: {stt.base_stat}<br /></Stat> })}
                    </StatsDiv>
                    <GamesDiv>
                        <GamesH>Appears in:</GamesH>
                        {game_showings.map(shw => { return <Game key={shw.version.name}>Pokemon {capitalizeFirstLetter(shw.version.name)} <br /> </Game> })}
                    </GamesDiv>
                </Container>

            </MotherDiv>
        )
    }

}


export default PokeSummary;

const MotherDiv = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Container = styled.div`
    padding: 7%;
    width: 70%;
    align-self: center;
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

const Name = styled.h2`
    margin: 0;
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
const AbilitiesH = styled.h4`
margin: 0;
font-size: 1.3rem;
`

const Ability = styled.span``

const TypesDiv = styled.div`
    margin: 1%;
    border: #333 1px dotted;
    padding: 1.5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const TypesH = styled.h4`
margin: 0;
font-size: 1.3rem;
`

const Type = styled.span``

const StatsDiv = styled.div`
    margin: 1%;
    border: #333 1px dotted;
    padding: 1.5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const StatsH = styled.h4`
margin: 0;
font-size: 1.3rem;
`

const Stat = styled.span``

const GamesDiv = styled.div`
    margin: 1%;
    border: #333 1px dotted;
    padding: 1.5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const GamesH = styled.h4`
    margin: 0;
    font-size: 1.3rem;
`

const Game = styled.span``

const DefaultDiv = styled.div``

const DefaultH = styled.h4`
margin: 0;
font-size: 1.3rem;
`

const ShinyDiv = styled.div``

const ShinyH = styled.h4`
    margin: 0;
    font-size: 1.3rem;
`
