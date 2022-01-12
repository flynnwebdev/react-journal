import { useEffect } from "react";
import { Link } from "react-router-dom";
import EntryList from "./EntryList";

export default function Home({ entries, categories }) {
  useEffect(() => console.log("useEffect: Home"), []);
  console.log(entries);
  return (
    <div>
      <h1>Home</h1>
      {categories.map((cat, index) => (
        <>
          <h3>{cat}</h3>
          <EntryList entries={entries} cat_id={index} />
        </>
      ))}
      <Link to="/category">
        <button>Create New Entry</button>
      </Link>
    </div>
  );
}
