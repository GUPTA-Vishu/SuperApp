
import './App.css';
import Onboarding from './Components/Onboarding';
import Register from './Components/Register';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Entertain from './Components/Entertain';






function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Register/>}/>
      <Route path='/Onboarding' element={<Onboarding/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path='/Entertain' element={<Entertain/>}/>

      
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
