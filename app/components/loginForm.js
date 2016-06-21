import React, { Component } from 'react';

export default class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleEmail = (e) => {
        this.setState({email: e.target.value});
    }
    handlePassword = (e) => {
        this.setState({password: e.target.value});
    }

    render() {
        return(
            <div id="login-box">
                <p id="panel-title">Login</p>
                <form method="POST" action="/login">
                    <div id="login-email">
                        <label>Email</label>
                        <input type="email" id="login-email-input" name="email" value={this.state.email} onChange={this.handleEmail}/>
                    </div>
                    <div id="login-password">
                        <label>Password</label>
                        <input type="password" id="login-pass-input" name="password" value={this.state.password} onChange={this.handlePassword}/>
                    </div>
                    <button id="login-btn" type="submit">Login</button>
                </form>
            </div>
        )
    }
}
