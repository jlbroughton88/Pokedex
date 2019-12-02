import React from 'react'
import styled from "styled-components"
import Header from "../Header"
import PokemonList from "../PokemonList";
import Footer from "../Footer"


 const Home = () => {
    return (
        <MotherDiv>
            <Header/>
            <PokemonList/>
            <Footer/>
        </MotherDiv>
    )
}

export default Home;

const MotherDiv = styled.div`
width: 100%;
`