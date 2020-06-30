const BASE_URL = "https://swapi.dev/api/";

function renderInfo() {
    fetch(BASE_URL + "people")
    .then(res => res.json())
    .then(data => {
        /*
         * Here is where you will write all the code to render the information we received from the API call
         * Hint 1:
         * 
        */
        console.log(data.results); // <== remember this is just an array of objects. Take a look at it in the chrome console
    })
    .catch(e => console.error(e.message))
    .finally(() => console.log("API call finished"))
}

renderInfo();