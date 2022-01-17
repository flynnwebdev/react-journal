import { useReducer, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CategorySelection from "./components/CategorySelection";
import Home from "./components/Home";
import Nav from "./components/Nav";
import NewEntry from "./components/NewEntry";
import stateReducer from "./stateReducer";
import journalContext from "./journalContext";

const initialState = {
  categories: ["food", "coding", "other"],
  entries: [],
};

function App() {
  // const [categories, setCategories] = useState(['food', 'coding', 'other'])
  // const [entries, setEntries] = useState([])
  const [state, dispatch] = useReducer(stateReducer, initialState);
  const { entries, categories } = state;

  return (
    <journalContext.Provider value={{state, dispatch}}>
      <BrowserRouter>
        <Nav />
        <h1>Journal</h1>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/category"
            element={<CategorySelection />}
          />
          <Route
            path="/entry/new/:cat_id"
            element={<NewEntry />}
          />
          <Route path="*" element={<h4>Page not found!</h4>} />
        </Routes>
      </BrowserRouter>
    </journalContext.Provider>
  );
}

export default App;
