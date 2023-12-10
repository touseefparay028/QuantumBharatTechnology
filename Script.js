
        const jokes = [
    "Why a man tries to drink water from a tap wwithout opening it. Because he was drunk",
    "Parallel lines have so much in common. It’s a shame they’ll never meet.",
    "Why don't scientists trust atoms? Because they make up everything!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Why don't skeletons fight each other? They don't have the guts."
];

function generateJoke() {
    const jokeDisplay = document.getElementById("jokeDisplay");
    const randomIndex = Math.floor(Math.random() * jokes.length);
    jokeDisplay.textContent = jokes[randomIndex];
}

    