const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT || 5000 ;

const app = express();
app.use(cors());

//  travelBD   uTlDEXfvZTUQcmpw
// database connection
const dbURL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.wbuvl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
mongoose.connect(dbURL, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useCreateIndex:true,
    // useFindAndModify:false
})
.then(()=>console.log("database connection successful"))
.catch((err)=> console.log(err));

console.log( dbURL);
// request parsers
app.use(express.json());
app.use(express.urlencoded({extended: true})); // html form er data parse korte use korbo


// middleware
const middleware = (req, res, next) =>{
    console.log('middleware');
    next();
};


// router setup
app.get('/', (req, res)=>{
    res.send('hello world')
});

// middleware ta akhone call korlam bec user login na hole login route e dhukte parbe na.
app.get('/login', middleware, (req, res)=>{
    res.send('hello login page')
});


// Error Handling


app.listen(port, ()=>{
    console.log(`connecting at ${port}`)
})
