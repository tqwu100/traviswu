import Link from "next/link";
import { withBase } from "@/lib/basePath";

export default function ProjectCard({ title, href, image }) {
  return (
    <Link href={href} className="block">
      <h3 className="mb-4 text-[17px] font-medium tracking-tight text-white">
        {title}
      </h3>
      <div className="overflow-hidden bg-[#1a1a1a]">
        <img
          src={withBase(image)}
          alt=""
          className="aspect-[16/10] w-full object-cover"
        />
      </div>
    </Link>
  );
}
