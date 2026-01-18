import PocketBase from "pocketbase";
import Note from "@/lib/components/Note";

export const dynamic = "auto",
  dynamicParams = true,
  revalidate = 0,
  fetchCache = "auto",
  runtime = "nodejs",
  preferredRegion = "auto";

async function getNotes() {
  // Next approach
  // const res = await fetch(
  //   "http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30",
  //   { cache: "no-store" }
  // );
  // const data = await res.json();
  // return data?.items as any[];

  // PocketBase approach
  const db = new PocketBase("http://127.0.0.1:8090");

  db.autoCancellation(false);

  db.authStore.save(process.env.POCKETBASE_KEY!);

  const notes = await db.collection("notes").getList();

  return notes.items;
}

export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <div>
      <h1>Notes</h1>

      <div>
        {notes?.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>
    </div>
  );
}
