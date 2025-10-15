"use client";

import Link from "next/link";
import { ModeToggle } from "../../components/ui/ModeToggle";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "../../components/ui/menubar";
import { Menu, User2 } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-background mt-6 text-foreground flex items-center px-4 py-2 gap-4">
      <span className="text-4xl font-extrabold whitespace-nowrap flex-shrink-0">
        New blog.
      </span>
      <div className="flex-1 flex justify-center items-center">
        <Menubar className="hidden md:flex mx-auto" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
          <MenubarMenu>
            <MenubarTrigger asChild>
              <Link href="/">Página inicial</Link>
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger asChild>
              <Link href="/new">Novo post</Link>
            </MenubarTrigger>
          </MenubarMenu>
        </Menubar>
      </div>

      <div className="md:hidden relative ml-auto">
        <button
          onClick={() => setOpen((o) => !o)}
          className="p-2 rounded hover:bg-accent focus:outline-none"
        >
          <Menu size={28} />
        </button>
        {open && (
          <div className="absolute right-0 mt-2 w-40 bg-popover border rounded shadow-lg z-50 flex flex-col">
            <Link
              href="/"
              className="px-4 py-2 hover:bg-accent"
              onClick={() => setOpen(false)}
            >
              Página inicial
            </Link>
            <Link
              href="/new"
              className="px-4 py-2 hover:bg-accent"
              onClick={() => setOpen(false)}
            >
              Novo post
            </Link>
          </div>
        )}
      </div>
      <div className="flex items-center gap-2 flex-shrink-0 ml-2">
        <ModeToggle />
        <Link href="/profile" className="p-1.5 rounded-md border bg-background shadow transition-colors hover:bg-accent focus:outline-none flex items-center justify-center">
            <User2 size={21} strokeWidth={1.5} className="text-foreground" />
        </Link>
      </div>
    </nav>
  );
}
