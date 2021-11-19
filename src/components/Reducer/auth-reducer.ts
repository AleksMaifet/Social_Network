import {Dispatch} from "redux";
import {api} from "../Api/Api";


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
}


export const authReducer = (state=initialStateAutoLogin,action:getAuthDataHandlerType):initialStateAutoLoginType => {
	switch (action.type) {
		case "GET-AUTH-DATA":
			return {
				...state,
				data:action.payload,
			}
		case "GET-PHOTO":
			return {
				...state,
				photo:action.payload.photo
			}
		default:
			return state
	}
}



type getAuthDataHandlerType = getAuthDataACType | getAuthDataPhotoType


export type getAuthDataACType = ReturnType<typeof getAuthDataAC>

export const getAuthDataAC = (userId:number,email:string,login:string) => {
	return {
		type:'GET-AUTH-DATA',
		payload:{
			userId,
			email,
			login,
		}
	} as const
}

export type getAuthDataPhotoType = ReturnType<typeof getAuthDataPhotoAC>

export const getAuthDataPhotoAC = (photo:string) => {
	return {
		type:'GET-PHOTO',
		payload:{
			photo
		}
	} as const
}


export const getAuthTC = () => {
	return async (dispatch: Dispatch) => {
		const {data} = await api.getAuth()
		const {data: {id, email, login}} = data
		dispatch(getAuthDataAC(id, email, login))
		const {data: {photos}} = await api.getProfile(id)
		dispatch(getAuthDataPhotoAC(photos.large))
	}
}