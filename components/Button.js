import Link from "next/link";

export default function Button({
  href,
  children,
  external = false,
  className = "",
}) {
  const classes = `underline underline-offset-[5px] decoration-white/50 hover:decoration-white transition-colors ${className}`;

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
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
