import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {reducersHandlerType} from "../Reducer/redux-store";
import {Redirect} from "react-router-dom";
import {LoginAuth, LoginAuthValue} from "./FormLogin/LoginAuth";
import {LogInTC} from "../Reducer/auth-reducer";


export const Login = () => {
	const authLogin = useSelector<reducersHandlerType, string | null>(state => state.auth.data.login)
	const dispatch = useDispatch()
	const LogIn = (FormData:LoginAuthValue) => {
		dispatch(LogInTC(FormData))
	}
	return (
		<>
			{
				authLogin ?
					<Redirect to={'/profile'}/>
					:
					<>
						<h1>
							LOGIN
						</h1>
						<LoginAuth callback={LogIn}/>
					</>
			}
		</>
	)
}