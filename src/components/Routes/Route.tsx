import React from "react";
import {Route, Routes} from "react-router-dom";
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


export const RoutesTree = () => {
	return (
		<div>
			<Routes>
				<Route path={PATH.PROFILE} element={
					<PrivateRouter>
						<Profile/>
					</PrivateRouter>
				}/>
				<Route path={`${PATH.PROFILE}/:userId`} element={
					<PrivateRouter>
						<Profile/>
					</PrivateRouter>
				}/>
				<Route path={PATH.DIALOGS} element={
					<PrivateRouter>
						<Dialogs/>
					</PrivateRouter>
				}/>
				<Route path={PATH.USERS} element={
					<PrivateRouter>
						<UsersContainer/>
					</PrivateRouter>
				}/>
				<Route path={PATH.DIALOGS} element={
					<PrivateRouter>
						<Login/>
					</PrivateRouter>
				}/>
				<Route path={PATH.LOGIN} element={<Login/>}/>
				<Route path='/news' element={<News/>}/>
				<Route path='/music' element={<Music/>}/>
				<Route path='/settings' element={<Settings/>}/>
			</Routes>
		</div>
	)
}