export type Color = "primary" | "secondary" | "glass" | "outline";

export interface SpoilerProps {
  children: React.ReactNode;
  maxHeight?: number;
  className?: string;
}
