interface NotePageProps {
  params: Promise<{ id: string }>;
}

async function getNote(noteId: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
    {
      next: { revalidate: 10 },
    }
  );

  const data = await res.json();
  return data;
}

export default async function NotePage({ params }: any) {
  const { id } = await params;
  const note = await getNote(id);

  return (
    <div>
      <h1>notes/{note.id}</h1>
      <div>
        <h3>{note.title}</h3>
        {/* <h5>{note.content}</h5> */}
        <small>{note.created}</small>
      </div>
    </div>
  );
}
