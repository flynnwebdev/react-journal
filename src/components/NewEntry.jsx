import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function NewEntry({ categories, dispatch }) {
  const params = useParams();
  const [entry, setEntry] = useState("");
  const navigate = useNavigate();

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
