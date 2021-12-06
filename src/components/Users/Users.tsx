import React from "react";
import {UsersPageType} from "../Reducer/usersReducer";
import s from './Users.module.css'
import b from '../button.module.css'
import userPhoto from '../../img/default-avatar.png'
import {Load} from "../Load/Load";
import {NavLink} from "react-router-dom";
import {UserSearch} from "./UserSearch";

type UsersType = {
	followChangeHandler: (id: number) => void
	followedHandler: (followed: boolean) => 'Follow' | 'Unfollow'
	users: UsersPageType
	pageChangeHandler: (p: number) => void
	newPage: Array<number>
}


export const Users = React.memo(({followChangeHandler, followedHandler, users, ...props}: UsersType) => {
	const followChange = (id: number) => {
		followChangeHandler(id);
	}
	const followed = (followed: boolean) => followedHandler(followed)
	const pageChange = (p: number) => {
		props.pageChangeHandler(p)
	}
	const wrapperPage = users.isLoad ?
		<Load/>
		:
		<div>
			<div className={s.wrapperPages}>
				{props.newPage.map((p, i) => <span onClick={() => pageChange(p)}
								className={`${s.userPages} ${users.currentPage === p ? s.currentPage : ''}`}
								key={i}>{p}</span>)}
			</div>
			<UserSearch/>
			{users.items.map(el => <div key={el.id}>
				<NavLink key={el.id} to={`/profile/${el.id}`}>
					<img src={el.photos.small != null ? el.photos.small : userPhoto} className={s.userPhoto}/>
				</NavLink>
				<div>
					<button className={users.followProgress.some(id => id === el.id) ? b.disable: b.default} disabled={users.followProgress.some(id => id === el.id)} onClick={(e) => followChange(el.id)}>{followed(el.followed)}</button>
				</div>
				<div>{el.name}</div>
				<div>{el.status}</div>
				{/*<div>{el.location.country}</div>*/}
				{/*<div>{el.location.city}</div>*/}
			</div>)}
		</div>





	return (
		<>
			{wrapperPage}
		</>
	)
})