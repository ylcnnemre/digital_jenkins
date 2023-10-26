import express from "express"
import mongoose from "mongoose"
import { testModel } from "./models/TestModel"

const app = express()

const connectDb = () => {
    mongoose.connect("mongodb://mongo_container/testapp").then(val => {
        console.log("connection başarılı")
    }).catch(err => {
        console.log("bağlantı başarısız")
    })
}

app.get("/selam", (req, res) => {

    res.send({
        msg: "selam"
    })
})



app.get("/", async (req, res) => {
    const data = await testModel.find()
    res.send({
        data: data
    })
})

app.get("/save", async (req, res) => {
    try {
        await testModel.create({
            name: "emre" + Math.random().toString(),
            age: Math.random().toString()
        })
        res.send({
            msg: "kayıt başarılı"
        })
    }
    catch (err: any) {
        res.send({
            msg: err.message
        })
    }

})


app.listen(5000, () => {
    connectDb()
    console.log("server is running")
})