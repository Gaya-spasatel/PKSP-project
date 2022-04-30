import "./Home.css"
import {useSelector} from "react-redux";
import {getAuthorization} from "../store/selectors";
import {Navigate} from "react-router-dom";
import React from "react";

function Home(props){
    if (!useSelector(getAuthorization()).is_authorized) {
        return (<Navigate to={'/auth'}/>);
    }
    return(
        <div className="Home">
            Приложение "MyApp" к вашим услугам!
        </div>
    );
}

export default Home;