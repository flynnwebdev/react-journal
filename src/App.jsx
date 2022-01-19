import { useEffect, useReducer, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CategorySelection from "./components/CategorySelection";
import Home from "./components/Home";
import Nav from "./components/Nav";
import NewEntry from "./components/NewEntry";
import stateReducer from "./stateReducer";
import journalContext from "./journalContext";

const initialState = {
  categories: [],
  entries: [],
};

function App() {
  // const [categories, setCategories] = useState(['food', 'coding', 'other'])
  // const [entries, setEntries] = useState([])
  const [state, dispatch] = useReducer(stateReducer, initialState);
  const { entries, categories } = state;

  useEffect(async () => {
    const res = await fetch('http://localhost:4000/categories')
    const data = await res.json()
    dispatch({
      type: 'setCategories',
      data
    })

    const entries_res = await fetch('http://localhost:4000/entries')
    const entries_data = await entries_res.json()
    dispatch({
      type: 'setEntries',
      data: entries_data
    })
  }, [])

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
