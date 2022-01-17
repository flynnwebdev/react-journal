import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import journalContext from "../journalContext"
import EntryList from "./EntryList";

export default function Home() {
  const { state: { categories } } = useContext(journalContext)

  return (
    <div>
      <h1>Home</h1>
      {categories.map((cat, index) => (
        <>
          <h3>{cat}</h3>
          <EntryList cat_id={index} />
        </>
      ))}
      <Link to="/category">
        <button>Create New Entry</button>
      </Link>
    </div>
  );
}
