const passport = require('passport');
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const crypto = require('crypto');
const User = require('../models/user');

//tell passport to use new strategy for google login
passport.use(new googleStrategy({
       clientID: "776754963404-lov9itkbthm7de1b8up3q3cech9q1amv.apps.googleusercontent.com",
       clientSecret: "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",
       callbackURL: "http://localhost:8000/users/auth/google/callback"
    },

    function(accessToken, refreshToken, profile,done){
        User.findOne({email: profile.emails[0].value}).exec(function(err,user){
            if(err){console.log('error in google strategy-passport', err);return;}
            console.log("accessToken : ", accessToken, "RefreshToken : ", refreshToken);
            console.log(profile); 

            if(user){
                //if found set this user as req.user
                return done(null, user); 
            }else{
                // if not found, create the set it as req.user(means sign-in)
                User.create({
                    name: profile.displayName, 
                    email: profile.emails[0].value, 
                    password: crypto.randomBytes(20).toString('hex')
                },function(err,user){
                   if(err){console.log('error in creating user google strategy-passport', err); return;}

                   return done(null, user);
                });
            }
        })
    }


)); 

module.exports = passport; 