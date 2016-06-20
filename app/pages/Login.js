import React, { Component } from 'react';
import LoginForm from '../components/loginForm';

export default class Login extends Component {
    render() {
        return (
            <div>
                <h1>Login</h1>
                <LoginForm/>
            </div>
        )
    }
}
