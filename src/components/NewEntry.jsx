import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import journalContext from "../journalContext"

export default function NewEntry() {
  const params = useParams();
  const [entry, setEntry] = useState("");
  const navigate = useNavigate();
  const { state: { categories }, dispatch } = useContext(journalContext)
  const category = categories.find(cat => cat.id == params.cat_id)

  async function submit(e) {
    e.preventDefault();
    const res = await fetch('http://localhost:4000/entries', {
      method: 'post',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content: entry, cat_id: params.cat_id })
    })
    const journalEntry = await res.json()

    dispatch({
      type: "addEntry",
      entry: journalEntry
    });
    navigate("/");
  }

  return category ? (
    <div>
      <h2>New Entry in {category.name}</h2>
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
  ) : (<p>Loading ...</p>)
}
