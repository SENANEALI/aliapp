
import './Assets/css/App.css';
import { Routes, Route } from "react-router-dom";
import Mutualise from "./Pages/mutualise/Mutualise.js";
import Cloud from "./Pages/cloud/Cloud.js";
import Contact from "./Pages/contact/Contact.js";
import Home from "./Pages/home/Home.js";
import Dedie from "./Pages/dedie/Dedie.js";
import Header from "./Components/header/Header.js";
//.. importer les composants de page, ici Home et Contact


function App() {
  return (
    
      <>

      <Header />
      
              
      <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"serveur-mutualise"} element={<Mutualise />} />
          <Route path={"serveur-dedie"} element={<Dedie />} />
          <Route path={"solution-cloud"} element={<Cloud />} />
          <Route path={"contact"} element={<Contact />} />
      </Routes>

      
      </>
      
    
  );
}

export default App;
