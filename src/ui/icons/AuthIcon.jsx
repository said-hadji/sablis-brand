export function AuthIcon({ size = 22, strokeWidth = 1, className }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="8"
        r="3.25"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />

      <path
        d="M5.5 20C5.5 16.45 8.41 14 12 14C15.59 14 18.5 16.45 18.5 20"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}