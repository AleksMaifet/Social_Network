import React, {ChangeEvent,KeyboardEvent, useState} from "react";

type EditableSpanType = {
	status:string
	callback:(status:string) => void
}


export const EditableSpan = React.memo(({callback,status}: EditableSpanType) => {
	const [editMode,setEditMode] = useState<boolean>(true)
	const [valueSpan , setValueSpan] = useState<string>('')

	const changeTitle = (e:ChangeEvent<HTMLInputElement>) => {
		if(e.currentTarget.value.length < 50){
			setValueSpan(e.currentTarget.value)
		}
	}
	const changeDoubleClick = () => {
		setEditMode(!editMode)
		setValueSpan(status)
	}
	const changeTitleBlur = () => {
		setEditMode(!editMode)
		callback(valueSpan)
	}
	const changeTitleEnter = (e:KeyboardEvent<HTMLInputElement>) => {
		if(e.key === 'Enter'){
			changeTitleBlur()
		}
	}

	return (
		<>
			{editMode ?
				<span onDoubleClick={changeDoubleClick}>{status}</span>
				:
				<input value={valueSpan} onChange={changeTitle}
							 onBlur={changeTitleBlur} onKeyPress={changeTitleEnter} autoFocus/>
			}
		</>
	)
})