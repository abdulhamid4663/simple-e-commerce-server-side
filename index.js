const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5100;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Diyafah Server is RUNNING.");
})

app.listen(port, ()=> {
    console.log(`Diyafah Server is running on PORT: ${port}`)
})