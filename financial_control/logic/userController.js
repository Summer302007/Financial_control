// This file contains the URL of the JSON server and a function to fetch user data.
import useFetch from "./fetch.js";

const URL_USER = "http://localhost:3000/users"

async function getUsers () {
    return await useFetch(URL_USER, "GET");
}

export default {getUsers};