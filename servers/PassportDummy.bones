var passport = require('passport'),
    strategy = require('passport-dummy').Strategy;

server = servers.Passport.extend({
    key: 'dummy',
    strategy: strategy,
    verify: function(done, user) {
        if(!user)
            user = {
                id: 'dummy'
            }
        return done(null, user);
    }
});
