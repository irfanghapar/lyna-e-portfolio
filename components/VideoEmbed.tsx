function youtubeId(url: string) {
  const trimmed = url.trim();
  if (!trimmed) return null;
  const match = trimmed.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/|\/live\/)([\w-]{11})/);
  return match ? match[1] : null;
}

export function VideoEmbed({ url, platform }: { url: string; platform: string }) {
  const id = youtubeId(url);

  if (!id) {
    return (
      <div className="video video-empty">
        <svg viewBox="0 0 64 64" width="56" height="56" aria-hidden>
          <rect x="6" y="14" width="52" height="36" rx="10" fill="currentColor" opacity=".18" />
          <path d="M27 24v16l14-8z" fill="currentColor" />
        </svg>
        <p>The instructional video for {platform} will be shown here once it is uploaded to YouTube.</p>
      </div>
    );
  }

  return (
    <div className="video">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title={`How to use ${platform} for teaching Biology`}
        loading="lazy"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
