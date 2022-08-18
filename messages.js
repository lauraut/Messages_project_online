//console.log("hola");
const messages = {
    first: ["Life's great journeys are", "Innovation distinguishes between", "Your time is limited, so", "Doing the best at this moment", "When you undervalue what you do,", "Don't let the noise of others' opinions" ],
    second: ["between a leader and a follower.", "don't waste it living someone else's life.", "drown out your own inner voice.", "the world will undervalue who you are.", "puts you in the best place for the next moment.", "Turn your wounds into wisdom."],
    author: ["Steve Trabajos", "Opera Winnie", "Materia"]
};

let m1 = messages.first[Math.floor(Math.random() * (messages.first.length - 1))];
let m2 = messages.second[Math.floor(Math.random() * (messages.second.length - 1))];
let signature = messages.author[Math.floor(Math.random() * (messages.author.length - 1))];

const messageBuilder = () => {
console.log(m1, m2, signature);
};

messageBuilder();