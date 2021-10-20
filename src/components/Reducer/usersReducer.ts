


export type locationType = {
	city: string
	country: string
}


export type UsersType = {
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
	users:Array<UsersType>
	pageSize: number
	totalUsersCount: number
	currentPage: number
}


const initialState: UsersPageType = {
	users: [],
	pageSize: 100,
	totalUsersCount:0,
	currentPage:1

}


export const userReducer = (state = initialState, action: ActionTypes): UsersPageType => {
	switch (action.type) {
		case "FOLLOW":
			return {...state,users: state.users.map(el => el.id === action.id? {...el,followed:!el.followed}: el)};
		case "SET-USERS":
			return {...state,users : action.users}
		case "SET-CURRENT-PAGE":
		case "SET-TOTAL-USERS":
			return {...state,...action.pauload}
		default:
			return state
	}
}

export type ActionTypes = followACType | setUsersACType | setCurrentPageType | setTotalUsersType

export type followACType = ReturnType<typeof followAC>

export const followAC = (id: number) => {
	return {
		type: 'FOLLOW',
		id
	} as const
}
export type setUsersACType = ReturnType<typeof setUsersAC>

export const setUsersAC = (users:Array<UsersType>) => {
	return {
		type: 'SET-USERS',
		users
	} as const
}

export type setCurrentPageType = ReturnType<typeof setcurrentPageAC>

export const setcurrentPageAC = (currentPage:number) => {
	return {
		type: 'SET-CURRENT-PAGE',
		pauload:{currentPage}
	} as const
}

export type setTotalUsersType = ReturnType<typeof setTotalUsersAC>

export const setTotalUsersAC = (totalUsersCount:number) => {
	return {
		type: 'SET-TOTAL-USERS',
		pauload:{totalUsersCount}
	} as const
}