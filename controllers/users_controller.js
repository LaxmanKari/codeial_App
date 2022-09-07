//import user module
const User = require('../models/user'); 


module.exports.profile = function(req,res){
    if(req.cookies.user_id){
      User.findById(req.cookies.user_id,function(err,user){
        if(user){
          return res.render('user_profile',{
            title: "User Profile", 
            user: user
          })
        } else {
          //also users can alter cookies and send request to handle that
          //we are checking in the db
           return res.redirect('/users/sign-in');
        }
      }); 
      
      
    }
    else{
      //didn't have user in cookies means no user_info
   return res.redirect('/users/sign-in');
   }
}


// module.exports.post = function(req,res){
//     res.end('<h1> Post with image diplayed! </h1>');
// }


//render the sign up page
module.exports.signUp = function(req,res){
  return res.render('user_sign_up',{
    title: "Codeial | Sign Up"
  })
}

//render the sign in page
module.exports.signIn = function(req,res){
  return res.render('user_sign_in',{
    title: "Codeial | Sign In"
  })
}

//get the sign up data 
module.exports.create = function(req,res){
   if(req.body.password !=req.body.confirm_password){
      return res.redirect('back'); 
   } 

   User.findOne({email : req.body.email}, function(err,user){
     if(err){console.log('error in finding user in siging up'); return}

     if(!user){
         User.create(req.body, function(err,user){
            if(err){console.log('error in creating user while signing up'); return}
             
              return  res.redirect('/users/sign-in');  
          })
     }
     else{
      return res.redirect('back'); 
     }
   });
}

//sign in and create a session for the user
module.exports.createSession = function(req,res){
  //TODO later
   return res.redirect('/'); 
}