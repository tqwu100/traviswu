export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function withBase(path) {
  if (!path || path.startsWith("http") || path.startsWith("mailto:")) {
    return path;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}
