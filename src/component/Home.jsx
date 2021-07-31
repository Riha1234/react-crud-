import React,{useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './Navbbar.css'
const Home=()=>{
    const [users, setUser]=useState([]);
   useEffect(()=>{
       loadUsers();
   },[]);
    const loadUsers=async ()=>{
        const result= await axios.get("http://localhost:3005/users");
        setUser(result.data.reverse())
    }
    

        return(
            <>
            <div className="container">
            <div className="py-4">
            <table className="table border shadow">
              <thead className="tab">
                   <tr>
                       <th scope="col">S No</th>
                       <th scope="col">User ID</th>
                       <th scope="col">User Name</th>
                       <th scope="col">Email</th>
                       <th scope="col">Created At</th>
                       <th scope="col">Updated At</th>
                       <th scope="col">User Type</th>
                       <th>Action</th>
    
                   </tr>
               </thead>
                <tbody>
                    {
                        users.map((user, index)=>(
                    <tr>
                        <th scope="row">{index+1}</th>
                        <td>{user.userId}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.createdat}</td>
                        <td>{user.updatedat}</td> 
                        <td>{(user.usertype === 'PREMIUM_USER') ? 'Premium User' : 'New User' }</td>
                        <td>
                            
                            <Link className="btn btn-ouline-primary mr-2" to={`/users/edituser/${ user.id}`}>Edit</Link>
                            
                            </td>
                    </tr>))}
                </tbody>
            </table>
            </div>
            </div>
            </>
        )
}

export default Home