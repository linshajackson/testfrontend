
import React,{useState, useEffect} from 'react';
import Axios from 'axios';
import {useHistory, useParams, Link} from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const Update = () => {

    const [user,setUser] = useState({
        name: "",
        age: "",
        country: "",
        position: "",
        wage: ""
    });

  
  //const history = useHistory();
  const navigate = useNavigate();
  const { id } = useParams();

  const { name, age, country, position, wage } = user;  
  const  onInputChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
   Axios.get('http://localhost:3001/employees/'+id)
   .then((response)  =>
   {
      
    // Set initial values for form fields
    setName(response.data[0].name);
    setAge(response.data[0].age);
    setCountry(response.data[0].country);
    setPosition(response.data[0].position);
    setWage(response.data[0].wage);
   } )
   .catch(error => {

      console.log(console.error);
   });

  }, [id]);

   const updateEmployee = (e) => 
   {   
    console.log(newname);

      Axios.put('http://localhost:3001/update/'+id,
         {
            name: newname,
            age: age,
            country: country,
            position: position,
            wage: wage,
         }).then((response) => 
         {
            console.log(response);
            alert("Successfully Updated a record");
   
         }).catch((err) => toast.error(err.response.data));
         setTimeout(() => navigate("/"), 500);
            

   };
   
   
   

    return(

       <div className="App">
         <form>
            <div className="information"> 
               <label>Name</label> <input type="text" value={newname} onChange={(event) => {setName(event.target.value);}} />
               <label>Age</label> <input type="number" value={age} onChange={(event) => {setAge(event.target.value);}} />
               <label>Country</label> <input type="text" value={country} onChange={(event) => {setCountry(event.target.value);}} />
               <label>Position</label> <input type="text" value={position} onChange={(event) => {setPosition(event.target.value);}}  />
               <label>Wage (year)</label> <input type="number" value={wage} onChange={(event) => {setWage(event.target.value);}} />
               <button onClick={updateEmployee} > UPDATE </button>
     
               <Link to={'/'}>
                  <button className='btn-goback'>Goback</button>
               </Link>
            </div>
        </form>  
       </div> 

    );
}

export default Update;