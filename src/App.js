
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './components/pages/home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/navbar';
import PageNotFound from './components/pages/pageNotFound';
import AddEdit from './components/pages/AddEdit';
import View  from './components/pages/view';
import Update from './components/pages/update';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
        <div >
          <Navbar />
          <Routes>
              <Route exact path='/' element={ <Home />}></Route>
               <Route exact path='/about' element={ <About />}></Route>
               <Route exact path='/contact' element={ <Contact />}></Route>
               <Route exact path='*' element={ <PageNotFound />}></Route>
               <Route exact path='/addEmployee' element={ <AddEdit />}></Route>
               <Route exact path='/update/:id' element={ <Update />}></Route>
               <Route exact path='/view/:id' element={ <View />}></Route>
          </Routes>
       
        </div>
    </Router>
  );
}

export default App;
