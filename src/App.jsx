
import './App.css';
import Navbar from './components/NavBar';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Products from './components/Products';


function App() {
 
  return (
    <>
     <h1 className='text-3xl font-bold text-brandPrimary text-center'></h1>
     <Navbar  />
     <Home   />
     <Services />
     <About />
     <Products />
    </>
  )
}

export default App
