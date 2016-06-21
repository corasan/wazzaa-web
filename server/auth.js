var request = require('request-promise');

module.exports = function(email, pass) {
    var options = {
        method: 'GET',
        uri: 'http://api.wazzaa.com/v1/auth/wazzaa',
        form: {
            'username': email,
            'password': pass
        },
        headers: {'WWW-Authenticate': 'Basic realm="Wazzaa"'},
        json: true
    }
    request(options).then(function(user) {
        console.log(user);
    });
}
