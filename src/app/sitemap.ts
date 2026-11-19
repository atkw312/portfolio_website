import type { MetadataRoute } from "next";
import { SITE_URL } from "./site";

const routes = ["", "/profile", "/profile/home", "/profile/projects", "/profile/skills", "/profile/education", "/profile/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({ url: `${SITE_URL}${route}` }));
}
