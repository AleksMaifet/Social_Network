import {v1} from "uuid";
import {AxiosGetProfileType} from "../Profile/MyPosts/ProfileInfo/ProfileInfo";



const ADD_POST = "ADD-POST";
const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";
const ADD_NEW_PROFILE = 'ADD-NEW-PROFILE';


export type PostType = {
	id:string
	message:string
	likesCount:number
}
export type newPostTextType = string

// export type ProfilePageType ={
// 	posts: PostType[]
// 	newPostText:newPostTextType
// 	profile:{}
// }

export type initialStateType = typeof initialState

const initialState = {
	posts: [
		{id: v1(), message: 'Hi, how are you?', likesCount: 12},
		{id: v1(), message: 'It is my post', likesCount: 11},
		{id: v1(), message: 'blabla', likesCount: 11},
		{id: v1(), message: 'dada', likesCount: 11}
	],
	newPostText: '',
	profile:null as AxiosGetProfileType | null
}


export const profileReducer = (state:initialStateType = initialState, action: ActionTypes) => {
	switch (action.type) {
		case ADD_POST:
			return {
				...state,
				posts: [{id: v1(), message: state.newPostText, likesCount: 0}, ...state.posts],
				newPostText: ''
			};
		case ADD_NEW_MESSAGE:
			return {
				...state,
				newPostText: action.newMessage
			};
		case ADD_NEW_PROFILE:
			return {
				...state,
				profile: action.profile
			}
		default:
			return state
	}
}










export type ActionTypes = ReturnType<typeof AddPostAC> | ReturnType<typeof AddNewPostAC> | ReturnType<typeof AddNewProfileAC>

export const AddPostAC = () => {
	return {
		type: ADD_POST
	} as const
}


export const AddNewPostAC = (newMessage : string) => {
	return {
		type:ADD_NEW_MESSAGE,
		newMessage
	} as const
}

export const AddNewProfileAC = (profile: AxiosGetProfileType) => {
	return {
		type: ADD_NEW_PROFILE,
		profile
	} as const
}