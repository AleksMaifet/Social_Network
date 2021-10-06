import React from "react";
import {AddNewPostAC, AddPostAC} from "../../Reducer/profileReducer";
import {MyPosts} from "./MyPosts";
import {useDispatch} from "react-redux";




export function MyPostsConteiner () {
	const dispatch = useDispatch();

	const newText = (text:string) => dispatch(AddNewPostAC(text));

	const newPost = () => dispatch(AddPostAC());

	return (
		<MyPosts OnNewText={newText} OnNewPost={newPost} />
	)
}