import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

type MovieCoverProps = {
  src?: string;
  alt?: string;
};

/** Replace public/movie-cover.png later without changing this component. */
export function MovieCover({
  src = `${basePath}/movie-cover.png?v=20260810-1`,
  alt = "《去你的岛》电影封面占位图",
}: MovieCoverProps) {
  return (
    <div className="movie-cover group relative mx-auto aspect-[3/4] w-[138px] overflow-hidden rounded-[14px] sm:w-[154px]">
      <Image
        src={src}
        alt={alt}
        fill
        preload
        sizes="(max-width: 640px) 138px, 154px"
        className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-[#2d355f]/12" />
    </div>
  );
}
