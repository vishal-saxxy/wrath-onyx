const rawSiteUrl = (import.meta.env["VITE_SITE_URL"] as string | undefined) ?? "https://kasparro.com";

export const SITE_URL = rawSiteUrl.trim().toLowerCase().replace(/\/+$/, "");

export const SITE_INDEXABLE = ((import.meta.env["VITE_SITE_INDEXABLE"] as string | undefined) ?? "false") === "true";

export function canonicalUrl(path: string): string {
  const clean = path === "/" ? "" : `/${path.replace(/^\/+|\/+$/g, "")}`;
  return `${SITE_URL}${clean.toLowerCase()}`;
}
