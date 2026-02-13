"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full bg-zinc-950 py-10 shadow-md ">
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <ul className="flex flex-col sm:flex-row justify-center gap-4 text-sm font-medium text-gray-100">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Projects", path: "/project" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`px-4 py-2 rounded-xl transition transform hover:scale-105 ${
                  pathname === item.path
                    ? "bg-indigo-500 text-white"
                    : "bg-gray-800 hover:bg-gray-600"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
