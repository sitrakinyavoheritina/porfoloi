export function Arrow({ className, direction = "right" }: { className?: string; direction?: "right" | "up-right" | "down" | "left" }) {
  const rotate = { right: 0, "up-right": -45, down: 90, left: 180 }[direction];
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className={className ?? "h-3.5 w-3.5"}
      style={{ transform: `rotate(${rotate}deg)` }}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M2 8h11M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
