const express = require("express");
const cors = require("cors")
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-tizwj.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors())
app.use(express.json());
app.use(routes);

app.listen(3333);