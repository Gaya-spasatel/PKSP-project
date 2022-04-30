import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import ContentPosts from "./components/content/ContentPosts";
import ContentPost from "./components/content/ContentPost";
import Authorization from "./components/auth_reg/Authorization";
import Registration from "./components/auth_reg/Registration";
import {register, login} from "./store/actions";
import {connect, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import ContentPostsMy from "./components/content/ContentPostsMy";
import ContentAddPost from "./components/content/ContentAddPost";
import {isAuthenticated} from "./store/selectors";

const post_first = {
    id: 0,
    date: new Date(),
    name: "First post",
    text: "Повседневная практика показывает, что разбавленное изрядной долей эмпатии, рациональное мышление напрямую зависит от форм воздействия. Имеется спорная точка зрения, гласящая примерно следующее: предприниматели в сети интернет освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, подвергнуты целой серии независимых исследований. Безусловно, социально-экономическое развитие не даёт нам иного выбора, кроме определения глубокомысленных рассуждений.",
    author: {
        name: "Author author",
        avatarUrl: "https://placekitten.com/g/64/64"
    },
}

const post_second = {
    id: 1,
    date: new Date(),
    name: "Second post",
    text: "Повседневная практика показывает, что разбавленное изрядной долей эмпатии, рациональное мышление напрямую зависит от форм воздействия. Имеется спорная точка зрения, гласящая примерно следующее: предприниматели в сети интернет освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, подвергнуты целой серии независимых исследований. Безусловно, социально-экономическое развитие не даёт нам иного выбора, кроме определения глубокомысленных рассуждений.",
    author: {
        name: "Author author",
        avatarUrl: "https://placekitten.com/g/64/64"
    },
}

const posts = [post_first, post_second]

function App() {
    const auth = useSelector(isAuthenticated());
    return (
        <div className="App">
            <Header/>
            <Routes>
                {!auth && <Route path={"*"} element={<Navigate replace to="/auth"/>}/>}
                {auth && <Route exact path='/' element={<Home/>}/>}
                {auth && <Route path='/posts/all' element={<ContentPosts posts={posts}/>}/>}
                {auth && <Route path='/posts/:number' element={<ContentPost posts={posts}/>}/>}
                <Route path='/auth' element={<Authorization onSubmit={login}/>}/>
                <Route path='/reg' element={<Registration onSubmit={register}/>}/>
                {auth && <Route path='/posts/my' element={<ContentPostsMy/>}/>}
                {auth && <Route path='/posts/add' element={<ContentAddPost/>}/>}

            </Routes>
            <Footer/>
        </div>
    );
}

const mapDispatchToProps = dispatch => bindActionCreators({
    register,
    login,
}, dispatch);
export default connect(null, mapDispatchToProps)(App);
