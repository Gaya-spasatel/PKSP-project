import "../auth_reg/Registration.css"
import React from "react";
import {Link} from "react-router-dom";
import {register, register_form_changed} from "../../store/actions";
import {useDispatch, useSelector} from "react-redux";
import {getInputRegistrationState} from "../../store/selectors";

export default function ContentAddPost(props) {

    const {name, text} = useSelector(getInputRegistrationState())
    const dispatch = useDispatch()

    const handleSubmit = React.useCallback((event) => {
        event.preventDefault()
        dispatch(register(login, password, avatar))
    }, [dispatch, login, password, avatar])

    const handleOnchange = React.useCallback((event) => {
        event.preventDefault()
        dispatch(register_form_changed(event.target.form[0].value, event.target.form[1].value, event.target.form[2].value))
    }, [dispatch])

    return (
        <div className="Registration">
            <Link to="/auth" className="RegText">Login</Link>
            <form onSubmit={handleSubmit}>
                <label className='RegElement'>
                    Name:
                    <input type="text" className="RegText" name="username" onChange={handleOnchange}/>
                </label>
                <label className='RegElement'>
                    Text:
                    <input type="password" className="RegText RegElement" name="password" onChange={handleOnchange}/>
                </label>
                <label className="RegElement">
                    Avatar:
                    <input type="url" className="RegText RegElement" onChange={handleOnchange} name="avatar"/>
                </label>
                <input type="submit" value="Add" className="RegButton RegText"/>
            </form>
        </div>
    );
}