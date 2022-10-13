import './App.css';
import Navbar from './Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element={<Navbar />}/>
      {/* <Route exact path="/about" element={<About/>}/>
      <Route exact path="/registration" element={<Registration/>}/>
      <Route exact path="/important-dates" element={<ImpDates/>}/>
      <Route exact path="/programme-committee" element={<Committee/>}/> */}
    </Routes>
    </div>
  );
}

export default App;
