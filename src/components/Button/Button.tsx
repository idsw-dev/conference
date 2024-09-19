import type { Color } from "../../@types/components";

interface Props {
  children: any;
  color: Color;
  href?: string;
  className?: string;
}

const buttonColors: Record<Color, string> = {
  glass: "bg-glass text-white border-white border hover:bg-glass-bright",
  primary: "bg-primary",
  secondary: "bg-secondary",
  outline:
    "border-gray-200 text-gray-200 background-transparent text-white border hover:bg-white/20",
};

export default function Button({
  children,
  color = "primary",
  href,
  className,
}: Props) {
  const btnClass = `${buttonColors[color]} ${className} focus:ring-4 focus:ring-blue-300 font-semibold inline-block text-sm px-8 py-3 me-1 focus:outline-none transition hover:bg-opacity-90`;
  if (href) {
    return (
      <a href={href} className={btnClass}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={btnClass}>
      {children}
    </button>
  );
}
