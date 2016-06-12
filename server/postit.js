var request = require('request');

module.exports = function(fname) {
    request.post('http://localhost:3000/users', form.({first_name: fname}));
}
