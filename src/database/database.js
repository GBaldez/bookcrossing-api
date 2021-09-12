const mongoose = require("mongoose");
require("dotenv").config();

const connectToDb = () => {
    const dbUser = process.env.DB_USER;
    const dbPassword = process.env.DB_PASSWORD;
    const dbName = process.env.DB_NAME;
    const dbChar = process.env.DB_CHAR;
    mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.${dbChar}.mongodb.net/${dbName}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
};

module.exports = connectToDb;