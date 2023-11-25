import "./index.css";
import Mainbody from "./Components/Mainbody";
import Navbar from "./Components/Navbar";
import { useState } from "react";
function App() {
  const[search,setSearch] = useState("");
  return (
    <div className="App">
      <Navbar Search={setSearch}/>
      <Mainbody query={search} />
    </div>
  );
}

export default App;
