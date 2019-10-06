import React from "react";
import styled from "styled-components"
import { Link } from "react-router-dom"


class Pokemon extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            pokemon: {
                id: 0,
                name: '',
                stats: [],
                height: '',
                weight: '',
                sprites: [],
            },
            isLoading: false
        }
    }

    componentDidMount() {
        this.fetchData()
    };

    fetchData = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.name}`)
            .then(res => res.json())
            .then(data => this.setState({
                pokemon: {
                    id: data.id,
                    name: data.name,
                    stats: data.stats,
                    height: data.height,
                    weight: data.weight,
                    sprites: data.sprites
                }
            }))
    }

    render() {
        // Capitalize first letter
        let capitalizeFirstLetter = (string) => {
            return string.charAt(0).toUpperCase() + string.slice(1);
        };

        const { name, url, id } = this.props;
        const { stats, height, weight, sprites } = this.state.pokemon;

        return (
            <MotherDiv key={name} stats={stats} height={height} weight={weight} >

                <LeftDiv>
                    <NameP>{capitalizeFirstLetter(name)}</NameP>
                    {/* <Link to={`/poke/${name}`}>View</Link> */}
                    <ViewBtn href={url}>View</ViewBtn>
                </LeftDiv>
                    <img src={sprites.front_default} alt={name}></img>
                
            </MotherDiv>
        )
    }
}

const MotherDiv = styled.div`
    height: 100%;
    width: 60%;
    padding: 5px 10px;
    text-align: center;
    align-self: center;
    border: 1px grey dotted;
    background: #f4f4f4;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin: 1.5%;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
    font-family: "biko";

    @media(max-width: 600px) {
        width: 70%;
    }
`



const ViewBtn = styled.a`
    text-decoration: none;
    padding: 1.5%;
    color: grey;
`

const LeftDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100px;
`

const NameP = styled.p`
    font-size: 1.3rem;
    margin: 0;
    letter-spacing: 1px;
`

export default Pokemon;