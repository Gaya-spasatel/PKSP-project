import "../auth_reg/Registration.css"
import React from "react";
import {add_post, add_post_form_changed} from "../../store/actions";
import {useDispatch, useSelector} from "react-redux";
import {getAuthorization, getInputPost} from "../../store/selectors";

export default function ContentAddPost(props) {

    const {name, text} = useSelector(getInputPost())
    const dispatch = useDispatch()
    const token = useSelector(getAuthorization()).token;

    const handleSubmit = React.useCallback((event) => {
        event.preventDefault()
        dispatch(add_post(token, name, text))
    }, [dispatch, name, text, token])

    const handleOnchange = React.useCallback((event) => {
        event.preventDefault()
        console.log(name);
        console.log(text);
        dispatch(add_post_form_changed(event.target.form[0].value, event.target.form[1].value))
    }, [dispatch, name, text])

    return (
        <div className="Registration">
            <form onSubmit={handleSubmit}>
                <label className='RegElement'>
                    Name:
                    <input type="text" className="RegText" name="username" onChange={handleOnchange}/>
                </label>
                <label className='RegElement'>
                    Text:
                    <textarea className={"RegText"} name={"text"} onChange={handleOnchange}/>
                </label>
                <input type="submit" value="Add" className="RegButton RegText"/>
            </form>
        </div>
    );
}