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
    background: #ef5450;
    color: #f4f4f4;
    padding: 4px 8px;
    text-align: center;
    font-family: Pokemon;
    font-size: 1.3rem;
    color: #ffc81a;

`

const Head = styled.h1`
text-shadow: -2px 0 #426291, 0 2px #426291, 2px 0 #426291
`

export default Header;
