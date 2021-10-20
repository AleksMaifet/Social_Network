import {useDispatch, useSelector} from "react-redux";
import {reducersHandlerType} from "../Reducer/redux-store";
import {followAC, setTotalUsersAC, setUsersAC, UsersPageType} from "../Reducer/usersReducer";
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

export type AxiosGetType = {
	items: Array<ItemsType>
	totalCount:number
	error: string | null
}


export const UsersContainer = React.memo(() => {
	const users = useSelector<reducersHandlerType, UsersPageType>(state => state.userPage)
	const dispatch = useDispatch()
	const followChangeHandler = (id:number) => dispatch(followAC(id))
	const followedHandler = (followed:boolean) => {
		return followed ? 'Follow' : 'Unfollow'
	}
	const page = []
	const pagesCount = Math.ceil(users.totalUsersCount / users.pageSize)
	for(let i = 1; i <= pagesCount;i++){
		page.push(i)
	}


		useEffect(() => {
		users.users.length === 0 && axios.get<AxiosGetType>(`https://social-network.samuraijs.com/api/1.0/users?page=${users.currentPage}&count=${users.pageSize}`).then((res) => {
			dispatch(setUsersAC(res.data.items))
			dispatch(setTotalUsersAC(res.data.totalCount))
		})
	},[dispatch,users.users.length,users.currentPage,users.pageSize])

	return (
		<div>
			<Users page={page} followChangeHandler={followChangeHandler} followedHandler={followedHandler}/>
		</div>
	)
})
