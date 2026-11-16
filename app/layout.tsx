import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import "@fontsource-variable/dynapuff";
import "@fontsource-variable/figtree";
import "@fontsource-variable/figtree/wght-italic.css";
import "./globals.css";
import { SiteNav } from "@/components/SiteNav";
import { entries, site } from "@/content/portfolio";

export const metadata: Metadata = {
  title: {
    default: `${site.owner}'s e-portfolio | ${site.courseCode}`,
    template: `%s | ${site.owner}'s e-portfolio`,
  },
  description: `Five digital platforms for teaching Biology, reviewed by ${site.owner} for ${site.courseCode} at UiTM.`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const navItems = entries.map(({ slug, name }) => ({ slug, name }));

  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <header className="site-header">
          <div className="wrap site-header-inner">
            <Link href="/" className="site-name">
              {site.title}
            </Link>
            <Suspense fallback={null}>
              <SiteNav entries={navItems} />
            </Suspense>
          </div>
        </header>
        <main id="main">{children}</main>
        <footer className="site-footer">
          <div className="wrap site-footer-inner">
            <p className="site-footer-name">{site.owner}&rsquo;s e-portfolio</p>
            <p>
              {site.course}, class {site.classGroup}
            </p>
            <p>{site.university}</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
