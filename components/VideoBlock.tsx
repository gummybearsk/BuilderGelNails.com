interface VideoBlockProps {
  youtubeId?: string;
  title?: string;
  description?: string;
}

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
  return (
    <div className="my-8 bg-gradient-to-br from-secondary-100 to-secondary-50 border border-secondary-200 rounded-lg p-6">
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-secondary-200 rounded-full flex items-center justify-center mb-4">
          <svg
            className="w-8 h-8 text-secondary-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h4 className="text-lg font-semibold text-secondary-800 mb-2">
          {title || 'Video Tutorial Coming Soon'}
        </h4>
        <p className="text-sm text-secondary-600 max-w-md">
          {description ||
            "We're working on a detailed video demonstration for this technique. In the meantime, follow the step-by-step instructions above."}
        </p>
      </div>
    </div>
  );
}
