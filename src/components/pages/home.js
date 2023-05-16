import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios'; 
import './home.css';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FaArrowUp, FaArrowDown} from 'react-icons/fa';


const Home = () => {
    const [name,setName]= useState("");
    const [age,setAge]= useState(0);
    const [country,setCountry]= useState("");
    const [position,setPosition]= useState("");
    const [wage,setWage]= useState(0);
    const [no,setNo]= useState(0);

    const [data,setData]= useState([]);
    const navigate = useNavigate();
    const [sorted,setSorted] = useState({sorted:"id",reversed: false});
    const [searchTerm, setSearchTerm] = useState('');



    const loadData = () => {
        Axios.get('http://localhost:3001/employees').then((response) =>
        {
        console.log(response);
        setData(response.data);
        });
    };

  
  

    useEffect(() => {
        loadData();
    }, []);

    const deleteEmployee = (id) => {
        if(window.confirm("Are you sure that you wanted to delete the record"))
        {  
                      
            Axios.delete('http://localhost:3001/delete/'+id).then((response) =>
            {
            alert("Delete");
            setTimeout(() => loadData(), 500);
            });
        }   
      };

      const sortById = () => {
        setSorted({sorted:"id",reversed: !sorted.reversed});
        const usersCopy = [...data];
        usersCopy.sort((userA,userB) => {
    
          if(sorted.reversed){
            return userA.id - userB.id;
          }
          return userB.id - userA.id;
        });
        setData(usersCopy);
    
      };

      const sortByName = () => {

        setSorted({sorted:"name",reversed: !sorted.reversed});
        const usersCopy = [...data];
        usersCopy.sort((userA,userB) => {
          
          if(sorted.reversed){
            return userB.name.localeCompare(userA.name);
          }
    
         return userA.name.localeCompare(userB.name);
        });
        setData(usersCopy);
      };

      const sortByAge = () => {
        setSorted({sorted:"age",reversed: !sorted.reversed});
        const usersCopy = [...data];
        usersCopy.sort((userA,userB) => {
    
          if(sorted.reversed){
            return userA.age - userB.age;
          }
          return userB.age - userA.age;
        });
        setData(usersCopy);
    
      };

      const sortByCountry = () => {

        setSorted({sorted:"country",reversed: !sorted.reversed});
        const usersCopy = [...data];
        usersCopy.sort((userA,userB) => {
          
          if(sorted.reversed){
            return userB.country.localeCompare(userA.country);
          }
    
         return userA.country.localeCompare(userB.country);
        });
        setData(usersCopy);
      };

      const sortByPosition = () => {

        setSorted({sorted:"position",reversed: !sorted.reversed});
        const usersCopy = [...data];
        usersCopy.sort((userA,userB) => {
          
          if(sorted.reversed){
            return userB.position.localeCompare(userA.position);
          }
    
         return userA.position.localeCompare(userB.position);
        });
        setData(usersCopy);
      };

      const sortByWage = () => {
        setSorted({sorted:"wage",reversed: !sorted.reversed});
        const usersCopy = [...data];
        usersCopy.sort((userA,userB) => {
    
          if(sorted.reversed){
            return userA.wage - userB.wage;
          }
          return userB.wage - userA.wage;
        });
        setData(usersCopy);
    
      };


      const renderArrow = () => {
        if (sorted.reversed){
          return <FaArrowUp />;
        }
        return <FaArrowDown />;
      };
  
      const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
      };

      const search = (event) => {
 
        setData(data.filter((item) => {
          event.preventDefault();
          if (searchTerm.trim() === '') {
            loadData();
          }
          else
          {
          return(
            
        item.name.toLowerCase().includes(event.target.value.toLowerCase())
            
          );
          }
      }));
      };
       
   
    return(
      <section class="content-section">
        <div class="side-panel">
            <a class="side-panel-item">Side panel item 1</a>
            <a class="side-panel-item">Side panel item 2</a>
            <a class="side-panel-item">Side panel item 3</a>
            <a class="side-panel-item">Side panel item 4</a>
            <a class="side-panel-item">Side panel item 5</a>

        </div>
        <div class="employee-section">
       
            <div class="employee-container">
            <h1 class="heading">Employee Details</h1>
            </div>
            
            <div class="table-section">
                    <div class="table-header">
                        <div class="search-section">
                            <input type="text" placeholder="Search Employee" id="search-bar" class="search-bar"  aria-label="Search"
                             onKeyUp={search}
                               onChange={handleInputChange}/> 
                            <button class="search-button" onClick={search}>Search</button>
                        </div>
                        <Link to="/addEmployee">
                         <button class="add-emp-btn">Add Employee</button>
                        </Link>
                    </div>
                    <div class="table-body">
   {/*<!-- employee heading section -->  */}  
                                   
                   
                   
                    <div class="employee-heading">   
                    
                
                        
                        <span class="emp-number" onClick={sortById}>No {sorted.sorted === "id" ? renderArrow() :null}</span>
                        <span class="emp-name" onClick={sortByName}>Name {sorted.sorted === "name" ? renderArrow() :null}</span>
                        <span class="emp-age" onClick={sortByAge}>Age {sorted.sorted === "age" ? renderArrow() :null}</span>
                        <span class="emp-country" onClick={sortByCountry}>Country {sorted.sorted === "country" ? renderArrow() :null}</span>
                        <span class="emp-position" onClick={sortByPosition}>Position {sorted.sorted === "position" ? renderArrow() :null}</span>
                        <span class="emp-wage" onClick={sortByWage}>Wage {sorted.sorted === "wage" ? renderArrow() :null}</span>
                        
                        <span class="button-section">
                                <a class="edit-button no-cursor">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22"
                                        fill="none">
                                        <path
                                            d="M16.975 6.92323L14.5775 4.52573C14.2646 4.23181 13.8546 4.06317 13.4254 4.05188C12.9963 4.04058 12.5779 4.18743 12.25 4.46448L4.37502 12.3395C4.09219 12.6247 3.91608 12.9985 3.87627 13.3982L3.50002 17.047C3.48823 17.1751 3.50486 17.3043 3.54872 17.4253C3.59258 17.5463 3.66259 17.6561 3.75377 17.747C3.83553 17.8281 3.93249 17.8922 4.0391 17.9358C4.14571 17.9793 4.25986 18.0014 4.37502 18.0007H4.45377L8.10252 17.6682C8.50221 17.6284 8.87605 17.4523 9.16127 17.1695L17.0363 9.29448C17.3419 8.97158 17.5071 8.54067 17.4956 8.0962C17.4841 7.65172 17.2969 7.22992 16.975 6.92323ZM7.94502 15.9182L5.32002 16.1632L5.55627 13.5382L10.5 8.65573L12.8625 11.0182L7.94502 15.9182ZM14 9.84573L11.655 7.50073L13.3613 5.75073L15.75 8.13948L14 9.84573Z"
                                            fill="#5B5858" />
                                    </svg>
                                    <span class="on-hover-show">Edit</span>
                                </a>
                                <button class="delete-button no-cursor">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                                        fill="none">
                                        <path
                                            d="M15.7505 4.50006H12.0005V3.24756C11.9829 2.76742 11.7756 2.31385 11.4242 1.98628C11.0727 1.6587 10.6057 1.48385 10.1255 1.50006H7.87549C7.3953 1.48385 6.92828 1.6587 6.57681 1.98628C6.22533 2.31385 6.01808 2.76742 6.00049 3.24756V4.50006H2.25049C2.05158 4.50006 1.86081 4.57908 1.72016 4.71973C1.57951 4.86038 1.50049 5.05115 1.50049 5.25006C1.50049 5.44897 1.57951 5.63974 1.72016 5.78039C1.86081 5.92104 2.05158 6.00006 2.25049 6.00006H3.00049V14.2501C3.00049 14.8468 3.23754 15.4191 3.6595 15.841C4.08145 16.263 4.65375 16.5001 5.25049 16.5001H12.7505C13.3472 16.5001 13.9195 16.263 14.3415 15.841C14.7634 15.4191 15.0005 14.8468 15.0005 14.2501V6.00006H15.7505C15.9494 6.00006 16.1402 5.92104 16.2808 5.78039C16.4215 5.63974 16.5005 5.44897 16.5005 5.25006C16.5005 5.05115 16.4215 4.86038 16.2808 4.71973C16.1402 4.57908 15.9494 4.50006 15.7505 4.50006ZM7.50049 3.24756C7.50049 3.12756 7.65799 3.00006 7.87549 3.00006H10.1255C10.343 3.00006 10.5005 3.12756 10.5005 3.24756V4.50006H7.50049V3.24756Z"
                                            fill="#5B5858" />
                                    </svg>
                                    <span class="on-hover-show">Delete</span>
                                </button>
                            </span>
                     
                     </div> 

  {/*<!-- employee data section -->  */}  
                                   
                                
                {data.map((val,key) => {
                return (

                  <div class="employee-data-box">
                    
                        <span class="emp-number">{val.id}</span>
                        <span class="emp-name">{val.name}</span>
                        <span class="emp-age">{val.age}</span>
                        <span class="emp-country" >{val.country}</span>
                        <span class="emp-position">{val.position}</span>
                        <span class="emp-wage">{val.wage}</span>
                        <td>
                        <span class="button-section">
                            <Link to={'/update/'+val.id}>
                                
                                <a class="edit-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22"
                                        fill="none">
                                        <path
                                            d="M16.975 6.92323L14.5775 4.52573C14.2646 4.23181 13.8546 4.06317 13.4254 4.05188C12.9963 4.04058 12.5779 4.18743 12.25 4.46448L4.37502 12.3395C4.09219 12.6247 3.91608 12.9985 3.87627 13.3982L3.50002 17.047C3.48823 17.1751 3.50486 17.3043 3.54872 17.4253C3.59258 17.5463 3.66259 17.6561 3.75377 17.747C3.83553 17.8281 3.93249 17.8922 4.0391 17.9358C4.14571 17.9793 4.25986 18.0014 4.37502 18.0007H4.45377L8.10252 17.6682C8.50221 17.6284 8.87605 17.4523 9.16127 17.1695L17.0363 9.29448C17.3419 8.97158 17.5071 8.54067 17.4956 8.0962C17.4841 7.65172 17.2969 7.22992 16.975 6.92323ZM7.94502 15.9182L5.32002 16.1632L5.55627 13.5382L10.5 8.65573L12.8625 11.0182L7.94502 15.9182ZM14 9.84573L11.655 7.50073L13.3613 5.75073L15.75 8.13948L14 9.84573Z"
                                            fill="#5B5858" />
                                    </svg>
                                    <span class="on-hover-show">Edit</span>
                                    </a>
                            </Link>

                            <button class="delete-button" onClick={() => {deleteEmployee(val.id);}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                                        fill="none">
                                        <path
                                            d="M15.7505 4.50006H12.0005V3.24756C11.9829 2.76742 11.7756 2.31385 11.4242 1.98628C11.0727 1.6587 10.6057 1.48385 10.1255 1.50006H7.87549C7.3953 1.48385 6.92828 1.6587 6.57681 1.98628C6.22533 2.31385 6.01808 2.76742 6.00049 3.24756V4.50006H2.25049C2.05158 4.50006 1.86081 4.57908 1.72016 4.71973C1.57951 4.86038 1.50049 5.05115 1.50049 5.25006C1.50049 5.44897 1.57951 5.63974 1.72016 5.78039C1.86081 5.92104 2.05158 6.00006 2.25049 6.00006H3.00049V14.2501C3.00049 14.8468 3.23754 15.4191 3.6595 15.841C4.08145 16.263 4.65375 16.5001 5.25049 16.5001H12.7505C13.3472 16.5001 13.9195 16.263 14.3415 15.841C14.7634 15.4191 15.0005 14.8468 15.0005 14.2501V6.00006H15.7505C15.9494 6.00006 16.1402 5.92104 16.2808 5.78039C16.4215 5.63974 16.5005 5.44897 16.5005 5.25006C16.5005 5.05115 16.4215 4.86038 16.2808 4.71973C16.1402 4.57908 15.9494 4.50006 15.7505 4.50006ZM7.50049 3.24756C7.50049 3.12756 7.65799 3.00006 7.87549 3.00006H10.1255C10.343 3.00006 10.5005 3.12756 10.5005 3.24756V4.50006H7.50049V3.24756Z"
                                            fill="#5B5858" />
                                    </svg>
                                    <span class="on-hover-show">Delete</span>
                                </button>
                        
                         </span>         
                            
                        </td>
                      
                     </div> 
                );
                
            })}
               
           
            
          </div>
        </div>
        
     </div>
  </section>  

    );
}

export default Home;

