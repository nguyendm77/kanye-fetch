console.log("👀")
// url="https://api.kanye.rest"

let url = "https://api.kanye.rest";

function errorHandler(error) {
    console.log(error);
}

fetch(url) 
    .then(function(responseData) {
        return responseData.json();
    })
    .then(function(jsonData) {
        console.log(jsonData);
        // results are at jsonData.people
        //  Have a url of Astronauts who are on the space station (name found at jsonData.people[i].name)
        //  iterate over the list of folks in space
        // jsonData.people.forEach(function(person) {
            //  add a list item with their name
            let quote = jsonData.quote;
            let spaceWalker = document.createElement('kanyeli');
            spaceWalker.textContent = quote;
            document.getElementById('transporter').appendChild(spaceWalker);
    })
    .catch(errorHandler)
