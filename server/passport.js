const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

const { secret } = require('./keys');

const UserModel = require('./models/user');

passport.use(new LocalStrategy((username, saltedPass, done) => {
  return UserModel.findOne({username, saltedPass: saltedPass}, (error, user) => {
    if (error) { return done(error); }
    if (!user) { return done(null, false); }

    console.log('test', user);

    return done(null, user, { message: 'successful login' });
  });
}));

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: secret,
  },
  (jwtPayload, done) => {
    console.log('herro', jwtPayload);

    return done(null, jwtPayload);
  }
));