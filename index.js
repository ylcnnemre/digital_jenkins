const express = require("express")
const mongoose = require("mongoose")
const { testModel } = require("./models/TestModel")
const app = express()


const connectDb = () => {
    mongoose.connect("mongodb://mongo_container/testapp").then(val => {
        console.log("connection başarılı")
    }).catch(err => {
        console.log("bağlantı başarısız")
    })
}


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
            age: Math.random.toString()
        })
        res.send({
            msg: "kayıt başarılı"
        })
    }
    catch (err) {
        res.send({
            msg: err.message
        })
    }

})


app.listen(5000, () => {
    connectDb()
    console.log("server is running")
})