"use client";

import { useState } from "react";
import { navLinks, waLink, defaultWaMessage, siteConfig } from "@/lib/data";
import { WhatsAppIcon, RodIcon } from "./icons";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-navy-900/5 bg-sand-50/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#beranda" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-900 text-aqua-400">
            <RodIcon className="h-5 w-5" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-navy-900 sm:text-xl">
            {siteConfig.brand}
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-[15px] font-medium text-navy-800/80 transition-colors hover:text-teal-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={waLink(defaultWaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-sunset-500 px-5 py-2.5 font-body text-sm font-semibold text-white shadow-tag transition-transform hover:-translate-y-0.5 hover:bg-sunset-600 sm:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Sewa Sekarang
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy-900/10 text-navy-900 lg:hidden"
          >
            <span className="sr-only">{open ? "Tutup menu" : "Buka menu"}</span>
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
              {open ? (
                <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" className="border-t border-navy-900/5 bg-sand-50 px-4 pb-4 lg:hidden">
          <ul className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 font-body text-[15px] font-medium text-navy-800 hover:bg-teal-600/10"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={waLink(defaultWaMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-sunset-500 px-5 py-2.5 font-body text-sm font-semibold text-white"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Sewa Sekarang
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
