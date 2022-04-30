import React from "react";
import {exit} from "../../store/actions";
import {useDispatch, useSelector} from "react-redux";
import {getAuthorization} from "../../store/selectors";

export default function ExitButton(props){
    const dispatch = useDispatch()
    const token = useSelector(getAuthorization()).token;
    const handleSubmit = React.useCallback((event) => {
        event.preventDefault()
        dispatch(exit(token))
    }, [dispatch, token])
    return (
        <button onClick={handleSubmit} className={"AuthButton"}>Exit</button>
    );
}