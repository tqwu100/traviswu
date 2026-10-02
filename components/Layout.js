import Navbar from "@/components/Navbar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto w-full max-w-[1080px] px-8 py-16 sm:px-12 sm:py-20">
        <Navbar />
        <main className="mt-16 sm:mt-20">{children}</main>
      </div>
    </div>
  );
}
