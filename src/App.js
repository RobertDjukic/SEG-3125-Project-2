import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Tabs from './components/Tabs'
import { Route, Routes } from 'react-router-dom';
import Home from './Screens/home'
import Programs from './Screens/programs'
import About from './Screens/coaches-schedule'
import FAQ from './Screens/FAQ'
import Registration from './Screens/reigstration'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      
      <Tabs />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="Home" element={<Home/>}/>
          <Route path="Programs" element={<Programs/>}/>
          <Route path="About" element={<About/>}/>
          <Route path="FAQ" element={<FAQ/>}/>
          <Route path="Registration" element={<Registration/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
