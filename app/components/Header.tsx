import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-ui items-center justify-between gap-6 px-6 py-4 md:px-10">
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/yes-logo.png"
            alt="YeS Logo"
            width={52}
            height={52}
            className="h-11 w-11 shrink-0 object-contain md:h-13 md:w-13"
          />
          <h1 className="text-sm font-semibold leading-tight text-foreground md:text-base">
            Young Entrepreneurs
            <br />
            of Singapore
          </h1>
        </Link>

        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-4 text-sm font-medium text-foreground md:gap-6 md:text-base">
            <li>
              <Link href="/" className="transition-colors hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/events"
                className="transition-colors hover:text-primary"
              >
                Events
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
