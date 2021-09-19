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
import {ActionTypes, DialogsPageType, ProfilePageType} from "./components/state";




type AppType = {
  posts:ProfilePageType
  dialogs:DialogsPageType
  dispatch:(action: ActionTypes) => void
}

function App(props:AppType) {
  return (
    <BrowserRouter>
      <div className='app-wrapper' >
        <Header/>
        <Navigator/>
          <div className={'app-wrapper-content'}>
            <Route path='/dialogs' render={() => <Dialogs dialogs={props.dialogs}/>}/>
            <Route path='/profile' render={() => <Profile posts={props.posts} dispatch={props.dispatch}/>}/>
            <Route path='/news' render={() => <News/>}/>
            <Route path='/music' render={() => <Music/>}/>
            <Route path='/settings' render ={() => <Settings/>}/>
          </div>
      </div>
    </BrowserRouter>
  )
}
export default App;
