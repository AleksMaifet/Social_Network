import React, {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
	AddNewProfileTC,
	initialProfileStateType,
	setNewProfileStatusTC,
	updateNewProfileStatusTC
} from "../../../Reducer/profileReducer";
import {reducersHandlerType} from "../../../Reducer/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import userPhoto from "../../../../img/default-avatar.png";
import {EditableSpan} from "../../../EditableSpan/EditableSpan";



export type MatchParams = {
	userId:string
}
type PropsType = RouteComponentProps<MatchParams>

export const ProfileInfo = withRouter(React.memo ((props:PropsType)=> {
	const profile = useSelector<reducersHandlerType, initialProfileStateType>(state => state.profilePage)
	const dispatch = useDispatch()
		useEffect(() => {
			let userId = props.match.params.userId
			dispatch(AddNewProfileTC(userId))
			dispatch(setNewProfileStatusTC(userId))
		}, [dispatch, props.match.params.userId])
		const ChangeProfileStatus = useCallback((status:string) => {
			dispatch(updateNewProfileStatusTC(status))
		},[dispatch])
	return (
			<div>
				<div>
					<img
						src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'/>
				</div>
				<div>
					<img src={profile.profile?.photos.large ? profile.profile?.photos.large : userPhoto}/>
					<div><span style={{fontWeight: 'bold'}}>Name: </span> {profile.profile?.fullName}</div>
					{
						profile.profile?.aboutMe &&
					<div><span style={{fontWeight: 'bold'}}>About me: </span> {profile.profile?.aboutMe}</div>
					}
					<div>
						<span style={{fontWeight: 'bold'}}>Status: </span><EditableSpan callback={ChangeProfileStatus} status={profile.status}/>
					</div>
				</div>
			</div>
	)
}))