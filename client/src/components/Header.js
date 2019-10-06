import React, { Component } from 'react'
import styled from "styled-components"

const Header = () => {
    return (
        <MotherDiv>
            <h1>Pokedex</h1>
        </MotherDiv>
    )
}

const MotherDiv = styled.div`
    background: #333;
    color: #f4f4f4;
    padding: 5px 10px;
    text-align: center;
`

export default Header;
