import axios from "axios";
import {LoginAuthValue} from "../Login/FormLogin/LoginAuth";


type ItemsType = {
	name: string
	id: number
	photos: {
		small: string | null
		large: string | null
	}
	status: string | null
	followed: boolean
}

export type AxiosGetUsersType = {
	items: Array<ItemsType>
	totalCount: number
	error: string | null
}
export type AxiosResponseType<T> = {
	resultCode: number
	messages: Array<string>
	data: T
}

export type AxiosGetAuthDataType ={
	id:number
	email:string
	login:string
}

type ContactsType = {
	github: string
	vk: string
	facebook: string
	instagram: string
	twitter: string
	website: string
	youtube: string
	mainLink: string
}

export type AxiosGetProfileType = {
	aboutMe:string
	userId: number
	lookingForAJob: boolean
	lookingForAJobDescription: string
	fullName: string
	contacts: ContactsType
	photos: {
		small: string
		large: string
	}
}

const instance = axios.create({
	withCredentials: true,
	headers: {
		'API-KEY': '5c7c1e5a-aa4c-4b00-a92b-b6f5df506a28'
	},
	baseURL:`https://social-network.samuraijs.com/api/1.0/`,
})

export const apiUsers = {
	getUsers: (currentPage: number, pageSize: number,term:string= '') => {
		return instance.get<AxiosGetUsersType>(`users?page=${currentPage}&count=${pageSize}&term=${term}`,)
	},
	getUsersFollow: (items: Array<ItemsType>, id: number) => {
		if (!items.filter(el => el.id === id)[0].followed) {
		return instance.post<AxiosResponseType<{}>>(`follow/${id}`,
				{},)
		} else {
		return instance.delete<AxiosResponseType<{}>>(`follow/${id}`,)
		}
	},
}

export const apiAuth = {
	getAuth () {
		return instance.get<AxiosResponseType<AxiosGetAuthDataType>>('/auth/me',
			{},)
	},
	LogIn(FormData:LoginAuthValue) {
		return instance.post<AxiosResponseType<{userId:number}>>('/auth/login',
			{...FormData},{})
	},
	LogOut() {
		return instance.delete<AxiosResponseType<{}>>('/auth/login',
			{})
	}
}

export const apiProfile = {
	getProfile (id:number)  {
		return instance.get<AxiosGetProfileType>(`profile/${id}`
			,{},)
	},
	getProfileStatus (id:number)  {
		return instance.get<string>(`profile/status/${id}`
			,{},)
	},
	updateProfileStatus (status:string)  {
		return instance.put<AxiosResponseType<{}>>(`profile/status`,
			{status}
			,{},)
	},
}
