import React from 'react'
import styled from "styled-components";

const Footer = () => {
    return (
        <MotherDiv>
            <PokedexP>Pokedex</PokedexP>
            <NameP>Jacob Broughton</NameP>
        </MotherDiv>
    )
}

export default Footer;

const MotherDiv = styled.div`
    border-top: black;
    height: 70px;
    background: #333;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-family: biko;
    color: #e4e4e4;
    flex-direction: column;
    padding: 1.5%;
    bottom: 0;
    width: 100%;
`

const PokedexP = styled.p`
    font-size: 1.2rem;
    margin: 0;
`

const NameP = styled.p`
    font-size: 1.0rem;
    margin: 0;
`