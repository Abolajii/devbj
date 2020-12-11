import axios from "axios"

const cors = `https://cors-anywhere.herokuapp.com/`

const instance = axios.create({
    baseURL: `${cors}https://api.themoviedb.org/3`
})

export default instance