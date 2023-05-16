

import React,{useState, useEffect} from 'react';
import Axios from 'axios';
import {useHistory, useParams, Link} from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const View = () =>
{  const [user,setUser] = useState([]);
   
    const { id } = useParams();
    useEffect(() => {
        Axios.get('http://localhost:3001/employees/'+id)
        .then((response)  =>
        {
         setUser({...response.data[0]}); 
         
        } )
        .catch(error => {
     
           console.log(console.error);
        });
     
       }, [id]);
    return(

        <div style={{marginTop: "150px"}}>
            <div className="card">
                <div className='card-header'><p>User Contact</p></div>
            </div>
            <div className='container'>
                <strong>ID:</strong>
                <span>{id}</span>
                <br />
                <br />
                <strong>Name:</strong>
                <span>{user.name}</span>
                <br />
                <br />
                <strong>Age:</strong>
                <span>{user.age}</span>
                <br />
                <br />
                <strong>Country:</strong>
                <span>{user.country}</span>
                <br />
                <br />
                <strong>Position:</strong>
                <span>{user.position}</span>
                <br />
                <br />
                <strong>Wage:</strong>
                <span>{user.wage}</span>
                <br />
                <br />
            </div>
        </div>
    )
}
export default View;