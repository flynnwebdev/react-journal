import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import journalContext from "../journalContext"

export default function NewEntry() {
  const params = useParams();
  const [entry, setEntry] = useState("");
  const navigate = useNavigate();
  const { state: { categories }, dispatch } = useContext(journalContext)

  function submit(e) {
    e.preventDefault();
    dispatch({
      type: "addEntry",
      cat_id: params.cat_id,
      text: entry,
    });
    navigate("/");
  }

  return (
    <div>
      <h2>New Entry in {categories[params.cat_id]}</h2>
      <form onSubmit={submit}>
        <div>
          <textarea
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            rows="10"
            cols="60"
          ></textarea>
        </div>
        <button>Create New Entry</button>
      </form>
    </div>
  );
}
