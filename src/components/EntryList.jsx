import React, { useContext } from "react";
import journalContext from "../journalContext"

export default function EntryList({ cat_id }) {
  const { state: { entries } } = useContext(journalContext)

  return (
    <ul>
      {entries
        .filter((entry) => entry.cat_id == cat_id)
        .map((entry) => (
          <li>{entry.text}</li>
        ))}
    </ul>
  );
}
