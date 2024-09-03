import './App.css'
import { Outlet } from 'react-router-dom'
import Navigation from "./Navigation";

function App() {

  return (
    <>
    <Navigation />
      
      
      <div>

      <Outlet />
    
      </div>
    </>
  )
}

export default App