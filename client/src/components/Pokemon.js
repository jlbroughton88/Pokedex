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
                sprites: []
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
                    sprite: data.sprites.front_default
                }
            }))
    }

    render() {
        // Capitalize first letter
        let capitalizeFirstLetter = (string) => {
            return string.charAt(0).toUpperCase() + string.slice(1);
        };

        const { name } = this.props;
        const { sprite } = this.state.pokemon;
        let newTo = {
            pathname: `/poke/${name}`,
            param1: name
        }

        return (
            <MotherDiv key={name}  >
                <LeftDiv>
                    <NameP>{capitalizeFirstLetter(name)}</NameP>
                    <Link style={viewBtn} to={newTo}>View</Link>
                    {/* <ViewBtn href={url}>View</ViewBtn> */}
                </LeftDiv>
                <img src={sprite} alt={name}></img>
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

const viewBtn = {
    textDecoration: "none",
    padding: "1.5%",
    color: "grey",
    fontSize: "1.15rem",
}

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