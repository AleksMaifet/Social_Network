import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUsersTC} from "../Reducer/usersReducer";
import {reducersHandlerType} from "../Reducer/redux-store";


export const UserSearch = React.memo(({...props}) => {
	const usersPageSize = useSelector<reducersHandlerType, number>(state => state.userPage.pageSize)
	const dispatch = useDispatch()
	const [value,setValue] = useState<string>('')
	const searchUsers = (e:ChangeEvent<HTMLInputElement>) => {
		setValue(e.currentTarget.value)
	}
	const searchUsersPress = (e:KeyboardEvent<HTMLInputElement>) => {
		if(e.key === 'Enter') {
			dispatch(getUsersTC(1, usersPageSize, value))
			setValue('')
		}
	}

	return (
		<div style={{textAlign:'center',margin:'20px 0'}}>
			<input value={value} onKeyPress={searchUsersPress} onChange={searchUsers}/>
		</div>
	)
})