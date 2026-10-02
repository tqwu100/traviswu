import Link from "next/link";
import { navItems, site } from "@/data/site";

export default function Navbar() {
  return (
    <header className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-4">
      <Link href="/" className="text-[17px] font-semibold tracking-tight">
        {site.name}
      </Link>
      <nav className="flex flex-wrap items-baseline gap-6 text-[15px] text-white/90">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="hover:text-white">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
