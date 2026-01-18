"use client";

import { useState } from "react";

export default function CreateNote() {
  const [title, setTitle] = useState<string>();

  return (
    <form>
      <h3>Create new Note</h3>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
}
