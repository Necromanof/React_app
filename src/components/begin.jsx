import { Link } from 'react-router-dom'
import Add from './add'
import List from './componentList'

export default function begin(){
    return(
        <><h1 className="page_h1">Tkt on arrive</h1>
            <li><Link to="/Add">Add a component</Link></li>
            <li> <Link to="/List">List of components</Link></li>
        </>
    )
}