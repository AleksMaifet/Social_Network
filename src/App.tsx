import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navigator} from "./components/Navigator/Navigator";
import {HashRouter} from "react-router-dom";

import {Routes} from "./components/Routes/Routes";



function App() {
  return (
    <HashRouter>
      <div className='app-wrapper'>
        <Header/>
        <Navigator/>
          <div className={'app-wrapper-content'}>
           <Routes/>
          </div>
      </div>
    </HashRouter>
  )
}

export default App;
