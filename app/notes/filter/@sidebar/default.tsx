import css from "./SidebarNotes.module.css";
import Link from "next/link";

const tags: string[] = [
    "All",
    "Todo",
    "Work",
    "Personal",
    "Meeting",
    "Shopping",
];
  
export default function NotesSidebar() {

    return (
        <ul className={css.menuList}>
            {tags.map(tag => (
                <li key={tag} className={css.menuItem}>
                    <Link
                        href={`/notes/filter/${tag}`} className={css.menuLink}>
                        {tag}
                    </Link>
                </li>
            ))}
        </ul>
    );
};