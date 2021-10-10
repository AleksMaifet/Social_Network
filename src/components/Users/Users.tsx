import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {reducersHandlerType} from "../Reducer/redux-store";
import {followAC, setUsersAC, UsersPageType} from "../Reducer/usersReducer";
import s from './Users.module.css'
import {v1} from "uuid";



export const Users = () => {
	const users = useSelector<reducersHandlerType,UsersPageType>(state => state.userPage)
	const dispatch = useDispatch()
	if(users.users.length === 0)dispatch(setUsersAC([
		{
			id: v1(),
			photoUrl: 'https://freesvg.org/img/imagebotgirl.png',
			followed: false,
			fullName: 'Lesha',
			status: 'I am coming',
			location: {city: 'Minsk', country: 'Belarus'}
		},
		{
			id: v1(),
			photoUrl: 'https://freesvg.org/img/imagebotgirl.png',
			followed: true,
			fullName: 'Ales',
			status: 'Let`s go',
			location: {city: 'Krasno', country: 'Belarus'}
		},
		{
			id: v1(),
			photoUrl: 'https://freesvg.org/img/imagebotgirl.png',
			followed: false,
			fullName: 'Nikita',
			status: 'I am sleeping',
			location: {city: 'St. Petersburg', country: 'Russia'}
		}
	]))
	return(
		<div>
			{users.users.map(el => <div key={el.id}>
				<img src={el.photoUrl} className={s.userPhoto}/>
				<div>
					<button onClick={() =>dispatch(followAC(el.id))}>{el.followed ? 'Follow' : 'Unfollow'}</button>
				</div>
				<div>{el.fullName}</div>
				<div>{el.status}</div>
				<div>{el.location.country}</div>
				<div>{el.location.city}</div>
				</div>)}
		</div>
	)
}