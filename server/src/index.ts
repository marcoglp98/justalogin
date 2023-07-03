const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
import mongoose from "mongoose";
import User from "./models/user.model";

const app = express();
mongoose.connect(
  "mongodb+srv://marcoglp98:pzCizLMIEHTnlD4L@cluster0.0ndbdcy.mongodb.net/justalogin"
);

app.use(cors());
app.use(express.json());

app.post("/api/register", async (req: any, res: any) => {
  console.log(req.body);
  try {
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    res.json({ status: "ok" });
  } catch (error) {
    res.json({ status: "error", error: "Duplicate email" });
  }
});

app.post("/api/login", async (req: any, res: any) => {
  console.log(req.body);

  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });

  if (user) {
    const token = jwt.sign(
      {
        name: req.body.name,
        email: req.body.email,
      },
      "secret"
    );

    return res.json({ status: "ok", user: token });
  } else {
    return res.json({ status: "error", user: false });
  }
});

app.listen(8000, () => console.log("Server started on 8000"));
