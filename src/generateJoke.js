import axios from "axios";

function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }

    axios.get('https://icanhazdadjoke.com', config).then(({data}) => document.getElementById('joke').innerHTML = data.joke)
}

export default generateJoke;