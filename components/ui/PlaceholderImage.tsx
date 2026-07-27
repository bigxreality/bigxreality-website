import type { MediaAsset } from "@/lib/data/homepage-media";

type PlaceholderImageProps = {
  asset: MediaAsset;
  className?: string;
};

/**
 * Renders the desktop/mobile aspect-ratio box for a not-yet-produced shot.
 * Swap this for <Image src={asset.desktop} .../> once real assets land in
 * /public/images/home — the data shape (width/height per breakpoint, alt)
 * is already final so no component code changes are needed.
 */
function Frame({
  asset,
  ratio,
  className,
}: {
  asset: MediaAsset;
  ratio: string;
  className: string;
}) {
  return (
    <div
      className={`placeholder-texture relative w-full overflow-hidden ${className}`}
      style={{ aspectRatio: ratio }}
      role="img"
      aria-label={asset.alt}
    >
      <div className="absolute inset-0 flex flex-col items-start justify-end p-4 gap-1">
        <span className="font-mono-brand text-[10px] uppercase tracking-[0.08em] text-text-faint">
          IMAGE PLACEHOLDER · {asset.id}
        </span>
        <span className="text-body-sm text-text-muted max-w-[85%]">{asset.alt}</span>
      </div>
    </div>
  );
}

export function PlaceholderImage({ asset, className = "" }: PlaceholderImageProps) {
  return (
    <>
      <Frame
        asset={asset}
        ratio={`${asset.mobileWidth} / ${asset.mobileHeight}`}
        className={`md:hidden ${className}`}
      />
      <Frame
        asset={asset}
        ratio={`${asset.width} / ${asset.height}`}
        className={`hidden md:block ${className}`}
      />
    </>
  );
}
