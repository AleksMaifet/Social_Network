import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AddNewProfileTC, initialProfileStateType} from "../../../Reducer/profileReducer";
import {reducersHandlerType} from "../../../Reducer/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import userPhoto from "../../../../img/default-avatar.png";



export type MatchParams = {
	userId:string
}
type PropsType = RouteComponentProps<MatchParams>

export const ProfileInfo = withRouter(React.memo ((props:PropsType)=> {
	const profile = useSelector<reducersHandlerType, initialProfileStateType>(state => state.profilePage)
	const dispatch = useDispatch()
		useEffect(() => {
			let userId = props.match.params.userId
			dispatch(AddNewProfileTC(userId ))
		}, [dispatch, props.match.params.userId])
	return (
			<div>
				<div>
					<img
						src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'/>
				</div>
				<div>
					<img src={profile.profile?.photos.large ? profile.profile?.photos.large : userPhoto}/>
					<div><span style={{fontWeight: 'bold'}}>Name:</span> {profile.profile?.fullName}</div>
					{profile.profile?.aboutMe &&
					<div><span style={{fontWeight: 'bold'}}>Status:</span> {profile.profile?.aboutMe}</div>}
				</div>
			</div>
	)
}))