import Link from "next/link";
import type { CSSProperties } from "react";
import { CellSticker, CloudSticker, DnaSticker, EntryIcon, LeafSticker, StarSticker } from "@/components/Icons";
import { entries, site } from "@/content/portfolio";

const parts = [
  { name: "What it is", detail: "The purpose of the platform, its main features and how it works." },
  { name: "How well it teaches", detail: "The teaching strategies it supports, its strengths, its limits and its likely effect on learning." },
  { name: "How to use it", detail: "Steps to get access, create materials and run it in a lesson." },
  { name: "Why it suits Biology", detail: "A lesson plan, the learning theory behind it and my own reflection." },
  { name: "Video guide", detail: "A walkthrough I recorded for other teachers." },
];

export default function Home() {
  return (
    <>
      <section className="hero gingham">
        <CloudSticker className="stk stk-cloud-a" />
        <CloudSticker className="stk stk-cloud-b" />
        <StarSticker className="stk stk-star-a" />
        <StarSticker className="stk stk-star-b" />
        <CellSticker className="stk stk-cell" />
        <LeafSticker className="stk stk-leaf" />
        <DnaSticker className="stk stk-dna" />
        <div className="wrap hero-inner">
          <h1 className="hero-title">
            <span className="sticker sticker-a">{site.owner}</span>
            <span className="sticker sticker-b">e-portfolio</span>
          </h1>
          <p className="hero-course">
            {site.course}
            <br />
            Class {site.classGroup}
          </p>
          <p className="hero-welcome">{site.welcome}</p>
          <div className="hero-actions">
            <a className="btn btn-solid" href="#entries">
              See the five platforms
            </a>
            <Link className="btn btn-plain" href="/about">
              About me
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="entries">
        <div className="wrap">
          <h2 className="h-section">Five platforms, five jobs in a Biology lesson</h2>
          <p className="lead">
            I picked tools that do different things, so each entry answers a different classroom need. Every example
            lesson is based on a topic from the Form 4 or Form 5 Biology syllabus.
          </p>
          <ol className="slides">
            {entries.map((entry, index) => (
              <li key={entry.slug}>
                <Link
                  href={`/entries/${entry.slug}`}
                  className="slide"
                  style={{ "--accent": entry.accent } as CSSProperties}
                >
                  <span className="slide-label">
                    <span className="slide-number">Entry {index + 1}</span>
                    <span className="slide-job">{entry.job}</span>
                  </span>
                  <span className="slide-body">
                    <span className="slide-name">{entry.name}</span>
                    <span className="slide-tagline">{entry.tagline}</span>
                    <span className="slide-topic">Lesson example: {entry.topic}</span>
                  </span>
                  <span className="slide-specimen">
                    <EntryIcon icon={entry.icon} />
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-tint">
        <div className="wrap split">
          <div>
            <h2 className="h-section">How each entry is organised</h2>
            <p className="lead">
              All five entries follow the same order, so they are easy to compare. The order follows the assignment
              rubric.
            </p>
          </div>
          <ol className="parts">
            {parts.map((part) => (
              <li key={part.name}>
                <strong>{part.name}</strong>
                <span>{part.detail}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap closing">
          <h2 className="h-section">What I learned from comparing them</h2>
          <p className="lead">
            The conclusion puts the five platforms side by side and sums up what they taught me about choosing
            technology for a Biology classroom.
          </p>
          <Link className="btn btn-solid" href="/conclusion">
            Read the conclusion
          </Link>
        </div>
      </section>
    </>
  );
}
