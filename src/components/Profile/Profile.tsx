import React from "react";
import {ProfileInfo} from "./MyPosts/ProfileInfo/ProfileInfo";
import {MyPostsConteiner} from "./MyPosts/MyPostsContainer";


export function Profile() {
	return (
		<div>
			<ProfileInfo/>
			<MyPostsConteiner/>
		</div>
	)
}