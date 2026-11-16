"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Item = { slug: string; name: string };

export function SiteNav({ entries }: { entries: Item[] }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [entriesOpen, setEntriesOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  const closeAll = () => {
    setMenuOpen(false);
    setEntriesOpen(false);
  };

  useEffect(() => {
    if (!entriesOpen) return;
    const close = (event: MouseEvent | KeyboardEvent) => {
      if (event instanceof KeyboardEvent) {
        if (event.key === "Escape") setEntriesOpen(false);
        return;
      }
      if (!dropdownRef.current?.contains(event.target as Node))
        setEntriesOpen(false);
    };
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", close);
    };
  }, [entriesOpen]);

  const current = (href: string) => (pathname === href ? "page" : undefined);
  const inEntries = pathname.startsWith("/entries");

  return (
    <nav className="nav" aria-label="Main">
      <button
        type="button"
        className="nav-toggle"
        aria-expanded={menuOpen}
        aria-controls="nav-list"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? "Close" : "Menu"}
      </button>
      <ul
        id="nav-list"
        className={menuOpen ? "nav-list is-open" : "nav-list"}
        onClick={(event) => {
          if ((event.target as HTMLElement).closest("a")) closeAll();
        }}
      >
        <li>
          <Link href="/" aria-current={current("/")}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" aria-current={current("/about")}>
            About me
          </Link>
        </li>
        <li className="nav-dropdown" ref={dropdownRef}>
          <button
            type="button"
            className={inEntries ? "nav-entries is-current" : "nav-entries"}
            aria-expanded={entriesOpen}
            aria-controls="nav-entries-list"
            onClick={() => setEntriesOpen((open) => !open)}
          >
            Entries
            <svg viewBox="0 0 12 8" width="12" height="8" aria-hidden>
              <path
                d="M1 1.5l5 5 5-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <ul
            id="nav-entries-list"
            className={entriesOpen ? "nav-sub is-open" : "nav-sub"}
          >
            {entries.map((entry) => (
              <li key={entry.slug}>
                <Link
                  href={`/entries/${entry.slug}`}
                  aria-current={current(`/entries/${entry.slug}`)}
                >
                  {entry.name}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <Link href="/conclusion" aria-current={current("/conclusion")}>
            Conclusion
          </Link>
        </li>
      </ul>
    </nav>
  );
}
