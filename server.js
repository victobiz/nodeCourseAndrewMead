const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

//set up port for heroku object that stores enviornment variables as key value pairs
//the process.env gets the PORT flag in the enviornment variables if the port variable does not
//exist it sets it to port 3000.
const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname + '/views/partials');

//key is view engine create a folder called views the default directory in express for views
app.set('view engine', 'hbs');
//variable that stores path to express directory (node-web server)

//use calls some middlewear
app.use(express.static(__dirname +'/public'));
app.use((req,res,next) =>{
var now = new Date().toString();
var log =(`${now}: ${req.method} ${req.url}`);

  console.log(log);
//  fs.appendFile('server.log', log + '\n');
  fs.appendFile('server.log', log + '\n', (err) => {
    if(err) {
      console.log('Unable to append to server.log')
    }
  });

  next();
});

// app.use((req,res, next) =>{
//   res.render('maintanance.hbs');
// });
hbs.registerHelper('getCurrentYear', () =>{
  return 'test';//new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
})
// app.get('/', (req, res) =>{
//   res.send('<h1>goodbye</h1>');
//
// });

app.get('/', (req, res) =>{

  res.send({
    name: 'chris',
    likes: ['money', 'hitler']
  });
});

app.get('/about', (req, res) => {
  //res.send('about Page')
  res.render('about.hbs', {
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
  });

});

app.get('/home', (req, res) =>{
  res.render('home.hbs', {
    welcomeMessage: 'hello buddy!',
    pageTitle: 'Home page',
    currentYear: new Date().getFullYear()
  })
});

app.get('/projects', (req, res) =>{
  res.render('projects.hbs', {
      pageTitle: 'Project Page',

  })
});

//create a route at /bad  respond using response.send send back josn with error message
//property then go to /bad make sure it shows up.
app.get('/bad' , (req, res) => {
  res.send({
    error: 'you fucked up'
  })
})

app.listen(port, () => {
console.log(`Sever is up on port ${port}`);
});
