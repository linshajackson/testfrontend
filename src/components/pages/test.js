<nav className="navbar navbar-expand-lg navbar-dark bg-primary container">
      
<div className="container-fluid">
<a className="navbar-brand" href="#">
React CRUD
</a>
<button
className="navbar-toggler"
type="button"
data-bs-toggle="collapse"
data-bs-target="#navbarSupportedContent"
aria-controls="navbarSupportedContent"
aria-expanded="false"
aria-label="Toggle navigation"
>
<span className="navbar-toggler-icon" />
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
<ul className="navbar-nav me-auto mb-2 mb-lg-0">
    <li className="nav-item">
    <Link className="nav-link active" aria-current="page" to="/">
        Home
    </Link>
    </li>

    <li className="nav-item">
    <Link className="nav-link active" aria-current="page" to="/about">
        About
    </Link>
    </li>

    <li className="nav-item">
    <Link className="nav-link active" aria-current="page" to="/contact">
        Contact
    </Link>
    </li>
   
</ul>
<form className="d-flex">
    <input
    className="form-control me-2"
    type="search"
    placeholder="Search"
    aria-label="Search"
    />
    <button className="btn btn-outline-success" type="submit">
    Search
    </button>
</form>
</div>
</div>


</nav>




<table className='table is-striped is-fullwidth'> 
                <thead>
                <tr>
                <th onClick={sortById}>No {sorted.sorted === "id" ? renderArrow() :null}</th>
                <th onClick={sortByName}>Name {sorted.sorted === "name" ? renderArrow() :null}</th>
                <th onClick={sortByAge}>Age {sorted.sorted === "age" ? renderArrow() :null}</th>
                <th onClick={sortByCountry}>Country {sorted.sorted === "country" ? renderArrow() :null}</th>
                <th onClick={sortByPosition}>Position {sorted.sorted === "position" ? renderArrow() :null}</th>
                <th onClick={sortByWage}>Wage {sorted.sorted === "wage" ? renderArrow() :null}</th>
                </tr>
                </thead>
                <tbody>
                      {data.map((val,key) => {
                      return (
                          <tr>
                              <td>{val.id}</td>
                              <td>{val.name}</td>
                              <td>{val.age}</td>
                              <td>{val.country}</td>
                              <td>{val.position}</td>
                              <td>{val.wage}</td>
                              <td>
                                  <Link to={'/update/'+val.id}>
                                      <button className='btn btn-edit'>Edit</button>
                                  </Link>
                              
                                      <button className='btn btn-delete' onClick={() => {deleteEmployee(val.id);}}>Delete</button>
                          
                                  <Link to={'/view/'+val.id}>
                                      <button className='btn btn-edit'>View</button>
                                  </Link>
                              </td>
                          </tr>   
                      );
                      
                  })}
                </tbody>
            </table>