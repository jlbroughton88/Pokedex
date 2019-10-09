import React from 'react'
import { Link } from "react-router-dom"
import styled from "styled-components"

const Header = () => {
    return (
        <MotherDiv>
            <Link to="/"><Head>Pokedex</Head></Link>
        </MotherDiv>
    )
}

const MotherDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
    background: #ef5450;
    color: #f4f4f4;
    padding: 4px 8px;
    text-align: center;
    font-family: Pokemon;
    font-size: 1.5rem;
    color: #ffc81a;
    height: 115px;

    @media(max-width: 550px) {
        font-size: 1.35rem;
        height: 80px;
    }
 
`

const Head = styled.h1`
text-shadow: -2px 0 #426291, 0 2px #426291, 2px 0 #426291;
margin: 0;
padding-top: 10px;
`

export default Header;
