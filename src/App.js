
import './App.css';
import {Header, Movies, MovieTemplate} from "./components";

import {Route,Routes,Navigate} from "react-router-dom";



function App() {


    return (

    <div id="main">

        <Header/>
        <Routes>

                <Route index element={<Movies/>}/>
            <Route path={'/movieTemplate'} element={<MovieTemplate/>}/>

        </Routes>

    </div>
  );
}

export default App;
