import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full px-2 py-2">
      <div className="mx-auto flex w-full max-w-ui border-b border-primary/10 bg-background/50 border backdrop-blur rounded-full items-center justify-between gap-6 px-6 py-2 md:px-10">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/yes-logo.png"
            alt="YeS Logo"
            width={52}
            height={52}
            className="h-10 w-10 shrink-0 object-contain md:h-12 md:w-12"
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
