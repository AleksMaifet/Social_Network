import {Dispatch} from "redux";
import {apiAuth, apiProfile, AxiosGetProfileType} from "../Api/Api";
import {LoginAuthValue} from "../Login/FormLogin/LoginAuth";
import {store} from "./redux-store";


export type initialStateAutoLoginType = typeof initialStateAutoLogin

const initialStateAutoLogin = {
	data:{
		userId:null as number | null,
		email:null as string | null,
		login:null as string | null,
	},
	resultCode: null,
	messages:null,
	photo: null as string | null,
	fullName: null as string | null,
	isLoad:false
}


export const authReducer = (state=initialStateAutoLogin,action:getAuthDataHandlerType):initialStateAutoLoginType => {
	switch (action.type) {
		case "GET-AUTH-DATA":
			return {
				...state,
				data:action.payload,
			}
		case "GET-PROFILE":
			return {
				...state,
				...action.profile
			}
		case "SET-LOAD-AUTH":
			return {...state, ...action.payload}
		default:
			return state
	}
}



type getAuthDataHandlerType = getAuthDataACType | getAuthProfileDataACType | SetLoadAuthsACType


export type getAuthDataACType = ReturnType<typeof getAuthDataAC>

export const getAuthDataAC = (userId:number | null,email:string | null,login:string | null) => {
	return {
		type:'GET-AUTH-DATA',
		payload:{
			userId,
			email,
			login,
		}
	} as const
}

export type getAuthProfileDataACType = ReturnType<typeof getAuthProfileDataAC>

export const getAuthProfileDataAC = (profile: AxiosGetProfileType) => {
	return {
		type: 'GET-PROFILE',
		profile
	} as const
}

export type SetLoadAuthsACType = ReturnType<typeof setLoadAuthsAC>

export const setLoadAuthsAC = (isLoad:boolean) => {
	return {
		type: 'SET-LOAD-AUTH',
		payload: {isLoad}
	} as const
}

export const getAuthTC = () => {
	return async (dispatch: Dispatch) => {
		dispatch(setLoadAuthsAC(true))
		const {data} = await apiAuth.getAuth()
		const {data: {id, email, login}, resultCode, messages} = data
		if (resultCode === 0) {
			dispatch(getAuthDataAC(id, email, login))
			const {data} = await apiProfile.getProfile(id)
			dispatch(getAuthProfileDataAC(data))
		} else {
			alert(messages)
		}
		dispatch(setLoadAuthsAC(false))
	}
}
export type AppDispatch = typeof store.dispatch;

export const LogInTC = (FormData: LoginAuthValue) => {
	return async (dispatch:AppDispatch) => {
		const {data} = await apiAuth.LogIn(FormData)
		const {resultCode , messages} = data
		if( resultCode === 0) {
		dispatch(getAuthTC())
		}
		else {
			alert(messages)
		}
	}
}

export const LogOutTC = () => {
	return async (dispatch: Dispatch) => {
		const {data} =	await apiAuth.LogOut()
		const {resultCode} = data
		if(resultCode === 0) {
			const FormData = {
				userId:null,
				email:null,
				login:null
			}
			dispatch(getAuthDataAC(FormData.userId,FormData.email,FormData.login))
		}
	}
}

