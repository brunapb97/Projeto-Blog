import Image from "next/image";

interface Post {
  id: number;
  title: string;
  body: string;
}

export function FeaturedPostsHighlight({ post }: { post: Post }) {
  return (
    <div className="w-full mb-12">
      <div className="relative w-full h-[350px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden">
        <Image
          src={`https://picsum.photos/seed/${post.id}/1600/600`}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40 flex items-end">
          <h2 className="text-white text-3xl md:text-5xl font-extrabold p-8 drop-shadow-lg">
            {post.title}
          </h2>
        </div>
      </div>
    </div>
  );
}