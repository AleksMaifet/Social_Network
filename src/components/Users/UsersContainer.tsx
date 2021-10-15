import {useDispatch, useSelector} from "react-redux";
import {reducersHandlerType} from "../Reducer/redux-store";
import {followAC, setUsersAC, userReducer, UsersPageType} from "../Reducer/usersReducer";
import {Users} from "./Users";
import axios from "axios";
import React, {useEffect} from "react";

type ItemsType = {
	name:string
	id:number
	photos : {
		small:string | null
		large:string | null
	}
	status:string | null
	followed:boolean
}

type AxiosGetType = {
	items: Array<ItemsType>
	totalCount:number
	error: string | null
}


export const UsersContainer = () => {
	const users = useSelector<reducersHandlerType, UsersPageType>(state => state.userPage)
	const dispatch = useDispatch()
	const followChangeHandler = (id:number) => dispatch(followAC(id))
	const followedHandler = (followed:boolean) => {
		return followed ? 'Follow' : 'Unfollow'
	}
	useEffect(() => {
		alert('ge')
		users.users.length === 0 && axios.get<AxiosGetType>('https://social-network.samuraijs.com/api/1.0/users').then((res) => {
			dispatch(setUsersAC(res.data.items))
		})
	},[userReducer])

	return (
		<div>
			<Users users={users } followChangeHandler={followChangeHandler} followedHandler={followedHandler}/>
		</div>
	)
}
