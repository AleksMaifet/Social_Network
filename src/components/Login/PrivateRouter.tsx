import React from "react";
import {useSelector} from "react-redux";
import {reducersHandlerType} from "../Reducer/redux-store";
import {Navigate, useLocation} from "react-router-dom";

type PrivateRouterType = {
	children: JSX.Element
}

export const PrivateRouter = ({children, ...rest}: PrivateRouterType) => {
	const location = useLocation()
	const authLogin = useSelector<reducersHandlerType, string | null>(state => state.auth.data.login)
	if (!authLogin) {
		return <Navigate to='/login' state={{from: location}}/>
	}
	return children
}




