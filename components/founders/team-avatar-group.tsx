"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { FounderTeamMember } from "@/lib/founder-companies";
import { cn } from "@/lib/utils";

interface TeamAvatarGroupProps {
  members: FounderTeamMember[];
  maxVisible?: number;
  className?: string;
}

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

interface MemberDialogProps {
  member: FounderTeamMember;
  onClose: () => void;
}

function MemberDialog({ member, onClose }: MemberDialogProps) {
  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${member.name} details`}
    >
      <div
        className="absolute inset-0 bg-neutral-950/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-md rounded-2xl border border-neutral-200 bg-white p-6 shadow-xl">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-full p-1.5 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-700"
        >
          <X className="size-4" aria-hidden="true" />
        </button>

        <div className="flex items-start gap-4">
          <Avatar className="size-16 shrink-0 ring-1 ring-neutral-200">
            <AvatarImage src={member.image} alt={member.name} />
            <AvatarFallback>{getInitials(member.name)}</AvatarFallback>
          </Avatar>

          <div className="flex flex-1 flex-col gap-1 pr-6">
            <h3 className="text-lg font-semibold tracking-tight text-neutral-950">
              {member.name}
            </h3>
            {member.role ? (
              <p className="text-sm font-medium text-primary">{member.role}</p>
            ) : null}
            {member.bio ? (
              <p className="mt-1 text-sm leading-relaxed text-neutral-500">
                {member.bio}
              </p>
            ) : null}

            {member.linkedin ? (
              <div className="mt-3 flex items-center gap-2">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on LinkedIn`}
                  className="rounded-full border border-neutral-200 p-2 text-neutral-500 transition-colors hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
                >
                  <LinkedInIcon className="size-4" />
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export function TeamAvatarGroup({
  members,
  maxVisible = 4,
  className,
}: TeamAvatarGroupProps) {
  const [activeMember, setActiveMember] = useState<FounderTeamMember | null>(
    null
  );

  if (members.length === 0) {
    return (
      <span className="text-sm text-neutral-400">Team details coming soon</span>
    );
  }

  const visibleMembers = members.slice(0, maxVisible);
  const hiddenCount = Math.max(members.length - visibleMembers.length, 0);

  return (
    <>
      <TooltipProvider delayDuration={100}>
        <div className={cn("flex -space-x-3", className)}>
          {visibleMembers.map((member) => (
            <Tooltip key={member.id}>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  onClick={() => setActiveMember(member)}
                  aria-label={`View ${member.name}`}
                  className="rounded-full transition-transform hover:z-10 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                >
                  <Avatar className="size-10 border-2 border-white ring-1 ring-neutral-200">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{getInitials(member.name)}</AvatarFallback>
                  </Avatar>
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <div className="flex flex-col">
                  <span className="font-medium">{member.name}</span>
                  {member.role ? (
                    <span className="text-[0.7rem] text-neutral-300">
                      {member.role}
                    </span>
                  ) : null}
                </div>
              </TooltipContent>
            </Tooltip>
          ))}

          {hiddenCount > 0 ? (
            <div className="flex size-10 items-center justify-center rounded-full border-2 border-white bg-neutral-100 text-xs font-medium text-neutral-600 ring-1 ring-neutral-200">
              +{hiddenCount}
            </div>
          ) : null}
        </div>
      </TooltipProvider>

      {activeMember ? (
        <MemberDialog
          member={activeMember}
          onClose={() => setActiveMember(null)}
        />
      ) : null}
    </>
  );
}
