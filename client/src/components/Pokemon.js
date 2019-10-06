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
            }, () => console.log(this.state.pokemon)))
    }

    render() {
        // Capitalize first letter
        let capitalizeFirstLetter = (string) => {
            return string.charAt(0).toUpperCase() + string.slice(1);
        };

        const { name, url, id } = this.props;
        const { stats, height, weight, sprites } = this.state.pokemon;

        return (
            <div key={name} style={pokeDiv}>
                <p>{capitalizeFirstLetter(name)}</p>
                <a href={url}>View</a>
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
    border: "1px #333 dotted"

}

export default Pokemon