const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config();

const app = express();

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI

const mongoDB = async()=>{
    await mongoose.connect(MONGO_URI)
    .then(()=>{
        console.log("connected to mongoDB")
    })
    .catch((error)=>{
        console.log("unable to connect to mongoDB", error)
    })
}

mongoDB();

app.post('/login', async(req, res)=>{
    try {
        const postLogin = new Login(req.body);
        await postLogin.save();
        res.status(201).json(postLogin);
        if(!Email) return res.status(400).json({message:"Email cannot be empty"});
        if(!Password) return res.status(400).json({message:"Password cannot be empty"});
    } catch (error) {
        res.status(400).json({error:error.message})
    }
});

app.get('/login', async(req,res)=>{
    const getLogin = await Login.find();
    res.status(200).json(getLogin);
})


app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
});

