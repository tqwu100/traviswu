import Link from "next/link";
import { withBase } from "@/lib/basePath";

export default function Button({
  href,
  children,
  external = false,
  className = "",
}) {
  const classes = `underline underline-offset-[5px] decoration-white/50 hover:decoration-white transition-colors ${className}`;

  if (external || href.endsWith(".pdf")) {
    return (
      <a
        href={href.endsWith(".pdf") ? withBase(href) : href}
        className={classes}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
