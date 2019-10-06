import React from "react";
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
            <div key={name} style={pokeDiv} stats={stats} height={height} weight={weight} >
                <p>{capitalizeFirstLetter(name)}</p>
                {/* <Link to={`/poke/${name}`}>View</Link> */}
                <a style={viewStyle} href={url}>View</a>
                <p>{id}</p>
                <img src={sprites.front_default} alt={name}></img>
            </div>
        )
    }
}

const pokeDiv = {
    width: "60%",
    padding: "5px 10px",
    textAlign: "center",
    alignSelf: "center",
    border: "1px #333 dotted",
    background: "#f4f4f4",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    margin: "1.5%",
    boxShadow: "0px 3px 15px rgba(0,0,0,0.2)"
}

const viewStyle = {
    textDecoration: "none",
    border: "black solid 1px",
    padding: "1.5%"
}

export default Pokemon