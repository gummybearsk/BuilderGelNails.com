import Image from 'next/image';
import { Product, getProduct } from '@/lib/products';

interface ProductCardProps {
  id?: string;
  product?: Product;
}

export function ProductCard({ id, product: productProp }: ProductCardProps) {
  const product = productProp || (id ? getProduct(id) : undefined);

  if (!product) {
    return null;
  }

  const imageSrc = product.imageUrl || '/images/products/placeholder-product.svg';

  return (
    <div className="bg-white border border-secondary-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col gap-4">
        {/* Product Image */}
        <div className="w-full aspect-square bg-secondary-50 rounded-lg overflow-hidden border border-secondary-200">
          <Image
            src={imageSrc}
            alt={product.name}
            width={600}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div>
          <div className="flex items-start justify-between gap-2">
            <span className="text-xs font-medium text-primary-600 uppercase tracking-wide">
              {product.brand}
            </span>
            {product.isPro && (
              <span className="flex-shrink-0 px-2 py-0.5 text-xs font-medium bg-accent-100 text-accent-700 rounded">
                Pro
              </span>
            )}
          </div>
          <h4 className="text-sm font-semibold text-secondary-900 mt-1 line-clamp-2">
            {product.name}
          </h4>

          <div className="mt-2 flex flex-wrap items-center gap-2">
            {product.isHemaFree && (
              <span className="px-2 py-0.5 text-xs font-medium bg-green-100 text-green-700 rounded">
                HEMA-Free
              </span>
            )}
            <span className="text-xs text-secondary-500">{product.priceRange}</span>
          </div>

          {product.bestFor && (
            <p className="mt-2 text-xs text-secondary-600">
              Best for: {product.bestFor}
            </p>
          )}

          <a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
          >
            Check Price →
          </a>
        </div>
      </div>
    </div>
  );
}
