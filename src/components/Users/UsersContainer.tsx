import {useDispatch, useSelector} from "react-redux";
import {reducersHandlerType} from "../Reducer/redux-store";
import {
	followAC,
	setcurrentPageAC,
	setLoadAC,
	setTotalUsersAC,
	setUsersAC,
	UsersPageType
} from "../Reducer/usersReducer";
import {Users} from "./Users";
import axios from "axios";
import React, {useCallback, useEffect, useMemo} from "react";

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

export type AxiosGetUsersType = {
	items: Array<ItemsType>
	totalCount:number
	error: string | null
}


export const UsersContainer = React.memo(() => {
	const users = useSelector<reducersHandlerType, UsersPageType>(state => state.userPage)
	const dispatch = useDispatch()
	const followChangeHandler = useCallback((id:number) => dispatch(followAC(id)),[dispatch])
	const followedHandler = useCallback((followed:boolean) => {
		return followed ? 'Follow' : 'Unfollow'
	},[])


	const newPage = useMemo(() => {
		const page:Array<number> = []
		const pagesCount = Math.ceil(users.totalUsersCount / users.pageSize)
		for (let i = 1; i <= pagesCount; i++) {
			page.push(i)
		}
		return page
	},[users.pageSize, users.totalUsersCount])



		useEffect(() => {
		users.users.length === 0 && axios.get<AxiosGetUsersType>(`https://social-network.samuraijs.com/api/1.0/users?page=${users.currentPage}&count=${users.pageSize}`).then((res) => {
			dispatch(setLoadAC(true))
			dispatch(setUsersAC(res.data.items))
			dispatch(setTotalUsersAC(res.data.totalCount))
		})
	},[dispatch,users.users.length,users.currentPage,users.pageSize])

	const pageChangeHandler = useCallback( (p:number) => {
		dispatch(setLoadAC(false))
		dispatch(setcurrentPageAC(p));
		axios.get<AxiosGetUsersType>(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${users.pageSize}`).then((res) => {
			dispatch(setUsersAC(res.data.items))
			dispatch(setLoadAC(true))
		})
	},[dispatch,users.pageSize])

	return (
		<React.Fragment>
			<Users newPage={newPage} users={users} pageChangeHandler={pageChangeHandler} followChangeHandler={followChangeHandler} followedHandler={followedHandler}/>
		</React.Fragment>
	)
})
