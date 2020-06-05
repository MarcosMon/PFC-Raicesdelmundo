"use strict";
// import passport from "passport";
// import passportLocal from "passport-local";
// const LocalStrategy = passportLocal.Strategy;
// passport.use(new LocalStrategy({ usernameField: "username", passwordField: "password", passReqToCallBack: true }, (req, username, password, done) => {
//     User.findOne({ username: username.toLowerCase() }, (err, user: any) => {
//         if (err) { return done(err); }
//         if (!user) {
//             return done(undefined, false, { message: `Email ${username} not found.` });
//         }
