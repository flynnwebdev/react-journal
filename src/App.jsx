import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CategorySelection from "./components/CategorySelection";
import Home from "./components/Home";
import Nav from "./components/Nav"
import NewEntry from "./components/NewEntry";

function App() {
  const [categories, setCategories] = useState(['food', 'coding', 'other'])

  return (
    <BrowserRouter>
      <Nav />
      <h1>Journal</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<CategorySelection categories={categories} />} />
        <Route path="/entry/new/:category" element={<NewEntry />} />
        <Route path="*" element={<h4>Page not found!</h4>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
