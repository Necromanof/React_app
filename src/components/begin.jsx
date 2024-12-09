import { Link } from 'react-router-dom'
import Add from './add'
import List from './componentList'

export default function begin(){
    return(
        <><h1 className="page_h1">Great ! You can Add or Consult the list of the components</h1>
            <ul>
                <p><Link to="/Add" className='selectionLink'>Add a component</Link></p>
                <p><Link to="/List" className='selectionLink'>List of components</Link></p>
            </ul>
        </>
    )
}