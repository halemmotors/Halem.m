// Builds a URL to a file in public/ that respects Vite's configured base path
// (needed because this site is deployed under a GitHub Pages subpath).
export function asset(path) {
  const clean = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${clean}`;
}
