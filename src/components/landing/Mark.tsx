// Remnant Security mark: a shield outline with a keyline, drawn once and reused.
export function Mark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 21.5s7.5-3.6 7.5-9.5V5.2L12 2.5 4.5 5.2V12c0 5.9 7.5 9.5 7.5 9.5Z" />
      <path d="M12 7v9" />
    </svg>
  );
}
