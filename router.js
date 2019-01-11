const passport = require('passport');

require('./services/passport');
const {signUp, signIn} = require('./controllers/authentication');


const requireAuth = passport.authenticate('jwt', {session: false});
const requireSignIn = passport.authenticate('local', {session: false});

module.exports = function (app) {
    app.get('/', requireAuth, (req, res) => {
        res.send('hello');
    });
    app.post('/signin', requireSignIn, signIn);
    app.post('/signup', signUp);
}