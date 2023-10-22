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


app.listen(5000,()=>{
    console.log("server is running")
})