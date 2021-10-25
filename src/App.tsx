import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navigator} from "./components/Navigator/Navigator";
import {Profile} from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {UsersContainer} from "./components/Users/UsersContainer";



function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper' >
        <Header/>
        <Navigator/>
          <div className={'app-wrapper-content'}>
            <Route path='/dialogs' render={() => <Dialogs/>}/>
            <Route path='/profile/:userId?' render={() => <Profile/>}/>
            <Route path='/users' render={() => <UsersContainer/>}/>
            <Route path='/news' render={() => <News/>}/>
            <Route path='/music' render={() => <Music/>}/>
            <Route path='/settings' render ={() => <Settings/>}/>
          </div>
      </div>
    </BrowserRouter>
  )
}
export default App;
