const express = require('express')
const fs = require("fs")
const mongoose = require("mongoose")
const router = require('./routers/export-router')
const bodyParser = require("body-parser");
const product = require("./routes/product.route"); // Imports routes for the products
const cors = require('cors')
const app = express()
app.use(express.json())

const port = 3000

let dev_db_url =
  "mongodb+srv://pbl6asoad:1q2w3e4r@cluster0-6e4bh.mongodb.net/todos";
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));


app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/products", product);

app.use('/users', router.userRouter)

app.listen(port, () => console.log(`Example app listening on port port!`))