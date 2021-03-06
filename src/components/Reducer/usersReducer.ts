import {Dispatch} from "redux";
import {apiUsers} from "../Api/Api";


export type locationType = {
	city: string
	country: string
}


export type ItemsType = {
	id: number
	photos:{
		small:string | null
		large:string | null
	}
	followed: boolean
	name: string
	status: string | null
	// location: locationType
}

export type UsersPageType = {
	items:Array<ItemsType>
	pageSize: number
	totalUsersCount: number
	currentPage: number
	isLoad:boolean
	followProgress:Array<null | number>
	searchFilter:{
		term:string
	}
}


const initialState: UsersPageType = {
	items: [],
	pageSize: 100,
	totalUsersCount:0,
	currentPage:1,
	isLoad:false,
	followProgress:[],
	searchFilter:{
		term:''
	}
}


export const userReducer = (state = initialState, action: ActionTypes): UsersPageType => {
	switch (action.type) {
		case "FOLLOW":
			return {
				...state,
				items: state.items.map(el => el.id === action.id? {...el,followed:!el.followed}: el)
			};
		case "SET-USERS":
			return {...state,items : action.users}
		case "SET-CURRENT-PAGE":
		case "SET-TOTAL-USERS":
			return {...state, ...action.payload}
		case "SET-LOAD-USER":
			return {...state, ...action.payload}
		case "SET-FOLLOW-PROGRESS":
			return {...state,
			followProgress:action.payload.isProgress
				? [...state.followProgress, action.payload.userId]
				: state.followProgress.filter(id => id !== action.payload.userId)
			}
		case "SET-SEARCH-USERS":
			return {
				...state,
				searchFilter:action.payload
			}
		default:
			return state
	}
}

export type ActionTypes =
	followACType
	| setUsersACType
	| setCurrentPageType
	| setTotalUsersType
	| setLoadUsersACType
	| setFollowProgressACType
	| setSearchUsersACType

export type followACType = ReturnType<typeof followAC>

export const followAC = (id: number) => {
	return {
		type: 'FOLLOW',
		id
	} as const
}
export type setUsersACType = ReturnType<typeof setUsersAC>

export const setUsersAC = (users:Array<ItemsType>) => {
	return {
		type: 'SET-USERS',
		users
	} as const
}

export type setCurrentPageType = ReturnType<typeof setcurrentPageAC>

export const setcurrentPageAC = (currentPage:number) => {
	return {
		type: 'SET-CURRENT-PAGE',
		payload:{currentPage}
	} as const
}

export type setTotalUsersType = ReturnType<typeof setTotalUsersAC>

export const setTotalUsersAC = (totalUsersCount:number) => {
	return {
		type: 'SET-TOTAL-USERS',
		payload:{totalUsersCount}
	} as const
}

export type setLoadUsersACType = ReturnType<typeof setLoadUsersAC>

export const setLoadUsersAC = (isLoad:boolean) => {
	return {
		type: 'SET-LOAD-USER',
		payload: {isLoad}
	} as const
}

export type setFollowProgressACType = ReturnType<typeof setFollowProgressAC>

export const setFollowProgressAC = (isProgress:boolean, userId:number) => {
	return {
		type: 'SET-FOLLOW-PROGRESS',
		payload: {
			isProgress,
			userId,
		}
	} as const
}

export type setSearchUsersACType = ReturnType<typeof setSearchUsersAC>

export const setSearchUsersAC = (term:string = '') => {
	return {
		type: 'SET-SEARCH-USERS',
		payload:{
			term
		}
	} as const
}

export const setFollowProgressTC = (items: Array<ItemsType>, id: number) => {
	return async (dispatch: Dispatch) => {
		dispatch(setFollowProgressAC(true, id))
		const {data: {resultCode}} = await apiUsers.getUsersFollow(items, id)
		resultCode === 0 && dispatch(followAC(id))
		dispatch(setFollowProgressAC(false, id))
	}
}


export const getUsersTC = (currentPage: number, pageSize: number, term?: string) => {
	return async (dispatch: Dispatch) => {
		dispatch(setLoadUsersAC(true))
		const {data} = await apiUsers.getUsers(currentPage, pageSize, term)
		const {items, totalCount} = data
		dispatch(setSearchUsersAC(term))
		dispatch(setcurrentPageAC(currentPage));
		dispatch(setUsersAC(items))
		dispatch(setTotalUsersAC(totalCount))
		dispatch(setLoadUsersAC(false))
	}
}

export const getUsersPageTC = (p:number,pageSize:number,term?:string) => {
	return async (dispatch:Dispatch) => {
		dispatch(setLoadUsersAC(true))
		dispatch(setcurrentPageAC(p));
		const {data} = 	await apiUsers.getUsers(p,pageSize,term)
		const {items} = data
		dispatch(setUsersAC(items))
		dispatch(setLoadUsersAC(false))
	}
}




