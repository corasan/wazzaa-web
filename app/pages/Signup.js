import React, { Component } from 'react';

export default class Signup extends Component {
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
            <form action="/signup" method="POST">
                <input type="text" name="fname" value={this.state.fname} onChange={this.handleFname}/>
                <input type="text" name="lname" value={this.state.lname} onChange={this.handleLname}/>
                <input type="email" name="email" value={this.state.email} onChange={this.handleEmail}/>
                <input type="password" name="password" value={this.state.password} onChange={this.handlePassword}/>
                <button type="submit">Signup</button>
            </form>
        )
    }
}
