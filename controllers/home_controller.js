module.exports.home = function(req,res){

  //try to receive cookie data and print it here
  console.log(req.cookies);

  //change the cookie data and you can see in the browser
  res.cookie('user_id', 25);
  return  res.render('home', {
     title : "Home 1"
  });
}
//.home => action Name 


