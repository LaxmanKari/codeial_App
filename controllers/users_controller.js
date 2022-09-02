module.exports.profile = function(req,res){
    return res.render('user_profile',{
      "title": "User profile"
    })
}


module.exports.post = function(req,res){
    res.end('<h1> Post with image diplayed! </h1>');
}