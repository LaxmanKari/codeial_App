//reference that module to use posts model 
const Post = require('../models/post');
const User = require('../models/user');

module.exports.home = async function(req,res){

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
  // Post.find({})
  // .populate('user')
  // .populate({
  //   path: 'comments', 
  //   populate:{
  //     path: 'user'
  //   }
  // })
  // .exec(function(err,posts){

  //   User.find({}, function(err,users){
  //     return res.render('home', {
  //       title: "Codeial | Home", 
  //       posts: posts,
  //       all_users: users
  //     });
  //   });

     
  // }) 

  // cleaner code for populating the user of each post line (21-38) 
  try{
      //populate the user of each post 
      let posts = await Post.find({})
      .populate('user')
      .populate({
          path: 'comments', 
          populate:{
          path: 'user'
         }
       }); 

       let users = await User.find({});
            
       return res.render('home', {
           title: "Codeial | Home", 
           posts: posts,
           all_users: users
       });
          
  } catch(err){

  }

}


//.home => action Name 


