import Image from 'next/image';

// Step definitions with fallback descriptions
const stepDefinitions: Record<string, { title: string; description: string }> = {
  'prep-nails': {
    title: 'Nail Preparation',
    description: 'Push back cuticles, remove shine with a soft file (180 grit), and cleanse with alcohol or dehydrator. This step is critical for adhesion.',
  },
  'apply-base': {
    title: 'Apply Base Coat',
    description: 'Apply a thin layer of base gel, capping the free edge. Cure for the recommended time (usually 30-60 seconds under LED).',
  },
  'slip-layer': {
    title: 'Apply Slip Layer',
    description: 'Apply a thin layer of builder gel over the entire nail. This creates a "slip" layer that helps the main bead of gel spread evenly.',
  },
  'building-apex': {
    title: 'Building the Apex',
    description: 'Place a bead of builder gel in the center of the nail and allow it to self-level. Guide it toward the cuticle area without touching the skin. The apex should be at the stress point of the nail.',
  },
  'flash-cure': {
    title: 'Flash Cure',
    description: 'Cure for 10-20 seconds to set the structure before refining. This prevents the gel from moving while you work on other nails.',
  },
  'full-cure': {
    title: 'Full Cure',
    description: 'Cure for the full recommended time (60-120 seconds for most builder gels). Under-curing is a common cause of lifting and sticky surfaces.',
  },
  'file-shape': {
    title: 'File & Shape',
    description: 'Use a 180 grit file to refine the shape and smooth the apex. Work in one direction to prevent heat buildup.',
  },
  'top-coat': {
    title: 'Apply Top Coat',
    description: 'Apply a thin layer of no-wipe or regular top coat. Cure fully. This seals the builder gel and removes any sticky inhibition layer.',
  },
  'removal-file': {
    title: 'File Down for Removal',
    description: 'File down 80-90% of the builder gel using a 100-150 grit file or e-file. Leave a thin layer to protect the natural nail.',
  },
  'removal-soak': {
    title: 'Soak Off',
    description: 'Wrap nails with acetone-soaked cotton and foil. Wait 15-25 minutes. Gently push off softened gel with a cuticle pusher. Never pry or peel.',
  },
};

interface StepGifProps {
  step: string;
  src?: string;
  alt?: string;
  description?: string;
}

export function StepGif({ step, src, alt, description }: StepGifProps) {
  const stepInfo = stepDefinitions[step] || {
    title: step.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
    description: description || 'Visual demonstration of this step.',
  };

  // If we have an actual image source, render it
  if (src) {
    return (
      <figure className="my-6">
        <div className="relative aspect-video rounded-lg overflow-hidden bg-secondary-100">
          <Image
            src={src}
            alt={alt || stepInfo.title}
            fill
            className="object-cover"
          />
        </div>
        <figcaption className="mt-2 text-sm text-secondary-600 text-center">
          {stepInfo.title}
        </figcaption>
      </figure>
    );
  }

  // Fallback: styled "Visual Tip" box
  return (
    <div className="my-6 bg-gradient-to-r from-primary-50 to-secondary-50 border border-primary-200 rounded-lg p-4">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
          <svg
            className="w-5 h-5 text-primary-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </div>
        <div className="flex-1">
          <h4 className="text-sm font-semibold text-primary-700 mb-1">
            Visual Tip: {stepInfo.title}
          </h4>
          <p className="text-sm text-secondary-700">
            {description || stepInfo.description}
          </p>
        </div>
      </div>
    </div>
  );
}
