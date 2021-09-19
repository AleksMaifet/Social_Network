import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import {MyPost} from "./Post/MyPost";
import {ActionTypes, AddNewPostAC, AddPostAC, ProfilePageType} from "../../state";

type MyPostsType = {
	posts:ProfilePageType
	dispatch:(action: ActionTypes) => void
}


export function MyPosts({posts,dispatch}: MyPostsType) {

	const newText = (e:ChangeEvent<HTMLTextAreaElement>) => {
		dispatch(AddNewPostAC(e.currentTarget.value));
	}
	const newPost = () => {
		dispatch(AddPostAC());
	}

	const myPostsString =
		posts.posts.map(p =>
			<MyPost message={p.message} caunt={p.likesCount}/>)

	return (
		<div className={s.myPosts}>
			<h3>My posts</h3>
			<textarea value={posts.newPostText} className={s.textareaPost} onChange={newText}/>
			<div className={s.buttonWrapper}>
				<button className={s.buttonPost} onClick={newPost}>Add post</button>
			</div>
			<div>
				{myPostsString}
			</div>
		</div>
	)
}