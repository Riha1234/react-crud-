import React from 'react'
import {Link} from 'react-router-dom'
import './Navbbar.css'

const Navbarr=()=> {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bgg">
                <div className="container">
                   <a className="navbar-brand" href="#">User</a>
                  <Link className="btn btn-outline-dark" to="/adduser">Add User</Link>
             </div>
          </nav>
            
        </div>
    )
}

export default Navbarr
