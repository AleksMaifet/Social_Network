


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
}


	const initialState: UsersPageType = {
	users: []
}


export const userReducer = (state = initialState, action: ActionTypes): UsersPageType => {
	switch (action.type) {
		case "FOLLOW":
			return {...state,users: state.users.map(el => el.id === action.id? {...el,followed:!el.followed}: el)};
		case "SET-USERS":
			return {...state,users : [...state.users,...action.users]}
		default:
			return state
	}
}

export type ActionTypes = followACType | setUsersACType

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