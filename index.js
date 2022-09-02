const express = require('express'); 
const app = express(); 
const port = 8000; 
const expressLayouts = require('express-ejs-layouts');

//include assests (app will be looking at this directory for assests)
app.use(express.static('./assests')); 

app.use(expressLayouts);

//extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true); 
app.set('layout extractScript', true);

//use express router 
app.use('/', require('./routes')); 

//setting up view engine 
app.set('view engine', 'ejs'); 
app.set('views', './views'); 


app.listen(port, function(err){
   if(err){
      //console.log('Error',err); 
      //above line can be written this way also (interpolation)
      console.log(`Error in running the server: ${err}`);
   }  

   console.log(`Server is running on port: ${port}`); 
});