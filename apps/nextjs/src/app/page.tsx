import BookingLink from "./booking-link";
import { Logo } from "@repo/kn";

export default function Home() {
  return (
    <>
      {/* Intro: section spacing, mb-14 for separation */}
      <section className="w-full max-w-2xl mx-auto px-4 lg:px-0-0 mb-14 space-y-8">
        <p className="text-lg/8 font-serif mb-4">
          Welcome! I’m <em>@neatonk</em>—a software developer and consultant
          creating digital products for the web. I’m also a husband, father,
          musician, audio engineer, and founder of Abstract Goods.
        </p>
        <p className="text-lg/7 font-serif mb-4">
          Have a project in mind?{" "}
          <BookingLink slug="intro">Book a call</BookingLink>
          —I’d love to discuss it with you.
        </p>
      </section>

      <section className="w-full max-w-2xl mx-auto px-4 lg:px-0-0 mb-14 space-y-8">
        <h2 className="text-2xl font-extrabold mb-6">About Abstract Goods</h2>
        <p className="text-md/7 font-serif mb-4">
          I started Abstract Goods LLC in 2023 to deepen my focus on creative
          work—specifically in the music space. I’ve been lucky enough to work
          with early-stage music startups like Oscillator and Mesa, as well as
          musician-led collaboratives like CC0lab.{" "}
        </p>
        <p className="text-md/7 font-serif mb-4">
          I work as both a consultant and a developer. Hourly bookings are best
          for planning, scoping, or technical guidance. Weekly bookings are for
          hands-on engineering and ongoing work. Everything runs through{" "}
          <a
            href="https://cal.com/neatonk/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
          >
            Cal.com
          </a>
          —no proposals, contracts, or email chains. Just pick a slot, pay up
          front, and we’re set.
        </p>
        <p className="text-md/7 font-serif mb-4">
          If you’re building something that touches music—directly or
          indirectly—I’d love to hear about it.
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
    </>
  );
}
