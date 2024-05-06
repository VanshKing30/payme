const express = require('express');
const app = express();

const PORT = 4000 || process.env.PORT;

app.get("/" , (req , res)=>{
    res.send('<h1>Hello Babies</h1>');
});

app.listen(PORT , ()=>{
    console.log(`Server is active on port : ${PORT}`);
});

