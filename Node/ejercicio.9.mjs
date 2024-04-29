// The newsEvent object continuously emits three different events: newsEvent, breakingNews and error
// Attach event listeners for each event and log out their data.

const { EventEmitter } = require("node:events");

function createNewsFeed() {
    const emitter = new EventEmitter();

    // Listener para el evento "newsEvent"
    emitter.on("newsEvent", (news) => {
        console.log("Regular News:", news);
    });

    // Listener para el evento "breakingNews"
    emitter.on("breakingNews", (breakingNews) => {
        console.log("Breaking News:", breakingNews);
    });

    // Listener para el evento "error"
    emitter.on("error", (error) => {
        console.error("Error in news feed:", error.message);
        // Aquí podrías realizar acciones adicionales, como intentar reconectar o notificar al usuario.
    });


    setInterval(() => {
        emitter.emit("newsEvent", "News: A thing happened in a place.");
    }, 1000);

    setInterval(() => {
        emitter.emit("breakingNews", "Breaking news! A BIG thing happened.");
    }, 4000);

    setTimeout(() => {
        emitter.emit("error", new Error("News feed connection error"));
    }, 5000);

    return emitter;
    }

    const newsFeed = createNewsFeed();