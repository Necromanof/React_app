import { Link } from 'react-router-dom'
import Add from './add'
import List from './componentList'

export default function begin(){
    return(
        <><h1 className="page_h1">Great ! You can Add or Consult the list of the components</h1>
            <li><Link to="/Add">Add a component</Link></li>
            <li> <Link to="/List">List of components</Link></li>
        </>
    )
}