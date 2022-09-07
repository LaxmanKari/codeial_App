const express = require('express'); 
const cookieParser = require('cookie-parser');
const app = express(); 
const port = 8000; 
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

//used for session cookie 
const session = require('express-session'); 
// passport-local-strategy
const passport = require('passport'); 
const passportLocal = require('./config/passport-local-strategy'); 
app.use(express.urlencoded()); 

app.use(cookieParser()); 

//include assests (app will be looking at this directory for assests)
app.use(express.static('./assests')); 

app.use(expressLayouts);

//extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true); 
app.set('layout extractScripts', true);

//use express router 
app.use('/', require('./routes')); 

//setting up view engine 
app.set('view engine', 'ejs'); 
app.set('views', './views'); 

app.use(session({
   name: 'codeial',
   //TODO change the secret before deploying in the production mode
   secret: 'blahsomething', 
   saveUninitialized: false, 
   resave: false, 
   cookie:{
      maxAge: (1000*60*100)
   }
})); 

app.use(passport.initialize()); 
app.use(passport.session()); 


app.listen(port, function(err){
   if(err){
      //console.log('Error',err); 
      //above line can be written this way also (interpolation)
      console.log(`Error in running the server: ${err}`);
   }  

   console.log(`Server is running on port: ${port}`); 
});