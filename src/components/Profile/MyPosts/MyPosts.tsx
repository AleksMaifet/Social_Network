import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import b from '../../button.module.css';
import {MyPost} from "./Post/MyPost";
import {useSelector} from "react-redux";
import {reducersHandlerType} from "../../Reducer/redux-store";
import {initialProfileStateType} from "../../Reducer/profileReducer";

type MyPostsType = {
	OnNewText: (text:string) => void
	OnNewPost:() => void
}


export function MyPosts({OnNewText,OnNewPost}: MyPostsType) {
	const posts = useSelector<reducersHandlerType,initialProfileStateType>(state => state.profilePage)

	const newText = (e:ChangeEvent<HTMLTextAreaElement>) => {
		OnNewText(e.currentTarget.value);
	}
	const newPost = () => {
		OnNewPost();
	}

	const myPostsString =
		posts.posts.map(p =>
			<MyPost key={p.id} message={p.message} caunt={p.likesCount}/>)

	return (
		<div className={s.myPosts}>
			<h3>My posts</h3>
			<textarea value={posts.newPostText} className={s.textareaPost} onChange={newText}/>
			<div>
				<button className={b.default} onClick={newPost}>Add post</button>
			</div>
			<div>
				{myPostsString}
			</div>
		</div>
	)
}