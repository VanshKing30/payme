const express = require('express');
const app = express();

const userRoute = require('./routes/user');

require("dotenv").config;
app.use(express.json());


app.use("/api/v1" , userRoute);


const PORT = 4000 || process.env.PORT;

app.get("/" , (req , res)=>{
    res.send('<h1>Hello Babies</h1>');
});

app.listen(PORT , ()=>{
    console.log(`Server is active on port : ${PORT}`);
});

const connectDb = require('./config/connect');
connectDb();

