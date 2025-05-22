import Link from "next/link";

export default function BookingLink({
  children,
  className,
  slug = "intro",
}: {
  children: React.ReactNode;
  className?: string;
  slug?: string;
}) {
  return (
    <Link
      href={`https://cal.com/neatonk/${slug}`}
      target="_blank"
      rel="noopener noreferrer"
      className="underline decoration-2 underline-offset-4"
    >
      {children}
    </Link>
  );
}
