
import React,{useState, useEffect} from 'react';
import Axios from 'axios';
import {useHistory, useParams, Link} from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './style.css';


const AddEdit = () => {

  const [name,setName]= useState("");
  const [age,setAge]= useState(0);
  const [country,setCountry]= useState("");
  const [position,setPosition]= useState("");
  const [wage,setWage]= useState(0);

  //const history = useHistory();
  const navigate = useNavigate();
  const { id } = useParams();
  
  const [errors,setErrors] = useState({});
  const [values, setValues] = useState({
   name: '',
   age: '',
   country: '',
   position: '',
   wage: ''
  })


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

  const validation = (values) => {
   
   const email_pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
   const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})$/;

   if(name === "")
   {
      errors.name = "Name is Required"
   }

   if (!age) {
      errors.age = 'The age is required';
  }
  else if (age < 18) {
   errors.age = 'Must be over 18';
  }

  if(country === "")
  {
     errors.country = "Country is Required"
  }
  
  if(position === "")
  {
     errors.position = "Position is Required"
  }
  
  if(!wage)
  {
     errors.position = "Position is Required"
  }

 return errors;


  };

  const handleSubmit = (e) => {
  
   e.preventDefault();
   if(!id)
   {
   
    if(!name || !age || !country || !position || !wage)
      {
         setErrors(validation(values));
      }
     else
      { console.log("save");
         Axios.post('http://localhost:3001/create',{
            name: name,
            age: age,
            country: country,
            position: position,
            wage: wage,
            }).then(() => {
               console.log("Success");
               alert("Successfully Added a record");
      
            }).catch((err) => toast.error(err.response.data));
            setTimeout(() => navigate("/"), 500);
         }
   }   
   else
   {
        
         Axios.put('http://localhost:3001/update/'+id,
         {
            name: name,
            age: age,
            country: country,
            position: position,
            wage: wage,
         }).then(() => 
         {
            console.log("Success");
            alert("Successfully Updated a record");
   
         }).catch((err) => toast.error(err.response.data));
         setTimeout(() => navigate("/"), 500);
            
      }

    
   
  }

  function handleInput(event)
  {
   const newObj = {...values, [event.target.name]: event.target.value}
   setValues(newObj)
   
  }

  const addEmployee = (e) => {
   
   
      Axios.post('http://localhost:3001/create',{
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage,
      }).then(() => {
         console.log("Success");
         alert("Successfully Added a record");

      }).catch((err) => toast.error(err.response.data));
      setTimeout(() => navigate("/"), 500);
         
   
    
   };

     

    return(
      <div className="App">
            <form onSubmit={handleSubmit}>
               <section class="add-emp-section">
                  <h2>Add new Employee</h2>
                  <div class="employee-container">
                     <div class="data-section">
                        <div class="padding-top">
                              <span class="inline-flex-col">
                                 <label for="name" class="labels">Name</label>
                                 <input type="text" id="name" class="input-design" value={name} onChange={(event) => {setName(event.target.value);}} />
                                 {errors.name && <p style={{color: 'red'}}>{errors.name}</p>}
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
                                 <input  id="wage" class="wage input-design" value={wage} onChange={(event) => {setWage(event.target.value);}}/>
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
                                 <button onClick={handleSubmit} value={id ? "Update": "Save"} class="save">Save</button>
                              </span>
                        </div>
                     </div>
                  </div>
            </section>
       </form>  
</div>
    );
}

export default AddEdit;