import {BrowserRouter,Routes,Route} from "react-router-dom";
import Books from "./components/Books";
import Add from "./components/Add";
import Update from "./components/Update";
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />}/>
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
