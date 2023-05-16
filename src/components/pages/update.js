
import React,{useState, useEffect} from 'react';
import Axios from 'axios';
import {useHistory, useParams, Link} from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const Update = () => {

  const [name,setName]= useState("");
  const [age,setAge]= useState(0);
  const [country,setCountry]= useState("");
  const [position,setPosition]= useState("");
  const [wage,setWage]= useState(0);

  //const history = useHistory();
  const navigate = useNavigate();
  const { id } = useParams();

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
   
    
      Axios.put('http://localhost:3001/update/'+id,
         {
            name: name,
            age: age,
            country: country,
            position: position,
            wage: wage,
         }).then((response) => 
         {
            console.log(response);
            alert("Successfully Updated a record");
   
         }).catch((err) => toast.error(err.response.data));
         
   };
   
   
   

    return(

       <div className="App">

         <form >
               <section class="add-emp-section">
                  <h2>Update Employee</h2>
                  <div class="employee-container">
                     <div class="data-section">
                        <div class="padding-top">
                              <span class="inline-flex-col">
                                 <label for="name" class="labels">Name</label>
                                 <input type="text" id="name" class="input-design" value={name} onChange={(event) => {setName(event.target.value);}} />
                                 
                              </span>
                              <span class="inline-flex-col">
                                 <label for="age" class="labels">Age</label>
                                 <input min="18" max="90" type="number" id="age" class="input-design" value={age} onChange={(event) => {setAge(event.target.value);}}/>
                              </span>
                        </div>
                        <div class="padding-top">
                              <span class="inline-flex-col">
                                 <label for="position" class="labels">Position</label>
                                 <input type="text" id="position" class="input-design" value={position} onChange={(event) => {setPosition(event.target.value);}} / >
                              </span>
                              <span class="inline-flex-col">
                                 <label for="wage" class="labels">Wage</label>
                                 <input id="wage" class="wage input-design" value={wage} onChange={(event) => {setWage(event.target.value);}}/>
                              </span>
                        </div>
                        <div class="padding-top">
                              <span class="inline-flex-col">
                                 <label for="country" class="labels">Country</label>
                                 <input type="text" id="country" class="input-design" value={country} onChange={(event) => {setCountry(event.target.value);}}/ >
                              </span>
                        </div>
                        <div class="emp-button-section padding-top">
                              <span class="input-buttons">
                              <Link to={'/'}>
                                 <button class="cancel">Cancel</button>
                              </Link>   
                                 <button onClick={updateEmployee}  class="save">UPDATE</button>
                              </span>
                        </div>
                     </div>
                  </div>
            </section>
       </form>

       
    </div> 

    );
}

export default Update;