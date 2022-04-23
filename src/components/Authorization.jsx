import "./Authorization.css"
import React from "react";
import {Link} from "react-router-dom";

class Authorization extends React.Component{
    constructor(props) {
        super(props);
        this.state = {username: '', password: ''}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({username: event.target.username, password: event.target.password});
    }

    handleSubmit(event){
        event.preventDefault();
    }

    render() {
        return(
            <div className="Authorization">
                <Link to="/reg" className="AuthText">Register</Link>
            <form onSubmit={this.handleSubmit}>
                <label className='AuthElement'>
                    Username:
                    <input type="text" value={this.state.username}  onChange={this.handleChange} className="AuthText"/>
                </label>
                <label className='AuthElement'>
                    Password:
                    <input type="password" value={this.state.password}  onChange={this.handleChange} className="AuthText AuthElement"/>
                </label>
                <input type="submit" value="Authorize" className="AuthButton AuthText"/>
            </form></div>
        );
    }
}

export default Authorization;