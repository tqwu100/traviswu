import Button from "@/components/Button";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/15 pt-8">
      <div className="flex gap-6 text-[15px]">
        <Button href={`mailto:${site.email}`}>email</Button>
        <Button href={site.linkedin} external>
          linkedin
        </Button>
      </div>
    </footer>
  );
}
