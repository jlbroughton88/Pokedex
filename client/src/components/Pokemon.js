import React from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";


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
            <Link className="viewBtn" to={newTo}>
                <MotherDiv key={name}  >
                    <LeftDiv>
                        <NameP>{capitalizeFirstLetter(name)}</NameP>
                        {/* <ViewBtn href={url}>View</ViewBtn> */}
                    </LeftDiv>
                    <Img src={sprite} alt={name} />
                </MotherDiv>
            </Link >
        )
    }
}

const MotherDiv = styled.div`
    height: 100%;
    width: 100%;
    text-align: center;
    background: #f4f4f4;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    font-family: "biko";

`

const LeftDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    align-self: center;
    padding: 0;
    height: 100%;
`

const NameP = styled.p`
    align-self: center;
    font-size: 1.3rem;
    padding: 0;
    margin: 0;    
    -webkit-letter-spacing: 1px;
    -moz-letter-spacing: 1px;
    -ms-letter-spacing: 1px;
    letter-spacing: 1px;
    color: #383838;
    position: relative;
    margin: auto;
`

const Img = styled.img`
    filter: drop-shadow(0 2px 3px rgba(58, 58, 58, 0.4));
`

export default Pokemon;