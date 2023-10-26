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
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const TestModel_1 = require("./models/TestModel");
const app = (0, express_1.default)();
const connectDb = () => {
    mongoose_1.default.connect("mongodb://mongo_container/testapp").then(val => {
        console.log("connection başarılı");
    }).catch(err => {
        console.log("bağlantı başarısız");
    });
};
app.get("/selam", (req, res) => {
    res.send({
        msg: "selam"
    });
});
app.get("/test", (req, res) => {
    res.send(new Date().toLocaleString());
});
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield TestModel_1.testModel.find();
    res.send({
        data: data
    });
}));
app.get("/save", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield TestModel_1.testModel.create({
            name: "emre" + Math.random().toString(),
            age: Math.random().toString()
        });
        res.send({
            msg: "kayıt başarılı"
        });
    }
    catch (err) {
        res.send({
            msg: err.message
        });
    }
}));
app.listen(5000, () => {
    connectDb();
    console.log("server is running");
});
