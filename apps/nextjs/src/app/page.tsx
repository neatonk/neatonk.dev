import Link from "next/link";
import BookingLink from "./booking-link";
import { Logo } from "@repo/kn";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-serif">
      {/* Header */}
      <header className="w-full max-w-2xl mx-auto px-4 lg:px-0-0 flex flex-col sm:flex-row sm:items-center sm:justify-between py-10 gap-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
          <Logo className="w-12 h-12 rounded-full text-background bg-foreground border-2 border-background/20" />
        </h1>
      </header>

      {/* Intro */}
      <section className="w-full max-w-2xl mx-auto px-4 lg:px-0-0 mb-14 space-y-8">
        <p className="text-lg/7 font-serif">
          I’m Kevin—a software developer and consultant creating digital
          products for the web. I’m also a husband, father, musician, audio
          engineer, and writer. Here you’ll find my thoughts and essays on
          software, tech, and creativity.
        </p>
        <p className="text-lg/7 font-serif">
          Have a project in mind?{" "}
          <BookingLink slug="intro">Book a call</BookingLink>
          —I’d love to discuss it with you.
        </p>
      </section>

      {/* Posts */}
      <section className="w-full max-w-2xl mx-auto px-4 lg:px-0-0">
        <h2 className="text-3xl font-extrabold mb-6 mt-12">Posts</h2>
        <ul className="flex flex-col gap-6 pl-0 list-none">
          <li>
            <Link
              href="#"
              className="block text-2xl font-serif hover:underline no-underline mb-1"
            >
              Hello World
            </Link>
            <div className="text-base font-sans text-foreground/60">
              April 24, 2024
            </div>
          </li>
        </ul>
      </section>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Footer */}
      <footer className="w-full max-w-2xl mx-auto mt-16 py-8 border-t border-foreground/20 text-center text-base font-sans flex flex-col items-center gap-4 px-4 lg:px-0-0">
        <div className="flex gap-6 justify-center">
          <a
            href="https://x.com/neatonk"
            target="_blank"
            rel="noopener noreferrer"
            className="font-normal text-foreground/60 hover:text-foreground"
          >
            X
          </a>
          <a
            href="https://github.com/neatonk"
            target="_blank"
            rel="noopener noreferrer"
            className="font-normal text-foreground/60 hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/neatonk"
            target="_blank"
            rel="noopener noreferrer"
            className="font-normal text-foreground/60 hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href="https://bsky.app/profile/neatonk.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="font-normal text-foreground/60 hover:text-foreground"
          >
            Bluesky
          </a>
        </div>
        <div className="text-xs text-foreground/25 mt-12">
          © {new Date().getFullYear()} Kevin Neaton
        </div>
      </footer>
    </div>
  );
}
