require('dotenv').config();

const pgPromise = require('pg-promise');

const dbConfig = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
};

const db = pgPromise()(dbConfig);

const setupDB = async () => {
    await db.none(`
        DROP TABLE IF EXISTS planets;

        CREATE TABLE planets (
            id SERIAL NOT NULL PRIMARY KEY,
            name TEXT  NOT NULL,
            image TEXT
        );

        DROP TABLE IF EXITS users;

        CREATE TABLE users (
            id SERIAL NOT NULL PRIMARY KEY,
            username TEXT NOT NULL, 
            password TEXT NOT NULL, 
            token TEXT
        )
    `);

    await db.none(`INSERT INTO planets (name) VALUES ("Tierra")`);
    await db.none(`INSERT INTO planets (name) VALUES ("Marte")`);
    await db.none(`INSERT INTO users (username, password) VALUES ("dummy", "dummy")`)

    const planets = await db.many("SELECT * FROM planets;")
    console.log(planets);
}
setupDB()

export {db};