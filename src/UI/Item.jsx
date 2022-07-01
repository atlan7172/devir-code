import {useDispatch} from "react-redux";
import {changeItem, removeItem} from "../BLL/dataSlice";
import {useState} from "react";

const Item = ({text, id}) => {
    const dispatch = useDispatch()
    const [changeMode, setChangeMode] = useState(false)

    const saveChanges = (text) => {
        dispatch(changeItem({id, text}))
        setChangeMode(false)
    }

    const deleteItem = () => {
        dispatch(removeItem(id))
    }

    return (
        <div>
            {changeMode
                ? <input onBlur={(e) => saveChanges(e.target.value)} autoFocus={true}/>
                : <div onDoubleClick={() => setChangeMode(true)} className='item'>{text}</div>}
            <button className='remove-btn' onClick={deleteItem}>REMOVE</button>
        </div>

    )
}

export default Item