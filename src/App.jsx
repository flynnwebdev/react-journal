import { useReducer, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CategorySelection from "./components/CategorySelection";
import Home from "./components/Home";
import Nav from "./components/Nav"
import NewEntry from "./components/NewEntry";
import stateReducer from "./stateReducer";

const initialState = {
  categories: ['food', 'coding', 'other'],
  entries: []
}

function App() {
  // const [categories, setCategories] = useState(['food', 'coding', 'other'])
  // const [entries, setEntries] = useState([])
  const [state, dispatch] = useReducer(stateReducer, initialState)
  const { entries, categories } = state

  return (
    <BrowserRouter>
      <Nav />
      <h1>Journal</h1>
      <Routes>
        <Route path="/" element={<Home entries={entries} categories={categories} />} />
        <Route path="/category" element={<CategorySelection categories={categories} />} />
        <Route path="/entry/new/:cat_id" element={<NewEntry categories={categories} dispatch={dispatch} />} />
        <Route path="*" element={<h4>Page not found!</h4>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
