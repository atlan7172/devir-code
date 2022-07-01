import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './UI/Home';
import Navigation from "./UI/Navigation";
import Data from "./UI/Data";

const App = () => {
    return (
        <div className='content'>
            <Navigation/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/data' element={<Data/>}/>
            </Routes>
        </div>
    )
}

export default App;
