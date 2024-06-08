const url = "https://v2.jokeapi.dev/joke/Any?type=single";
let btn = document.querySelector("button")

async function getJoke() {
    try {
        let req = await axios.get(url)
        return (req.data.joke);
    } catch (e) {
        console.log(e);
        return "No Joke Found";
    }
};

btn.addEventListener("click", async function() {
    let result = await getJoke();
    let p = document.querySelector("#joke");
    p.innerText = `${result}`;
});