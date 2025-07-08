"use client";

import Modal from "@/components/Modal/Modal";
import { useQuery } from "@tanstack/react-query";
import { fetchNoteById } from "@/lib/api";
import { useParams, useRouter } from "next/navigation";
import NotePreview from "@/components/NotePreview/NotePreview";

export default function NoteDetailsClient() {
  const { id } = useParams();
  const router = useRouter();
  const parseId = Number(id);
  
  const handleCloseModal = () => {
    router.back();
  };

  const {
    data
  } = useQuery({
    queryKey: ["notes", parseId],
    queryFn: () => fetchNoteById(parseId),
    refetchOnMount: false,
  });
  
  return (
    <Modal onClose={handleCloseModal}>
      <NotePreview note={data} />
    </Modal>
  );
}