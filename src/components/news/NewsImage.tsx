import { useState } from "react";

const FALLBACK =
  "https://placehold.co/600x400?text=No+Image";

export default function NewsImage({
  src,
  alt,
}: {
  src?: string;
  alt: string;
}) {
  const [image, setImage] = useState(src);

  return (
    <img
      src={image || FALLBACK}
      alt={alt}
      onError={() => setImage(FALLBACK)}
      className="h-full w-full object-cover"
    />
  );
}