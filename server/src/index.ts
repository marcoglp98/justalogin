const express = require ("express");
const app = express();
const cors = require("cors")

app.use (cors())
app.post("/api/register", (req:any, res:any) => {
    res.json({status: "ok"})
})

app.listen(3002, console.log("Server started on 3002"))