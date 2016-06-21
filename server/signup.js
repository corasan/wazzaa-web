var request = require('request');

module.exports = function(data) {
    request.post('http://api.wazzaa.com/v1/users').form({
        first_name: data.fname,
        last_name: data.lname,
        name: `${data.fname} ${data.lname}`,
        email: data.email,
        password: data.password
    });
}
