import { cn } from "@/lib/utils";
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
      className={cn("underline decoration-2 underline-offset-4", className)}
    >
      {children}
    </Link>
  );
}
