import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <Link className='link' to='/'>HOME</Link>
            <Link className='link' to='/data'>DATA</Link>
        </div>
    )
}

export default Navigation