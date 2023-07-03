"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const mongoose_1 = __importDefault(require("mongoose"));
const user_model_1 = __importDefault(require("./models/user.model"));
const app = express();
mongoose_1.default.connect("mongodb+srv://marcoglp98:pzCizLMIEHTnlD4L@cluster0.0ndbdcy.mongodb.net/justalogin");
app.use(cors());
app.use(express.json());
app.post("/api/register", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    try {
        yield user_model_1.default.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });
        res.json({ status: "ok" });
    }
    catch (error) {
        res.json({ status: "error", error: "Duplicate email" });
    }
}));
app.post("/api/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const user = yield user_model_1.default.findOne({
        email: req.body.email,
        password: req.body.password,
    });
    if (user) {
        const token = jwt.sign({
            name: req.body.name,
            email: req.body.email,
        }, "secret");
        return res.json({ status: "ok", user: token });
    }
    else {
        return res.json({ status: "error", user: false });
    }
}));
app.listen(8000, () => console.log("Server started on 8000"));
