const getNotes = async () => {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage30"
  );
  const { items } = await res.json();
  return items;
};

const NotesPage = async () => {
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
};

const Note = ({ note }) => {
  const { id, title, content, created } = note || {};

  return (
    <Link href={`/notes/${id}`}>
      <div>
        <h2>{title}</h2>
        <h5>{content}</h5>
        <h2>{created}</h2>
      </div>
    </Link>
  );
};

export default NotesPage;
