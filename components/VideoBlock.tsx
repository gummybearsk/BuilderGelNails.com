interface VideoBlockProps {
  youtubeId?: string;
  title?: string;
  description?: string;
}

const normalizeKey = (value?: string) =>
  value?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || '';

const fallbackGuides: Record<
  string,
  { summary: string; points: string[] }
> = {
  'full-builder-gel-application-walk-through': {
    summary:
      'We will film the full slip layer and apex build soon. Use this checklist until the video drops.',
    points: [
      'Prep thoroughly, base coat thin, then add a controlled slip layer.',
      'Place a bead mid-nail, float toward cuticle, flash cure each nail.',
      'Full cure 60–120s, refine with 180 grit, then seal with top coat.',
    ],
  },
  'live-apex-build-with-flash-curing': {
    summary:
      'Follow the apex build sequence below—this is the script for the future video.',
    points: [
      'Set a slip layer, drop a small bead just behind the stress point.',
      'Tilt to self-level, chase flooding with a clean brush and a hairline gap.',
      'Flash cure 10–20s per nail, then full cure once all five are shaped.',
    ],
  },
  'gentle-builder-gel-removal': {
    summary:
      'No video yet—here is the exact removal flow I use on clients.',
    points: [
      'File off 80–90% of product and keep a thin veil to protect the nail.',
      'Wrap with acetone-soaked cotton for 15–25 minutes; rewrap stubborn spots.',
      'Push softened gel off, buff lightly, and oil to rehydrate the plate.',
    ],
  },
};

export function VideoBlock({ youtubeId, title, description }: VideoBlockProps) {
  // If we have a YouTube ID, render the embed
  if (youtubeId && youtubeId !== 'TO_BE_ADDED') {
    return (
      <div className="my-8">
        <div className="relative aspect-video rounded-lg overflow-hidden bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}`}
            title={title || 'Video tutorial'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
        {title && (
          <p className="mt-2 text-sm text-secondary-600 text-center">{title}</p>
        )}
      </div>
    );
  }

  // Fallback: styled "Video coming soon" card
  const fallbackKey = normalizeKey(title);
  const fallbackContent = fallbackGuides[fallbackKey];
  const fallbackSummary =
    description ||
    fallbackContent?.summary ||
    "We're working on a detailed video demonstration for this technique. In the meantime, follow the step-by-step instructions above.";

  return (
    <div className="my-8 bg-gradient-to-br from-secondary-100 to-secondary-50 border border-secondary-200 rounded-lg p-6">
      <div className="flex items-center gap-3 mb-3">
        <span className="px-2 py-1 text-xs font-semibold uppercase tracking-wide text-secondary-700 bg-white/80 border border-secondary-200 rounded">
          No video yet
        </span>
        {title && (
          <p className="text-sm text-secondary-700">{title}</p>
        )}
      </div>
      <p className="text-sm text-secondary-700 mb-4">{fallbackSummary}</p>
      {fallbackContent?.points && (
        <ul className="grid gap-2 md:grid-cols-3">
          {fallbackContent.points.map((point, index) => (
            <li
              key={index}
              className="flex gap-2 items-start bg-white/70 border border-secondary-200 rounded-md px-3 py-2 text-sm text-secondary-800"
            >
              <span className="text-primary-600 font-semibold">{index + 1}.</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
      {!fallbackContent?.points && (
        <p className="text-xs text-secondary-600">
          Use the written steps in this guide for now; the video will slot here once recorded.
        </p>
      )}
    </div>
  );
}
