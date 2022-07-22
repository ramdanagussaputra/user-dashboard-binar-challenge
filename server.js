const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');
const mongoose = require('mongoose');

// CONNECT MONGODB
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

(async () => {
    const con = await mongoose.connect(DB);

    console.log(`MongoDB connected on: ${con.connection.host}`);
})();

// START SERVER
const port = process.env.PORT;
app.listen(port, () => console.log(`Server running on: http://localhost:${port}`));
