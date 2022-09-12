//reference that module to use posts model 
const Post = require('../models/post');

module.exports.home = function(req,res){

  // //try to receive cookie data and print it here
  // console.log(req.cookies);

  // //change the cookie data and you can see in the browser
  // res.cookie('user_id', 25);
  
 
  // Post.find({}, function(err,posts){
  //   return res.render('home', {
  //      title: "Codeial | Home", 
  //      posts: posts
  //   })
  // })
   
  //populate the user of each post 
  Post.find({})
  .populate('user')
  .populate({
    path: 'comments', 
    populate:{
      path: 'user'
    }
  })
  .exec(function(err,posts){
     return res.render('home', {
       title: "Codeial | Home", 
       posts: posts
     });
  })
}
//.home => action Name 


