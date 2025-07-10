"use client";

import Modal from "@/components/Modal/Modal";
import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";
import { useParams, useRouter } from "next/navigation";
import NotePreview from "@/components/NotePreview/NotePreview";

export default function NotePreviewClient() {
  const { id } = useParams();
  const router = useRouter();
  const parseId = String(id);
  
  const handleCloseModal = () => {
    router.back();
  };

  const {
    data,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['notes', parseId],
    queryFn: () => fetchNoteById(parseId),
    refetchOnMount: false,
  });
  
  return (
    <Modal onClose={handleCloseModal}>
      {isLoading && <p>Loading note details...</p>}
      {isError && <p>Failed to load note details.</p>}
      {data && <NotePreview note={data} />}
    </Modal>
  );
}