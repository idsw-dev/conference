/** Resolve edition-local URLs for both the live site and a year archive. */
export function withBasePath(path: string): string {
  if (!path.startsWith("/") || path.startsWith("//")) return path;

  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  if (!base || path === base || path.startsWith(`${base}/`)) return path;
  return `${base}${path}`;
}
