import React from "react";
import {UsersPageType} from "../Reducer/usersReducer";
import s from './Users.module.css'
import userPhoto from '../../img/default-avatar.png'

type UsersType = {
	users:UsersPageType
	followChangeHandler:(id:number) => void
	followedHandler:(followed:boolean) => 'Follow' | 'Unfollow'
}

export const Users = ({users,followChangeHandler,followedHandler}:UsersType ) => {

	const followChange = (id:number) => followChangeHandler(id)
	const followed = (followed:boolean) => followedHandler(followed)


	return(
		<div>
			{users.users.map(el => <div key={el.id}>
				<img src={el.photos.small !=null ? el.photos.small : userPhoto} className={s.userPhoto}/>
				<div>
					<button onClick={() => followChange(el.id)}>{followed(el.followed)}</button>
				</div>
				<div>{el.name}</div>
				<div>{el.status}</div>
				{/*<div>{el.location.country}</div>*/}
				{/*<div>{el.location.city}</div>*/}
				</div>)}
		</div>
	)
}