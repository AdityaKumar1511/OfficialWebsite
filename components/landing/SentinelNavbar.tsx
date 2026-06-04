import React from 'react';
import Link from 'next/link';

const NAV_LINKS = [
  { name: 'Events', href: '/events' },
  { name: 'Team', href: '/team' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function SentinelNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 lg:px-16 py-5">
      {/* Left: Logo */}
      <Link href="/" className="text-foreground text-xl font-semibold tracking-tight select-none">
        WnCC
      </Link>

      {/* Center: Links */}
      <div className="hidden md:flex gap-8 items-center">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Right: empty spacer for balance */}
      <div className="w-16 hidden md:block" />
    </nav>
  );
}

