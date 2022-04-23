import "./Registration.css"
import React from "react";
import {Link} from "react-router-dom";
import {register} from "../store/actions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";


class Registration extends React.Component{
    constructor(props) {
        super(props);
        this.state = {username: '', password: '', avatar: ''}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({username: event.target.username, password: event.target.password, avatar: event.target.avatar});
    }

    handleSubmit(event){
        alert('submit form');
        event.preventDefault();
        const {username, password, avatar} = this.state;
        this.props.onSubmit(username, password, avatar);
    }

    render() {
        return(
            <div className="Registration">
                <Link to="/auth" className="RegText">Login</Link>
                <form onSubmit={this.handleSubmit}>
                    <label className='RegElement'>
                        Username:
                        <input type="text" value={this.state.username}  onChange={this.handleChange} className="RegText"/>
                    </label>
                    <label className='RegElement'>
                        Password:
                        <input type="password" value={this.state.password}  onChange={this.handleChange} className="RegText RegElement"/>
                    </label>
                    <label className="RegElement">
                        Avatar:
                        <input type="url" value={this.state.avatar}  onChange={this.handleChange} className="RegText RegElement"/>
                    </label>
                    <input type="submit" value="Register" className="RegButton RegText"/>
                </form></div>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    register,
}, dispatch);

export default connect(null, mapDispatchToProps)(Registration);