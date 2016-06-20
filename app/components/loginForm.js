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
            <div>
                <form method="POST" action="/login">
                    <input type="email" name="email" value={this.state.email} onChange={this.handleEmail}/>
                    <input type="password" name="password" value={this.state.password} onChange={this.handlePassword}/>
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}
