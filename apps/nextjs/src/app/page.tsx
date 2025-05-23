import Link from "next/link";
import BookingLink from "./booking-link";
import { Logo } from "@repo/kn";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-serif">
      {/* Header: H1 at top, margin-bottom: 1.5rem (mb-6) */}
      <header className="w-full max-w-2xl mx-auto px-4 lg:px-0-0 flex flex-col sm:flex-row sm:items-center sm:justify-between py-10 gap-4 mb-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
          <Logo className="w-12 h-12 rounded-full text-background bg-foreground border-2 border-background/20" />
        </h1>
      </header>

      {/* Intro: section spacing, mb-14 for separation */}
      <section className="w-full max-w-2xl mx-auto px-4 lg:px-0-0 mb-14 space-y-8">
        <p className="text-lg/8 font-serif mb-4">
          Welcome! I’m <em>@neatonk</em>—a software developer and consultant
          creating digital products for the web. I’m also a husband, father,
          musician, audio engineer, and writer. Here you’ll find my thoughts and
          essays on software, tech, and creativity.
        </p>
        <p className="text-lg/7 font-serif mb-4">
          Have a project in mind?{" "}
          <BookingLink slug="intro">Book a call</BookingLink>
          —I’d love to discuss it with you.
        </p>
      </section>

      {/* Posts: mt-12 for vertical rhythm before H2, mb-6 after H2 */}
      {/* <section className="w-full max-w-2xl mx-auto px-4 lg:px-0-0 mt-12">
        <h2 className="text-3xl font-extrabold mb-6">Posts</h2>
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
      </section> */}

      {/* Spacer */}
      <div className="flex-1" />

      {/* Footer */}
      <footer className="w-full max-w-2xl mx-auto mt-16 py-8 text-center text-base font-sans flex flex-col items-center gap-4 px-4 lg:px-0-0">
        {/* Social links with icons */}
        <div className="flex gap-6 justify-center">
          <a
            href="https://github.com/neatonk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground text-foreground/60"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="24"
              height="24"
            >
              <title>GitHub</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
          <a
            href="https://x.com/neatonk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground text-foreground/60"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="24"
              height="24"
            >
              <title>X</title>
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/neatonk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground text-foreground/60"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="24"
              height="24"
            >
              <title>LinkedIn</title>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="https://bsky.app/profile/neatonk.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground text-foreground/60"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="24"
              height="24"
            >
              <title>Bluesky</title>
              <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z" />
            </svg>
          </a>
        </div>
        {/* Footer copyright */}
        <div className="text-xs text-foreground/25 mt-12">
          © {new Date().getFullYear()} Kevin Neaton
        </div>
      </footer>
    </div>
  );
}
