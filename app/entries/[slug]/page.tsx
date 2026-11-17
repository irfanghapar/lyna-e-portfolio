import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { EntryIcon } from "@/components/Icons";
import { VideoEmbed } from "@/components/VideoEmbed";
import { entries, getEntry, type Step } from "@/content/portfolio";

export function generateStaticParams() {
  return entries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: PageProps<"/entries/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const entry = getEntry(slug);
  if (!entry) return {};
  return { title: entry.name, description: entry.tagline };
}

const sections = [
  { id: "description", label: "What it is" },
  { id: "evaluation", label: "How well it teaches" },
  { id: "guide", label: "How to use it" },
  { id: "analysis", label: "Why it suits Biology" },
  { id: "video", label: "Video guide" },
];

function Paragraphs({ items }: { items: string[] }) {
  return (
    <>
      {items.map((text) => (
        <p key={text}>{text}</p>
      ))}
    </>
  );
}

function Steps({ items }: { items: Step[] }) {
  return (
    <ol className="steps">
      {items.map((step) => (
        <li key={step.title}>
          <strong>{step.title}</strong>
          <span>{step.detail}</span>
        </li>
      ))}
    </ol>
  );
}

export default async function EntryPage({ params }: PageProps<"/entries/[slug]">) {
  const { slug } = await params;
  const entry = getEntry(slug);
  if (!entry) notFound();

  const index = entries.indexOf(entry);
  const previous = entries[index - 1];
  const next = entries[index + 1];
  const { description, evaluation, guide, analysis, showcase } = entry;

  return (
    <article className="entry" style={{ "--accent": entry.accent } as CSSProperties}>
      <header className="entry-head gingham">
        <div className="wrap entry-head-inner">
          <div>
            <p className="entry-count">
              Entry {index + 1} of {entries.length}
            </p>
            <h1 className="entry-title">
              <span className="sticker sticker-accent">{entry.name}</span>
            </h1>
            <p className="entry-tagline">{entry.tagline}</p>
          </div>
          <div className="entry-specimen">
            <EntryIcon icon={entry.icon} />
          </div>
        </div>
      </header>

      <div className="wrap">
        <dl className="facts">
          {entry.facts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>

        <div className="entry-layout">
          <nav className="toc" aria-label="On this page">
            <p className="toc-title">On this page</p>
            <ol>
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`}>{section.label}</a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="entry-body prose">
            <section id="description" className="part">
              <h2>
                <span className="part-number">1</span>What it is
              </h2>
              <p className="part-rubric">Description and features of the digital tool</p>
              <Paragraphs items={description.purpose} />
              <h3>Key features</h3>
              <dl className="features">
                {description.features.map((feature) => (
                  <div key={feature.name}>
                    <dt>{feature.name}</dt>
                    <dd>{feature.detail}</dd>
                  </div>
                ))}
              </dl>
              <h3>How it works</h3>
              <Paragraphs items={description.operation} />
              <h3>Where it fits in teaching</h3>
              <Paragraphs items={description.use} />
            </section>

            <section id="evaluation" className="part">
              <h2>
                <span className="part-number">2</span>How well it teaches
              </h2>
              <p className="part-rubric">Critical evaluation for teaching and learning</p>
              <h3>Teaching strategies it supports</h3>
              <Paragraphs items={evaluation.strategies} />
              <h3>Effect on student engagement</h3>
              <Paragraphs items={evaluation.engagement} />
              <div className="balance">
                <div className="balance-col balance-plus">
                  <h3>Advantages</h3>
                  <ul>
                    {evaluation.advantages.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="balance-col balance-minus">
                  <h3>Limitations</h3>
                  <ul>
                    {evaluation.limitations.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <h3>Likely impact on learning</h3>
              <Paragraphs items={evaluation.impact} />
            </section>

            <section id="guide" className="part">
              <h2>
                <span className="part-number">3</span>How to use it
              </h2>
              <p className="part-rubric">Guidelines on using the tool</p>
              <h3>Get access</h3>
              <Steps items={guide.access} />
              <h3>Create the teaching materials</h3>
              <Steps items={guide.create} />
              <h3>Use it in the lesson</h3>
              <Steps items={guide.classroom} />
              {showcase ? (
                <div className="showcase">
                  <h3>{showcase.title}</h3>
                  <p>{showcase.intro}</p>
                  <div className="showcase-grid">
                    {showcase.images.map((image) => (
                      <figure key={image.src}>
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={image.width}
                          height={image.height}
                          sizes="(max-width: 760px) 100vw, 46rem"
                        />
                        <figcaption>{image.caption}</figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              ) : null}
            </section>

            <section id="analysis" className="part">
              <h2>
                <span className="part-number">4</span>Why it suits Biology
              </h2>
              <p className="part-rubric">Analytical discussion and support of ideas</p>
              <Paragraphs items={analysis.why} />

              <div className="lesson">
                <p className="lesson-kicker">Classroom example</p>
                <h3 className="lesson-title">{analysis.lesson.title}</h3>
                <dl className="lesson-meta">
                  <div>
                    <dt>Level and topic</dt>
                    <dd>{analysis.lesson.level}</dd>
                  </div>
                  <div>
                    <dt>Time</dt>
                    <dd>{analysis.lesson.duration}</dd>
                  </div>
                  <div className="lesson-meta-wide">
                    <dt>Learning objective</dt>
                    <dd>{analysis.lesson.objective}</dd>
                  </div>
                </dl>
                <ol className="lesson-flow">
                  {analysis.lesson.flow.map((stage) => (
                    <li key={stage.phase}>
                      <span className="lesson-phase">
                        <strong>{stage.phase}</strong>
                        <span>{stage.time}</span>
                      </span>
                      <span className="lesson-detail">{stage.detail}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <h3>Ideas from learning theory</h3>
              <dl className="features">
                {analysis.concepts.map((concept) => (
                  <div key={concept.name}>
                    <dt>{concept.name}</dt>
                    <dd>{concept.detail}</dd>
                  </div>
                ))}
              </dl>

              <h3>My reflection</h3>
              <div className="reflection">
                <Paragraphs items={analysis.reflection} />
              </div>
            </section>

            <section id="video" className="part">
              <h2>
                <span className="part-number">5</span>Video guide
              </h2>
              <p className="part-rubric">Instructional video for teachers</p>
              <VideoEmbed url={entry.videoUrl} platform={entry.name} />
            </section>

            <section className="sources">
              <h2>Sources</h2>
              <ul>
                {entry.sources.map((source) => (
                  <li key={source.url}>
                    <a href={source.url} target="_blank" rel="noreferrer">
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        <nav className="pager" aria-label="Other entries">
          {previous ? (
            <Link href={`/entries/${previous.slug}`} className="pager-link">
              <span>Previous entry</span>
              <strong>{previous.name}</strong>
            </Link>
          ) : (
            <Link href="/" className="pager-link">
              <span>Back to</span>
              <strong>Home</strong>
            </Link>
          )}
          {next ? (
            <Link href={`/entries/${next.slug}`} className="pager-link pager-next">
              <span>Next entry</span>
              <strong>{next.name}</strong>
            </Link>
          ) : (
            <Link href="/conclusion" className="pager-link pager-next">
              <span>Next</span>
              <strong>Conclusion</strong>
            </Link>
          )}
        </nav>
      </div>
    </article>
  );
}
