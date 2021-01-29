import React, {useState, useEffect} from 'react'

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.target.value)
    }
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])


    return (
        <>
            {editMode?
                (
                    <div>
                        <input
                            autoFocus
                            onBlur={deactivateEditMode}
                            onChange={onStatusChange}
                            value={status || 'Ваш статус'}
                        />
                    </div>
                ):(
                    <div>
                        <span onDoubleClick={activateEditMode}>
                            {status}
                        </span>
                    </div>
            )}
        </>
    )

}

export {
    ProfileStatus
}