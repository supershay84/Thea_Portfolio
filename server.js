if(process.env.NODE_ENV === 'development'){
    require('dotenv').config()
} // <== Herokuheroku
//___________________
//DEPENDECIES
//___________________
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const app = express ();
const db = mongoose.connection;
const Project = require("./models/projects");
//___________________
//PORT
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000;

//___________________
//DATABASE
//___________________
// How to connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI

// Connect to Mongo
mongoose.connect(MONGODB_URI ,  { useNewUrlParser: true, useUnifiedTopology: true });

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

// open the connection to mongo
db.on('open' , ()=>{});

//___________________
//MIDDLEWARE
//___________________

//use public folder for static assets
app.use(express.static('public'));

// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project

//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form


//___________________
// ROUTES
//___________________
//localhost:3000 
app.get('/' , (req, res) => {
  res.send('Hello World!');
});

//____________________
//INDEX
//____________________

app.get("/projects", (req,res) => {
    Project.find({}, (err, allProjects) => {
        if(!err){
            console.log(allProjects);
            res.render("Index", {
                projects: allProjects
            })
        } else {
            res.send(err)
        }
    })
});

//____________________
//NEW
//____________________

app.get('/projects/new', (req,res) => {
    res.render('New')
});

//____________________
//DELETE
//____________________

app.delete('/projects/:id', (req,res) => {
    Project.findByIdAndRemove(req.params.id, (err, foundProject) => {
        if(!err){
            res.redirect('/projects')
        } else {
            res.send(err)
        }
    })
});

//____________________
//UPDATE
//____________________

app.put('/projects/:id', (req,res) => {
    Project.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err,updatedProject) => {
        if(!err){
            res.redirect('/projects')
        } else {
            res.send(err)
        }
    })
});

//____________________
//CREATE
//____________________

app.post('/projects', (req,res) => {
    Project.create(req.body, (err, newProject) => {
        if(!err){
            res.redirect('/projects')
        } else {
            res.send(err)
        }
    })
});

//____________________
//EDIT
//____________________

//____________________
//SHOW
//____________________

app.get('/project/:id', (req,res) => {
    Project.findById(req.params.id, (err, foundProject) => {
        if(!err){
            res.render("Show", {
                project: foundProject
            })
        } else {
            res.send(err)
        }
    })
});

//___________________
//LISTENER
//___________________
app.listen(PORT, () => console.log( 'Listening on port:', PORT));

