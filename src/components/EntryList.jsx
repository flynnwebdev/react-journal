import React, { useContext } from "react";
import JournalContext from "../journalContext"

export default function EntryList({ cat_id }) {
  const { entries } = useContext(JournalContext)

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
