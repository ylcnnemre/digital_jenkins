const express = require("express")

const app = express()


app.get("/", (req, res) => {

    res.send({
        msg: "selam hoşgeldin"
    })
})

app.get("/main", (req, res) => {
    res.send({
        msg: "mainurl"
    })
})

app.get("/naber", (req, res) => {

    res.send("iyidir sahip sen nasılsın")
})

app.get("/test",(req,res)=>{
    res.send("selam bebek mugo ben kelebek")
})


app.listen(5000, () => {
    console.log("server is running")
})