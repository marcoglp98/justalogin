const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.post("/api/register", (req: any, res: any) => {
  res.json({ status: "ok" });
});

app.listen(8000, console.log("Server started on 8000"));
