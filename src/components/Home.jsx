import { Fragment, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import journalContext from "../journalContext"
import EntryList from "./EntryList";

export default function Home() {
  const { state: { categories } } = useContext(journalContext)

  return categories ? (
    <div>
      <h1>Home</h1>
      {categories.map(cat => (
        <Fragment key={cat.id}>
          <h3>{cat.name}</h3>
          <EntryList cat_id={cat.id} />
        </Fragment>
      ))}
      <Link to="/category">
        <button>Create New Entry</button>
      </Link>
    </div>
  ) : (<p>Loading ...</p>)
}
