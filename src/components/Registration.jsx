import "./Registration.css"
import React from "react";
import {Link} from "react-router-dom";
import {register} from "../store/actions";
import {connect, useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {getInputRegistrationState} from "../store/selectors";


// class Registration extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {username: '', password: '', avatar: ''}
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//
//     handleChange(event){
//         this.setState({username: event.target.username, password: event.target.password, avatar: event.target.avatar});
//     }
//
//     handleSubmit(event){
//         console.log('submit form');
//         event.preventDefault();
//         const {username, password, avatar} = this.state;
//         this.props.onSubmit(username, password, avatar);
//     }
//
//     render() {
//         return(
//             <div className="Registration">
//                 <Link to="/auth" className="RegText">Login</Link>
//                 <form onSubmit={this.handleSubmit}>
//                     <label className='RegElement'>
//                         Username:
//                         <input type="text" value={this.state.username}  onChange={this.handleChange} className="RegText"/>
//                     </label>
//                     <label className='RegElement'>
//                         Password:
//                         <input type="password" value={this.state.password}  onChange={this.handleChange} className="RegText RegElement"/>
//                     </label>
//                     <label className="RegElement">
//                         Avatar:
//                         <input type="url" value={this.state.avatar}  onChange={this.handleChange} className="RegText RegElement"/>
//                     </label>
//                     <input type="submit" value="Register" className="RegButton RegText"/>
//                 </form></div>
//         );
//     }
// }

export default function Registration(props){

    const {login, password, avatar} = useSelector(getInputRegistrationState())
    const dispatch = useDispatch()

    const handleSubmit = React.useCallback(()=>{
        alert('callback')
        dispatch(register(login, password, avatar))
    }, [dispatch, login, password, avatar])

        return(
            <div className="Registration">
                <Link to="/auth" className="RegText">Login</Link>
                <form onSubmit={handleSubmit}>
                    <label className='RegElement'>
                        Username:
                        <input type="text" className="RegText" name="username"/>
                    </label>
                    <label className='RegElement'>
                        Password:
                        <input type="password" className="RegText RegElement" name="password"/>
                    </label>
                    <label className="RegElement">
                        Avatar:
                        <input type="url" className="RegText RegElement"/>
                    </label>
                    <input type="submit" value="Register" className="RegButton RegText" name="avatar"/>
                </form></div>
        );
}
// const mapDispatchToProps = dispatch => bindActionCreators({
//     register,
// }, dispatch);

// export default connect(null, mapDispatchToProps)(Registration);