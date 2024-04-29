// Create a getResults function that uses async and await. Inside of the function, call the luckyDraw function for each of the players: Tina, Jorge, Julien

// Log out the resolved value for each promise and handle any promise rejections.

function luckyDraw(player) {
    return new Promise((resolve, reject) => {
        const win = Boolean(Math.round(Math.random()));

        process.nextTick(() => {
        if (win) {
            resolve(`${player} won a prize in the draw!`);
        } else {
            reject(new Error(`${player} lost the draw.`));
        }
        });
    });
}

const players =  ["Tina", "Jorge", "Julien"];

async function getResults(){
    try {
        const info = await Promise.all(players.map(async player => {
            try {
                const result = await luckyDraw(player);
                console.log(result); 
                return result;
            } catch (error) {
                console.error(error.message); 
                throw error;
            }
        }));
        console.log("All draws completed.");
        return info;
    } catch (error) {
        console.error("Error in promise chain:", error);
        throw error;
    }
}
getResults()