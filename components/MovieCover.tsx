import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

type MovieCoverProps = {
  src?: string;
  alt?: string;
};

/** The real poster remains isolated here so it can be swapped without touching layout code. */
export function MovieCover({
  src = `${basePath}/movie-cover.png?v=20260810-1`,
  alt = "《去你的岛》电影海报，蓝色水面与金色花海中的女孩",
}: MovieCoverProps) {
  return (
    <div className="movie-cover group relative mx-auto aspect-[3/4] w-[158px] overflow-hidden rounded-[14px] sm:w-[172px]">
      <Image
        src={src}
        alt={alt}
        fill
        preload
        sizes="(max-width: 640px) 158px, 172px"
        className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/8 via-transparent to-[#1e78ae]/10" />
    </div>
  );
}
