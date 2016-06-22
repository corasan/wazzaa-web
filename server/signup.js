var request = require('request');
var transform = require('string_transformer');

module.exports = function(data) {
    request.post('http://api.wazzaa.com/v1/users').form({
        first_name: data.first_name,
        last_name: data.last_name,
        name: `${data.fname} ${data.lname}`,
        email: data.email,
        password: data.password,
        uid: transform(`${data.fname} ${data.lname}`)
    });
}
