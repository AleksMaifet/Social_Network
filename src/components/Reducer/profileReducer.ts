import {v1} from "uuid";


const ADD_POST = "ADD-POST";
const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";


export type PostType = {
	id:string
	message:string
	likesCount:number
}
export type newPostTextType = string

export type ProfilePageType ={
	posts: PostType[]
	newPostText:newPostTextType
}


const initialState:ProfilePageType = {
		posts: [
			{id: v1(), message: 'Hi, how are you?', likesCount: 12},
			{id: v1(), message: 'It is my post', likesCount: 11},
			{id: v1(), message: 'blabla', likesCount: 11},
			{id: v1(), message: 'dada', likesCount: 11}
		],
		newPostText: ''
	}


export const profileReducer = (state = initialState,action:ActionTypes): ProfilePageType => {
	switch (action.type){
		case ADD_POST:
				return {...state,posts : [{id: v1(), message: state.newPostText, likesCount: 0},...state.posts],newPostText : ''};
		case ADD_NEW_MESSAGE:
			return {...state,newPostText : action.newMessage};
		default: return state
	}
}












export type ActionTypes = ReturnType<typeof AddPostAC> | ReturnType<typeof AddNewPostAC>

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