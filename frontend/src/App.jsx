
import Navbar from "./components/navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<h1>hello World!</h1>}/>
          </Routes>
        </div>
      </BrowserRouter>
      
    </>
  );
}

export default App;

