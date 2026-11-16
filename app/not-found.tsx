import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap prose narrow">
        <h1 className="h-section">This page does not exist</h1>
        <p>The link may be out of date. The home page lists every entry in the e-portfolio.</p>
        <p>
          <Link className="btn btn-solid" href="/">
            Go to the home page
          </Link>
        </p>
      </div>
    </section>
  );
}
