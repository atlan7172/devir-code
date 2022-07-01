import {useDispatch, useSelector} from "react-redux";
import Item from "./Item";
import {useState} from "react";
import {addItem, clearAll} from "../BLL/dataSlice";

const Data = () => {
    const items = useSelector((state) => state.data.items)
    const id = items.length + 1
    const dispatch = useDispatch()

    const [text, setText] = useState('')

    const addPost = () => {
        dispatch(addItem({id, text}))
        setText('')
    }

    const deleteAll = () => {
        dispatch(clearAll())
    }

    const itemsList = items.map(item => {
        return <Item key={item.id} text={item.text} id={item.id}/>
    })

    return (<div>
        <button onClick={deleteAll}>DELETE ALL</button>
        {itemsList}
        <textarea className='form-add' value={text} onChange={(e) => setText(e.target.value)}/>
        <button onClick={addPost}>ADD</button>
    </div>)
}

export default Data