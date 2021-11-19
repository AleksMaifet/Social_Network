import {v1} from "uuid";
import {Dispatch} from "redux";
import axios from "axios";
import {api, AxiosGetProfileType} from "../Api/Api";



const ADD_POST = "ADD-POST";
const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";
const ADD_NEW_PROFILE = 'ADD-NEW-PROFILE';
const SET_LOAD_PROFILE = 'SET-LOAD-PROFILE';


export type PostType = {
	id:string
	message:string
	likesCount:number
}
export type newPostTextType = string

export type initialProfileStateType = typeof initialStateProfile

const initialStateProfile = {
	posts: [
		{id: v1(), message: 'Hi, how are you?', likesCount: 12},
		{id: v1(), message: 'It is my post', likesCount: 11},
		{id: v1(), message: 'blabla', likesCount: 11},
		{id: v1(), message: 'dada', likesCount: 11}
	],
	newPostText: '',
	isLoad:false,
	profile:null as AxiosGetProfileType | null
}


export const profileReducer = (state = initialStateProfile, action: ActionTypes):initialProfileStateType => {
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
		case SET_LOAD_PROFILE:
			return {
				...state,
				...action.payload
			}
		default:
			return state
	}
}










export type ActionTypes = ReturnType<typeof AddPostAC> | ReturnType<typeof AddNewPostAC> | ReturnType<typeof AddNewProfileAC> | ReturnType<typeof setLoadProfileAC>

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

export const setLoadProfileAC = (isLoad:boolean) => {
	return {
		type: SET_LOAD_PROFILE,
		payload: {isLoad}
	} as const
}


export const AddNewProfileTC = (userID:string = '2') => {
	return async (dispatch:Dispatch) => {
		 const {data} = await api.getProfile(+userID)
				dispatch(AddNewProfileAC(data))
	}
}