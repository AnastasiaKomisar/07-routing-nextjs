import React from "react";
import css from './LayoutNotes.module.css';

interface NotesListProps {
    children: React.ReactNode;
    sidebar: React.ReactNode;
};

export default function NotesLayout({ children, sidebar }: NotesListProps) {
    return (
        <div className={css.container}>
            <aside className={css.sidebar}>{sidebar}</aside>
            <main className={css.notesWrapper}>{children}</main>
        </div>
    );
}