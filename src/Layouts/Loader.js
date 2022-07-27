import '../CSS/bouncer.css';
import {useContext , useRef} from 'react'
import {NewsContext} from '../News/NewsAPIContext'

function Loader() {
    const loader = useRef()
    return (
        <div className="bouncer" ref = {loader}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div> 
    )
}

export default Loader
