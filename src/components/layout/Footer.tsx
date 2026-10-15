import { profile } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-site flex flex-col gap-3 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-2.5 text-sm text-paper-dim">
          <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
          {profile.fullName} · © {new Date().getFullYear()}
        </p>
        <p className="font-mono text-xs text-paper-mute">Full-Stack · Web · Mobile · Backend · AI</p>
      </div>
    </footer>
  );
}
