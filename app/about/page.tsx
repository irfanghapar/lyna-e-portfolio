import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CellSticker, StarSticker } from "@/components/Icons";
import { site } from "@/content/portfolio";

export const metadata: Metadata = { title: "About me" };

export default function About() {
  return (
    <>
      <section className="page-head gingham">
        <div className="wrap">
          <h1 className="page-title">
            <span className="sticker sticker-a">About me</span>
          </h1>
        </div>
      </section>
      <section className="section">
        <div className="wrap about">
          <div className="about-photo">
            {site.photo ? (
              <Image src={site.photo} alt={`Portrait of ${site.owner}`} fill sizes="(max-width: 760px) 70vw, 320px" />
            ) : (
              <div className="about-photo-empty" aria-hidden>
                <CellSticker className="about-photo-cell" />
                <StarSticker className="about-photo-star" />
              </div>
            )}
          </div>
          <div className="about-text prose">
            <p className="about-hello">Hi, I&rsquo;m {site.owner}.</p>
            {site.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <dl className="about-facts">
              <div>
                <dt>Programme</dt>
                <dd>{site.programme}</dd>
              </div>
              <div>
                <dt>University</dt>
                <dd>{site.university}</dd>
              </div>
              <div>
                <dt>Course</dt>
                <dd>{site.course}</dd>
              </div>
              <div>
                <dt>Class</dt>
                <dd>{site.classGroup}</dd>
              </div>
            </dl>
            <Link className="btn btn-solid" href="/#entries">
              See the five platforms
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
