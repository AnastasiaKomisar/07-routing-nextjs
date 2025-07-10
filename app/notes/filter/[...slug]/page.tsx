import NotesClient from "./Notes.client";
import { fetchNotes } from "@/lib/api";

type FilteredNotesPageProps = {
  params: Promise<{ slug: string[] }>;
};

export default async function FilteredNotesPage({params,}: FilteredNotesPageProps) {
  const { slug } = await params;
  const tag = slug[0] === "All" ? undefined : slug[0];
  const initialData = await fetchNotes('', 1, 12, tag); 
  return <NotesClient initialData={initialData} tag={tag} />;
}
