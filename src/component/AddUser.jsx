import React,{useState,useEffect} from 'react'
import { useForm } from "react-hook-form";
import { useHistory,useParams } from 'react-router-dom';
import classNames from 'classnames';
import axios from 'axios';
import moment from 'moment';


const AddUser=()=>{
    let history = useHistory()
    const {id} = useParams();
     const[ user, setUser]=useState({
         userId:"",
         username:"",
         email:"",
         createdat:moment().format('YYYY-MM-DD: hh:mm A'),
         updatedat:moment().format('YYYY-MM-DD: hh:mm A'),
         usertype:""

     })
const {userId,username,email,usertype}= user;

const onInputChange = e =>{
      setUser({...user,[e.target.name]: e.target.value})
}

const onSubmit= async  e =>{
    // e.preventDefault();
    

    await axios.post("http://localhost:3005/users", user);
     
    history.push("/")
}

    useEffect(()=>{
        loadUser();
  },[]);
  
  const onSubbmit= async e =>{
      
     user.updatedat=moment().format('YYYY-MM-DD: hh:mm A');
      await axios.put(`http://localhost:3005/users/${id}`,user);
      
      history.push("/")
  }
  

  
    const { handleSubmit ,formState: { errors } }= useForm(
       {mode: "onTouched",}
      );
         const loadUser = async ()=>{
        const result= await axios.get(`http://localhost:3005/users/${id}`);
        setUser(result.data);
    }
    
    return(
        <div>
             <div className="container py-5">
             <div className="card border-0 shadow w-50 p-3 ">
             <form onSubmit={handleSubmit(id?onSubbmit:onSubmit)} >   
             <div className="text-center">
                <h1><label htmlFor="Signup">{id?'Update':'Create'}</label></h1>
             </div>
             <div className="form-group">
              <label htmlFor="userid">User ID</label>
              <input type="text" 
              className="form-control"
              placeholder="Enter User ID"
              
              required
                           name="userId"
                          value={userId}
                         onChange={e=> onInputChange(e)}
                         />
              </div>
              <br/>
             <div className="form-group">
              <label htmlFor="username">User Name</label>
              <input type="text" 
              className="form-control"
              placeholder="Enter User Name"
              
              required
                           name="username"
                          value={username}
                         onChange={e=> onInputChange(e)}
                         /> 
              </div>
              <br/>
              <div className="form-group">
              
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email"
               className="form-control"

                placeholder="Enter email"
                required
                name="email"
                value={email}
                onChange={e=> onInputChange(e)}
                />
             </div>
             <br/>
             <div className="form-check-inline">
             <label className="form-check-label" for="flexRadioDefault2">
               New User
               </label>
             <input className="ms-1" type="radio"  
                         name="usertype"          
                         value='NEW_USER'
                         required
                         onChange={e=> onInputChange(e)}
                         checked={usertype === 'NEW_USER'}/>
             
             <label className="form-check-label ps-5" for="flexRadioDefault2">
              Premium User</label>
             
             <input className="ms-1"
             required
             type="radio" name="usertype"
                          value='PREMIUM_USER'
                         onChange={e=> onInputChange(e)}
                         checked={usertype === 'PREMIUM_USER'}
                         />
               </div>
             <br/><br/>
             <div className="text-center">
             <button type="submit" className="btn btn-primary ">{id?'Update':'Create'}</button>
             </div>
             </form>
              </div>
             </div>
        </div>
    )
}

export default AddUser