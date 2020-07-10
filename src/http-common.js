import axios from "axios";

//Define a URL base da origem para consumo do servico
export default axios.create({
    // baseURL: "http://localhost:8081/",
    baseURL: "https://grades-igti-backend.herokuapp.com/",
    headers: {
        "Content-type": "application/json",
    },
});
