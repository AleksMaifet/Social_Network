import React from "react";
import {UsersPageType} from "../Reducer/usersReducer";
import s from './Users.module.css'
import b from '../button.module.css'
import userPhoto from '../../img/default-avatar.png'
import {Load} from "../Load/Load";
import { NavLink } from "react-router-dom";

type UsersType = {
	followChangeHandler: (id: number) => void
	followedHandler: (followed: boolean) => 'Follow' | 'Unfollow'
	users: UsersPageType
	pageChangeHandler: (p: number) => void
	newPage: Array<number>
}
export const Users = ({followChangeHandler, followedHandler, users, ...props}: UsersType) => {
	const followChange = (id: number) => followChangeHandler(id)
	const followed = (followed: boolean) => followedHandler(followed)
	const pageChange = (p: number) => props.pageChangeHandler(p)

	const wrapperPage = users.isLoad ?
		<div>
			<div className={s.wrapperPages}>
				{props.newPage.map((p, i) => <span onClick={() => pageChange(p)}
																					 className={`${s.userPages} ${users.currentPage === p ? s.currentPage : ''}`}
																					 key={i}>{p}</span>)}
			</div>
			{users.users.map(el => <div key={el.id}>
				<NavLink to={'/profile/' + el.id}>
				<img src={el.photos.small != null ? el.photos.small : userPhoto} className={s.userPhoto}/>
				</NavLink>
				<div>
					<button className={b.default} onClick={() => followChange(el.id)}>{followed(el.followed)}</button>
				</div>
				<div>{el.name}</div>
				<div>{el.status}</div>
				{/*<div>{el.location.country}</div>*/}
				{/*<div>{el.location.city}</div>*/}
			</div>)}
		</div>
		:
		<Load/>
	return (
		<>
			{wrapperPage}
		</>
	)
}