let jokeBtn = document.getElementById("jokeBtn");
let jokeText = document.getElementById("jokeText");
let loading = document.getElementById("spinner");

function displayResults(jsonData) {
    let {
        value
    } = jsonData;
    jokeText.textContent = value;
    loading.classList.toggle("d-none");
}

jokeBtn.onclick = function() {
    jokeText.textContent = ""
    loading.classList.toggle("d-none");
    let url = "https://apis.ccbp.in/jokes/random";
    let options = {
        method: "GET"
    }
    fetch(url, options)
        .then(function(response) {
            return response.json()
        })
        .then(function(jsonData) {
            displayResults(jsonData)
        })
}