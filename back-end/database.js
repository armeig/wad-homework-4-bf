 // database.js
 const Pool = require('pg').Pool;
 const pool = new Pool({
     user: "postgres",
     password: "wadbf",
     database: "WAD_BF",
     host: "localhost",
     port: "5433"
 });

const execute = async (query) => {
    try {
        const client = await pool.connect(); // Get a connection from the pool
        const result = await client.query(query); // Execute the query
        client.release(); // Release the connection back to the pool
        return result; // Return the query result
    } catch (error) {
        console.error("Error executing query:", error.stack);
        throw error; // Throw error to handle it in the calling code
    }
};

/* 
gen_random_uuid() A system function to generate a random Universally Unique IDentifier (UUID)
An example of generated uuid:  32165102-4866-4d2d-b90c-7a2fddbb6bc8
*/

const createTblQuery = `
    CREATE TABLE IF NOT EXISTS "users" (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        email VARCHAR(200) NOT NULL UNIQUE,
        password VARCHAR(200) NOT NULL 
    );`;
const createPostsTblQuery = `
    CREATE TABLE IF NOT EXISTS "posttable" (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        email VARCHAR(200) NOT NULL,
        body VARCHAR(1000) NOT NULL,
        date DATE NOT NULL DEFAULT CURRENT_DATE
    );`;

(async () => {
    try {
        // Create tables
        await execute(createTblQuery);
        console.log('Table "users" is created');

        await execute(createPostsTblQuery);
        console.log('Table "posttable" is created');

        // Check if posttable is empty
        const countResult = await execute('SELECT COUNT(*) AS count FROM "posttable";');
        const rowCount = parseInt(countResult.rows[0].count, 10); // Convert count to integer
        console.log("Row count in posttable:", rowCount);

        if (rowCount === 0) {
            const insertMockPostsQuery = `
                INSERT INTO "posttable" (email, body)
                VALUES
                ('user1@example.com', 'This is the first post.'),
                ('user2@example.com', 'This is the second post.'),
                ('user3@example.com', 'Here comes the third post!'),
                ('user4@example.com', 'This is the fourth post in the table.'),
                ('user5@example.com', 'Another exciting fifth post.'),
                ('user6@example.com', 'Post number six reporting for duty.'),
                ('user7@example.com', 'Lucky number seven is here.'),
                ('user8@example.com', 'This is the eighth entry.'),
                ('user9@example.com', 'Almost there! Ninth post added.'),
                ('user10@example.com', 'Finally, the tenth post makes its way!');
            `;
            await execute(insertMockPostsQuery);
            console.log('10 mock posts successfully inserted into "posttable".');
        } else {
            console.log("Table already contains posts. No insertion needed.");
        }
    } catch (error) {
        console.error("Error during table creation or data insertion:", error);
    }
})();
 
 module.exports = pool;
