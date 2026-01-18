import Link from "next/link";

function Note({ note }: any) {
  const { id, title, content, created } = note || {};

  return (
    <Link href={`/notes/${id}`}>
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <small>{created}</small>
      </div>
    </Link>
  );
}

export default Note;
