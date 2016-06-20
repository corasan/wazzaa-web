var request = require('request');

module.exports = function(data) {
    request.post('http://ec2-54-173-195-173.compute-1.amazonaws.com:3000/v1/users').form({
        first_name: data.fname,
        last_name: data.lname,
        name: `${data.fname} ${data.lname}`,
        email: data.email,
        password: data.password
    });
}
