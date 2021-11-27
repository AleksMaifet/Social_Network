import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {PrivateRouter} from "../Login/PrivateRouter";
import {Profile} from "../Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";
import {UsersContainer} from "../Users/UsersContainer";
import {Login} from "../Login/Login";
import News from "../News/News";
import Music from "../Music/Music";
import Settings from "../Settings/Settings";



export const PATH = {
	PROFILE:'/profile',
	DIALOGS:'/dialogs',
	USERS:'/users',
	LOGIN:'/login',
}




export const Routes = () => {
	return (
		<div>
			<Switch>
				<Route path={'/'} exact render={() => <Redirect to={PATH.LOGIN}/>}/>
				<PrivateRouter path={PATH.PROFILE + '/:userId?'}>
					<Profile/>
				</PrivateRouter>
				<PrivateRouter path={PATH.DIALOGS}>
					<Dialogs/>
				</PrivateRouter>
				<PrivateRouter path={PATH.USERS}>
					<UsersContainer/>
				</PrivateRouter>
				<PrivateRouter path={PATH.DIALOGS}>
					<Login/>
				</PrivateRouter>
				<Route path={PATH.LOGIN} render={() => <Login/>}/>
				<Route path='/news' render={() => <News/>}/>
				<Route path='/music' render={() => <Music/>}/>
				<Route path='/settings' render={() => <Settings/>}/>
			</Switch>
		</div>
	)
}