import axios from "axios";

/*Base Url for get request to movie database*/

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

export default instance;