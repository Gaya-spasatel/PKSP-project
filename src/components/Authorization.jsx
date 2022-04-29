import "./Authorization.css"
import React from "react";
import {Link} from "react-router-dom";
import {login, login_form_changed} from "../store/actions";
import {useDispatch, useSelector} from "react-redux";
import {getInputAuthorizationState} from "../store/selectors";


export default function Authorization(props) {

    const {username, password} = useSelector(getInputAuthorizationState())
    const dispatch = useDispatch()

    const handleSubmit = React.useCallback(()=>{
        dispatch(login(username, password))
    }, [dispatch, username, password])

    const handleChange = React.useCallback((event)=>{
        event.preventDefault()
        dispatch(login_form_changed(event.target.form[0].value, event.target.form[1].value))
    }, [dispatch])

    return (
        <div className="Authorization">
            <Link to="/reg" className="AuthText">Register</Link>
            <form onSubmit={handleSubmit}>
                <label className='AuthElement'>
                    Username:
                    <input type="text" onChange={handleChange} className="AuthText"/>
                </label>
                <label className='AuthElement'>
                    Password:
                    <input type="password"  onChange={handleChange}
                           className="AuthText AuthElement"/>
                </label>
                <input type="submit" value="Authorize" className="AuthButton AuthText"/>
            </form>
        </div>
    );
}