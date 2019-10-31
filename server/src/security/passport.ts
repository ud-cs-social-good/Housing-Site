// Importing Passport, strategies, and config
const passport = require('passport'),
    User = require('../model/userModel'),
    config = require('../config/config'),
    JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt,
    mongoose = require('mongoose');

// set JWT Options as authentication for login
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.secret
};

// Setting up JWT login strategy
const JWTLogin = new JwtStrategy(jwtOptions, function(payload: any, done: any) {
    let id = new mongoose.Types.ObjectId(payload._id);
    User.findbyId(id, function(err: any, user: any) {
        if (err) { return done(err, false); }
        if (user) {
            done(null, user);
        } else {
            done(null, false);
        }
    });
});
passport.use(JWTLogin);
exports.requireAuth = passport.authenticate('jwt', { session: false });