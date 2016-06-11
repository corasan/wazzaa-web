import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    render() {
        return (
            <div>
                <form method="POST" action="/">
                    <input type="text" name="first_name" placeholder="First name"></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
