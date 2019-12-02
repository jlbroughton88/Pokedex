import React from 'react';
import Header from "../Header"
import Footer from "../Footer"
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


        return (
            <MotherDiv >
                <Header />
                <Container>
                    <NameId>
                        <NameDiv>
                            <Name>{capitalizeFirstLetter(name)}</Name>
                        </NameDiv>
                        <IdDiv><p>#{id}</p></IdDiv>
                    </NameId>

                    <SpritesDiv>
                        <DefaultDiv>
                            <DefaultH>Default</DefaultH>
                            <Img src={sprites.front_default} alt={sprites.front_default} />
                            <Img src={sprites.back_default} alt={sprites.back_default} />
                        </DefaultDiv>

                        <ShinyDiv>
                            <ShinyH>Shiny</ShinyH>
                            <Img src={sprites.front_shiny} alt={sprites.front_shiny} />
                            <Img src={sprites.back_shiny} alt={sprites.back_shiny} />
                        </ShinyDiv>

                    </SpritesDiv>
                    <HeightWeight>
                        <HeightDiv>
                            <p>Height: {height / 2}ft</p>
                        </HeightDiv>
                        <WeightDiv>
                            <p>Weight: {weight}lbs</p>
                        </WeightDiv>
                    </HeightWeight>
                    <AbilityType>
                        <AbilityDiv>
                            <AbilitiesH>Abilities:</AbilitiesH>
                            {abilities.map(ablty => { return <Ability key={ablty.ability.name}>{capitalizeFirstLetter(ablty.ability.name)}<br /></Ability> })}
                        </AbilityDiv>
                        <TypesDiv>
                            <TypesH>Types:</TypesH>
                            {types.map(typ => { return <Type id={typ.type.name} key={typ.type.name}>{capitalizeFirstLetter(typ.type.name)}</Type> })}
                        </TypesDiv>
                    </AbilityType>

                    <StatsDiv>
                        {/* <StatsH>Stats:</StatsH> */}
                        {stats.map(stt => { return <Stat id={stt.stat.name} key={stt.stat.name}>{capitalizeFirstLetter(stt.stat.name)}: {stt.base_stat}<br /></Stat> })}
                    </StatsDiv>
                </Container>
            <Footer/>
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
    max-width: 720px;
`


const NameId = styled.div`
    display: flex;
    flex-direction: row;
`

const NameDiv = styled.div`
    width: 75%;
    margin: 1%;
    padding: 2.3%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: #383838 1px solid;
    border-radius: 5px;
    box-shadow: 0 3px 10px rgba(58, 58, 58, 0.4);
`

const Name = styled.h2`
    margin: 0;
    font-size: 2rem;

    @media(min-width: 750px) {
        font-size: 2.2rem;
    }
`


const IdDiv = styled.div`
    width: 25%;
    margin: 1%;
    border: #383838 1px dotted;
    padding: 2.3%;
    font-size: 1.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: #383838 1px solid;
    border-radius: 5px;
`
const SpritesDiv = styled.div`
    margin: 1%;
    border: #383838 1px dotted;
    padding: 2.3%;
    padding-top: 4%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border: #383838 1px solid;
    border-radius: 5px;

`

const Img = styled.img`
filter: drop-shadow(0 2px 3px rgba(58, 58, 58, 0.4));
`


const HeightWeight = styled.div`
    display: flex;
    flex-direction: row;
`

const HeightDiv = styled.div`
    width: 50%;
    margin: 1%;
    border: #383838 1px dotted;
    padding: 2.3%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: #383838 1px solid;
    border-radius: 5px;

    @media(min-width: 750px) {
        font-size: 1.4rem;
        
    }
`
const WeightDiv = styled.div`
    width: 50%;
    margin: 1%;
    border: #383838 1px dotted;
    padding: 2.3%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: #383838 1px solid;
    border-radius: 5px;

    @media(min-width: 750px) {
        font-size: 1.4rem;
    }
`

const AbilityType = styled.div`
    display: flex;
    flex-direction: row;
`

const AbilityDiv = styled.div`
    width: 50%;
    margin: 1%;
    border: #383838 1px dotted;
    padding: 2.3%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 130%;
    border: #383838 1px solid;
    border-radius: 5px;
`
const AbilitiesH = styled.h4`
    margin: 0;
    font-size: 1.3rem;
    margin-bottom: 2%;

    @media(min-width: 750px) {
        font-size: 1.4rem;
        margin-bottom: 3%;
    }

    // @media(min-width: 950px) {
    //     font-size: 1.7rem;
    //     margin-bottom: 3.5%;
    // }
`

const Ability = styled.span`
    border-bottom: 1px solid black;
    margin: 1%;
    width: 50%;
        @media(max-width: 590px) {
        width: 80%;
    }

    @media(min-width: 750px) {
        font-size: 1.15rem;
    }

    // @media(min-width: 950px) {
    //     font-size: 1.45rem;
    // }
`

const TypesDiv = styled.div`
    width: 50%;
    margin: 1%;
    border: #383838 1px dotted;
    padding: 2.3%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 140%;
    border: #383838 1px solid;
    border-radius: 5px;
`

const TypesH = styled.h4`
    margin: 0;
    font-size: 1.3rem;

    @media(min-width: 750px) {
        font-size: 1.4rem;
        margin-bottom: 3%;
    }
`

const Type = styled.span`
    border-radius: 5px;
    display: flex;
    align-items: center;
`

const StatsDiv = styled.div`
    margin: 1%;
    border: #383838 1px dotted;
    padding: 2.3%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    border: #383838 1px solid;
    border-radius: 5px;

    @media(max-width: 590px) {
        flex-direction: column;
    }

    
`

const Stat = styled.span`
    width: 40%;
    height: 10%;
    font-size: 1.1rem;
    margin: 2%;
    padding: 2%;
   border-bottom: 1px grey solid;

   @media(max-width: 590px) {
    width: 80%;
    margin: 1%;
    padding-top: 1%;
    padding-bottom: 1%;
    }

    @media(min-width: 750px) {
        font-size: 1.3rem;
    }

    @media(min-width: 950px) {
        font-size: 1.45rem;
    }

`

const DefaultDiv = styled.div``

const DefaultH = styled.h4`
    margin: 0;
    font-size: 1.3rem;
`

const ShinyDiv = styled.div`

`


const ShinyH = styled.h4`
    margin: 0;
    font-size: 1.3rem;

    
`
