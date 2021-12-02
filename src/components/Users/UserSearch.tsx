import React, {ChangeEvent,KeyboardEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {getUsersTC, UsersPageType} from "../Reducer/usersReducer";


type UserSearchType = {
	users: UsersPageType
}



export const UserSearch = React.memo(({...props}:UserSearchType) => {
	const dispatch = useDispatch()
	const [value,setValue] = useState<string>('')
	const searchUsers = (e:ChangeEvent<HTMLInputElement>) => {
		setValue(e.currentTarget.value)
	}
	const searchUsersPress = (e:KeyboardEvent<HTMLInputElement>) => {
		if(e.key === 'Enter') {
			dispatch(getUsersTC(1, props.users.pageSize, value))
			setValue('')
		}
	}

	return (
		<div style={{textAlign:'center',margin:'20px 0'}}>
			<input value={value} onKeyPress={searchUsersPress} onChange={searchUsers}/>
		</div>
	)
})