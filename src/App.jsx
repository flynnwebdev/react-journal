import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CategorySelection from "./components/CategorySelection";
import Home from "./components/Home";
import Nav from "./components/Nav";
import NewEntry from "./components/NewEntry";
import JournalContext from "./journalContext";

function App() {
  const [categories, setCategories] = useState(["food", "coding", "other"]);
  const [entries, setEntries] = useState([]);

  function addEntry(cat_id, text) {
    const journalEntry = { cat_id: cat_id, text: text };
    setEntries([journalEntry, ...entries]);
  }

  return (
    <JournalContext.Provider value={{categories, entries}}>
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
            element={<CategorySelection categories={categories} />}
          />
          <Route
            path="/entry/new/:cat_id"
            element={<NewEntry categories={categories} addEntry={addEntry} />}
          />
          <Route path="*" element={<h4>Page not found!</h4>} />
        </Routes>
      </BrowserRouter>
    </JournalContext.Provider>
  );
}

export default App;
