const express = require("express")
const cors = require("cors")
const app = express()
const port = 3000;
app.use(cors());

app.get("/",(req,res)=>{
    res.json("hello I'm live")
});







app.listen(port,()=>{
    console.log("youre runnin on port", port)
})