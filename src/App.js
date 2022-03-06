import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import ContentPosts from "./components/ContentPosts";
import ContentPost from "./components/ContentPost";

const post_first = {
    date: new Date(),
    name: "First post",
    text: "Повседневная практика показывает, что разбавленное изрядной долей эмпатии, рациональное мышление напрямую зависит от форм воздействия. Имеется спорная точка зрения, гласящая примерно следующее: предприниматели в сети интернет освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, подвергнуты целой серии независимых исследований. Безусловно, социально-экономическое развитие не даёт нам иного выбора, кроме определения глубокомысленных рассуждений.",
    author: {
        name: "Author author",
        avatarUrl: "https://placekitten.com/g/64/64"
    },
}

const post_second= {
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
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/posts/all' element={<ContentPosts posts={posts}/>}/>
            <Route path='/posts/:number' element={<ContentPost posts={posts}/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
