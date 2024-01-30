import Navbar from "./components/navbar";
import DataTables from "./components/datatables";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <DataTables />
        <div className="pages">
          <Routes>
            <Route path="/" element={<h1>hello Data!</h1>}/>
          </Routes>
        </div>
      </BrowserRouter>
      
    </>
  );
}

export default App;

//test fugitive
