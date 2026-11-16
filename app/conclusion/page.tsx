import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import { conclusion, entries, getEntry } from "@/content/portfolio";

export const metadata: Metadata = { title: "Conclusion" };

export default function Conclusion() {
  return (
    <>
      <section className="page-head gingham">
        <div className="wrap">
          <h1 className="page-title">
            <span className="sticker sticker-a">Conclusion</span>
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="prose narrow">
            {conclusion.intro.map((paragraph) => (
              <p key={paragraph} className="lead">
                {paragraph}
              </p>
            ))}
          </div>

          <h2 className="h-section">The five platforms side by side</h2>
          <div className="compare-scroll">
            <table className="compare">
              <thead>
                <tr>
                  <th scope="col">Platform</th>
                  <th scope="col">Its job in a Biology lesson</th>
                  <th scope="col">Thinking it supports</th>
                  <th scope="col">Cost to the teacher</th>
                  <th scope="col">What to watch for</th>
                </tr>
              </thead>
              <tbody>
                {conclusion.comparison.map((row) => {
                  const entry = getEntry(row.slug)!;
                  return (
                    <tr key={row.slug} style={{ "--accent": entry.accent } as CSSProperties}>
                      <th scope="row">
                        <Link href={`/entries/${entry.slug}`}>{entry.name}</Link>
                      </th>
                      <td data-label="Its job in a Biology lesson">{row.role}</td>
                      <td data-label="Thinking it supports">{row.level}</td>
                      <td data-label="Cost to the teacher">{row.cost}</td>
                      <td data-label="What to watch for">{row.watch}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="wrap">
          <h2 className="h-section">What I learned</h2>
          <dl className="learned">
            {conclusion.learned.map((item) => (
              <div key={item.title}>
                <dt>{item.title}</dt>
                <dd>{item.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="prose narrow">
            <h2 className="h-section">Final thoughts</h2>
            {conclusion.closing.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>
              <Link className="btn btn-solid" href={`/entries/${entries[0].slug}`}>
                Read the entries again
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
