// This function fetches data from a given URL using the specified method and body.
export default async function useFetch(url, method, body) {
    try {
        const response = await fetch(url, {
            method: method,
            body: JSON.stringify(body),
            headers: {"Content-Type": "aplication/json"}
        });

        if (!response.ok) {
            throw new error("Has ocurred an error in the fetch");
        }

        return await response.json();
    } catch (error) {
        alert("Error: " + error);
    }
}