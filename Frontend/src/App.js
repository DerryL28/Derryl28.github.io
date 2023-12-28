import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import NavBar from "./components/NavigationBar";
import Cv from "./Pages/Cv";
import Home from "./Pages/Home"
import Uts from "./Pages/Uts"


function App() {
  return (
    <BrowserRouter>
    
      <div class="container-fluid">
        
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/uts" element={<Uts />} />
          <Route path="/uas" element={<UserList />} />
          <Route path="/uas/add" element={<AddUser />} />
          <Route path="/uas/edit/:id" element={<EditUser />} />
          <Route path="/cv" element={<Cv />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
