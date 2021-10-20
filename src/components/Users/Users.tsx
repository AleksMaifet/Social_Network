import React from "react";
import {setcurrentPageAC,setUsersAC, UsersPageType} from "../Reducer/usersReducer";
import s from './Users.module.css'
import b from '../button.module.css'
import userPhoto from '../../img/default-avatar.png'
import {useDispatch, useSelector} from "react-redux";
import {reducersHandlerType} from "../Reducer/redux-store";
import axios from "axios";
import {AxiosGetType} from "./UsersContainer";

type UsersType = {
	followChangeHandler:(id:number) => void
	followedHandler:(followed:boolean) => 'Follow' | 'Unfollow'
	page:Array<number>
}

export const Users = ({followChangeHandler,followedHandler,...props}:UsersType ) => {
	const users = useSelector<reducersHandlerType, UsersPageType>(state => state.userPage)
	const dispatch = useDispatch()
	const followChange = (id:number) => followChangeHandler(id)
	const followed = (followed:boolean) => followedHandler(followed)
	const pageChange = (p:number) => {
		dispatch(setcurrentPageAC(p));
		axios.get<AxiosGetType>(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${users.pageSize}`).then((res) => {
			dispatch(setUsersAC(res.data.items))
		})
	}

	return(
		<div>
			<div className={s.wrapperPages}>
				{props.page.map((p,i) => <span onClick={() => pageChange(p)} className={ `${s.userPages} ${users.currentPage === p ? s.currentPage : ''}`} key={i}>{p}</span>)}
			</div>
			{users.users.map(el => <div key={el.id}>
				<img src={el.photos.small !=null ? el.photos.small : userPhoto} className={s.userPhoto}/>
				<div>
					<button className={b.default} onClick={() => followChange(el.id)}>{followed(el.followed)}</button>
				</div>
				<div>{el.name}</div>
				<div>{el.status}</div>
				{/*<div>{el.location.country}</div>*/}
				{/*<div>{el.location.city}</div>*/}
				</div>)}
		</div>
	)
}