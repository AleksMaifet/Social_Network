import React from "react";
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {ActionTypes, ProfilePageType} from "../state";

type ProfileType = {
	posts:ProfilePageType
	dispatch:(action: ActionTypes) => void
}

export function Profile(props:ProfileType) {
	return (
		<div>
			<ProfileInfo/>
			<MyPosts posts={props.posts} dispatch={props.dispatch}/>
		</div>
	)
}