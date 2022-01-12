import React from "react";

export default function EntryList({ entries, cat_id }) {
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
