import {useDispatch, useSelector} from "react-redux";
import {reducersHandlerType} from "../Reducer/redux-store";
import {
	getUsersPageTC,
	getUsersTC, setFollowProgressTC, UsersPageType
} from "../Reducer/usersReducer";
import {Users} from "./Users";
import React, {useCallback, useEffect, useMemo} from "react";
import {Load} from "../Load/Load";
import {createPages} from "./createPages";



export const UsersContainer = React.memo(() => {
	const users = useSelector<reducersHandlerType, UsersPageType>(state => state.userPage)
	const dispatch = useDispatch()
	const followChangeHandler = useCallback((id: number) => {
		dispatch(setFollowProgressTC(users.items,id))
		}, [dispatch,users])
	const followedHandler = useCallback((followed:boolean) => {
		return followed ? 'Follow' : 'Unfollow'
	},[])

	const newPage = useMemo(() => {
		const page:Array<number> = []
		const pagesCount = Math.ceil(users.totalUsersCount / users.pageSize)
		createPages(page,pagesCount,users.currentPage)
		return page
	},[users.currentPage, users.pageSize, users.totalUsersCount])


	useEffect(() => {
		dispatch(getUsersTC(1,users.pageSize))
	},[dispatch,users.pageSize])


	const pageChangeHandler = useCallback( (p:number) => {
		dispatch(getUsersPageTC(p,users.pageSize,users.searchFilter.term))
	},[dispatch,users.pageSize,users.searchFilter.term])


	return (
		<React.Fragment>
				<Users newPage={newPage} users={users} pageChangeHandler={pageChangeHandler}
							 followChangeHandler={followChangeHandler} followedHandler={followedHandler}/>
		</React.Fragment>
	)
})
