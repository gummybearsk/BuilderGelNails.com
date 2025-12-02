import { getAuthor } from '@/lib/authors';

interface AuthorBioProps {
  authorId: string;
  showFull?: boolean;
}

export function AuthorBio({ authorId, showFull = false }: AuthorBioProps) {
  const author = getAuthor(authorId);

  if (!author) {
    return null;
  }

  if (showFull) {
    return (
      <div className="bg-secondary-50 border border-secondary-200 rounded-lg p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center">
              <span className="text-3xl font-heading font-bold text-primary-600">
                {author.name.charAt(0)}
              </span>
            </div>
          </div>

          {/* Info */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-secondary-900">{author.name}</h3>
            <p className="text-sm text-primary-600 font-medium">{author.role}</p>
            <p className="mt-2 text-sm text-secondary-600">{author.bio}</p>
          </div>
        </div>
      </div>
    );
  }

  // Compact version
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
        <span className="text-sm font-heading font-bold text-primary-600">
          {author.name.charAt(0)}
        </span>
      </div>
      <div>
        <p className="text-sm font-medium text-secondary-900">{author.name}</p>
        <p className="text-xs text-secondary-500">{author.role}</p>
      </div>
    </div>
  );
}
