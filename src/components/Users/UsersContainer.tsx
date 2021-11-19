import {useDispatch, useSelector} from "react-redux";
import {reducersHandlerType} from "../Reducer/redux-store";
import {
	getUsersPageTC,
	getUsersTC, setFollowProgressTC, UsersPageType
} from "../Reducer/usersReducer";
import {Users} from "./Users";
import React, {useCallback, useEffect, useMemo} from "react";
import {Load} from "../Load/Load";



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
		for (let i = 1; i <= pagesCount; i++) {
			page.push(i)
		}
		return page
	},[users.pageSize, users.totalUsersCount])


	useEffect(() => {
		users.items.length === 0 && dispatch(getUsersTC(users.currentPage,users.pageSize))
	},[dispatch,users.items,users.currentPage,users.pageSize])

	const pageChangeHandler = useCallback( (p:number) => {
		dispatch(getUsersPageTC(p,users.pageSize))
	},[dispatch,users.pageSize])

	return (
		<React.Fragment>
			{users.items.length === 0 ?
				<Load/>
				:
				<Users newPage={newPage} users={users} pageChangeHandler={pageChangeHandler}
							 followChangeHandler={followChangeHandler} followedHandler={followedHandler}/>
			}
		</React.Fragment>
	)
})
