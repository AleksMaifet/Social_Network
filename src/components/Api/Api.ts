import axios from "axios";


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
export type AxiosPostFollowType = {
	resultCode: number
	messages: Array<string>
	data: {}
}

export type AxiosGetAuthDataType ={
	id:number
	email:string
	login:string
}

export type AxiosGetAuthType = {
	data: AxiosGetAuthDataType
	resultCode: number
	messages: string[]
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
		'API-KEY': '772b566d-453d-4f00-a46a-f93f13413638'
	},
	baseURL:`https://social-network.samuraijs.com/api/1.0/`,
})

export const api = {
	getUsers: (currentPage: number, pageSize: number) => {
		return instance.get<AxiosGetUsersType>(`users?page=${currentPage}&count=${pageSize}`,)
	},
	getUsersFollow: (items: Array<ItemsType>, id: number) => {
		if (!items.filter(el => el.id === id)[0].followed) {
		return instance.post<AxiosPostFollowType>(`follow/${id}`,
				{},)
		} else {
		return instance.delete<AxiosPostFollowType>(`follow/${id}`,)
		}
	},
	getAuth () {
		return instance.get<AxiosGetAuthType>('/auth/me',
			{},)
	},
	getProfile (id:number)  {
		return instance.get<AxiosGetProfileType>(`profile/${id}`
			,{},)
	}
}


