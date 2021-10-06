import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import {MyPost} from "./Post/MyPost";
import {ProfilePageType} from "../../Reducer/profileReducer";
import {useSelector} from "react-redux";
import {reducersHandlerType} from "../../Reducer/redux-store";

type MyPostsType = {
	OnNewText: (text:string) => void
	OnNewPost:() => void
}


export function MyPosts({OnNewText,OnNewPost}: MyPostsType) {
	const posts = useSelector<reducersHandlerType,ProfilePageType>(state => state.profilePage)

	const newText = (e:ChangeEvent<HTMLTextAreaElement>) => {
		OnNewText(e.currentTarget.value);
	}
	const newPost = () => {
		OnNewPost();
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