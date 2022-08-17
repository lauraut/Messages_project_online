//console.log("hola");
var messages = {
    first: ["Life's great journeys are ", "Innovation distinguishes between ", "Your time is limited, so ", "Doing the best at this moment ", "When you undervalue what you do, ", "Don't let the noise of others' opinions" ],
    second: ["between a leader and a follower.", "don't waste it living someone else's life.", "drown out your own inner voice.", "the world will undervalue who you are.", "puts you in the best place for the next moment.", "Turn your wounds into wisdom."],
    author: ["Steve Trabajos", "Opera Winnie", "Materia"]
};
console.log(messages.first[Math.floor(Math.random() * (messages.first.length - 1))]);
