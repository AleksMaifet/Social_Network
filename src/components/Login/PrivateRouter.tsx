import React from "react";
import {useSelector} from "react-redux";
import {reducersHandlerType} from "../Reducer/redux-store";
import {Redirect, Route} from "react-router-dom";

type PrivateRouterType = {
	children:JSX.Element
	path: string;
}

export const PrivateRouter =  ({children,...rest}:PrivateRouterType) => {
	const authLogin = useSelector<reducersHandlerType, string | null>(state => state.auth.data.login)
	return (
		<Route
			{...rest}
			render={() => {
				return authLogin ?
					children
					:
					<Redirect to='/login'/>
			}
			}
		/>
	)
}