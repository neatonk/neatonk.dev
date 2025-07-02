import Logo from "@repo/kn";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full max-w-2xl mx-auto px-4 lg:px-0-0 flex flex-col sm:flex-row sm:items-center sm:justify-between py-10 gap-4 mb-6">
      <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
        <Link href="/">
          <Logo className="w-12 h-12 rounded-full text-background bg-foreground border-2 border-background/20" />
        </Link>
      </h1>
    </header>
  );
}
