import { ReactNode } from "react";

type Props = {
  id?: string;
  pages: ReactNode[];
  pageIds?: Array<string | undefined>;
};

export function StoryboardScrollSection({ id, pages, pageIds }: Props) {
  return (
    <div id={id} className="relative">
      {pages.map((page, i) => (
        <div key={i} className="sticky top-0 h-svh w-full">
          {pageIds?.[i] ? (
            <div
              id={pageIds[i]}
              aria-hidden="true"
              className="absolute left-0 top-0 h-px w-px pointer-events-none"
            />
          ) : null}
          {page}
        </div>
      ))}
    </div>
  );
}
