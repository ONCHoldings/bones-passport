var passport = require('passport'),
    strategy = require('passport-local').Strategy;

server = servers.Passport.extend({
    key: 'local',
    strategy: strategy,
    verify: function(username, password, done) {
        var user = {id: username};
        return done(null, user);
    }
});
