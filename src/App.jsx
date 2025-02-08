import { useState } from "react";
import Header from "./components/header/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";

import About from "./pages/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact={true} path="/" element={<HomePage/>}/>
          <Route exact={true} path="/about" element={<About/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
