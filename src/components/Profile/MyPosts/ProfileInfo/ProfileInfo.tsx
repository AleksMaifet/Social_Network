import React, {useEffect} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {AddNewProfileAC, initialStateType} from "../../../Reducer/profileReducer";
import {reducersHandlerType} from "../../../Reducer/redux-store";
import {useRouteMatch} from "react-router-dom";

type ContactsType = {
	github: string
	vk: string
	facebook: string
	instagram: string
	twitter: string
	website: string
	youtube: string
	mainLink: string
}

export type AxiosGetProfileType = {
	aboutMe:string
	userId: number
	lookingForAJob: boolean
	lookingForAJobDescription: string
	fullName: string
	contacts: ContactsType
	photos: {
		small: string
		large: string
	}
}
export type MatchParams = {
	userId:string
}


export function ProfileInfo() {
	const profile = useSelector<reducersHandlerType, initialStateType>(state => state.profilePage)
	const dispatch = useDispatch()
	const match = useRouteMatch<MatchParams>()
		useEffect(() => {
			let userId = match.params.userId
			if(!userId) userId = '2'
			axios.get<AxiosGetProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then((res) => {
				dispatch(AddNewProfileAC(res.data))
			})
		},[dispatch, match.params.userId])
		return (
			<div>
				<div>
					<img
						src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'/>
				</div>
				<div>
					<img src={profile.profile?.photos.large}/>
					<div><span style={{fontWeight:'bold'}}>Name:</span> {profile.profile?.fullName}</div>
					{profile.profile?.aboutMe && <div><span style={{fontWeight:'bold'}}>Status:</span> {profile.profile?.aboutMe}</div>}
				</div>
			</div>
		)
}