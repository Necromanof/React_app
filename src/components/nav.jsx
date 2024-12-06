import { Link, } from 'react-router-dom'
import "../App.css"

function nav(){
    return(
        <>
        <nav className='nav'>
            <h1>Bienvenue sur mon site</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Begin">Begin</Link></li>
                <li><Link to="/About">About</Link></li>
            </ul>
        </nav>
    </>    
    )
}


export default nav;