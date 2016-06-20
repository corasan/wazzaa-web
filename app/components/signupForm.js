import React, { Component } from 'react';

export default class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            email: '',
            password: ''
        }
    }

    handleFname = (e) => {
        this.setState({fname: e.target.value});
    }
    handleLname = (e) => {
        this.setState({lname: e.target.value});
    }
    handleEmail = (e) => {
        this.setState({email: e.target.value});
    }
    handlePassword = (e) => {
        this.setState({password: e.target.value});
    }
    render() {
        return(
            <div id="signup-box">
                <form action="/signup" method="POST">
                    <div id="first-name">
                        <label>First name</label>
                        <input id="input-fname" type="text" name="fname" value={this.state.fname} onChange={this.handleFname}/>
                    </div>
                    <div id="last-name">
                        <label>Last name</label>
                        <input id="input-lname" type="text" name="lname" value={this.state.lname} onChange={this.handleLname}/>
                    </div>
                    <div id="email">
                        <label>Email</label>
                        <input id="input-email" type="email" name="email" value={this.state.email} onChange={this.handleEmail}/>
                    </div>
                    <div id="password">
                        <label>Password</label>
                        <input id="input-passw" type="password" name="password" value={this.state.password} onChange={this.handlePassword}/>
                    </div>
                    <button id="signup-btn" type="submit">Signup</button>
                </form>
            </div>
        )
    }
}
