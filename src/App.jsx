
import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Home1 from './pages/Home1'
import Navbar from './components/Navbar';
import Todolist from './pages/Todolist';
import ViewRecipe from './pages/ViewRecipe';
import Services from './pages/Services';
import About from './pages/About';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <div className='mb-11'> <Navbar/></div>
      <Routes>
      <Route path='/' element = {<Home1/>}/>
      <Route path='/Services' element = {<Services/>}/>
      <Route path='/About' element = {<About/>}/>
      <Route path='/ViewRecipe' element = {<ViewRecipe/>}/>
      {/* <Route path='/to-do-list' element = {<Todolist/>}/> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
