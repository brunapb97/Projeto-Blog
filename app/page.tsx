import Image from "next/image";
import { FeaturedPostsHighlight } from "@/components/ui/FeaturedPostsHighlight";

type Post = {
  id: number;
  title: string;
  body: string;
};

export default async function HomePage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();
  const featuredPost = posts[0];
  const otherPosts = posts.slice(1, 7);

  return (
    <div className="w-full px-0 ">
      <FeaturedPostsHighlight post={featuredPost} />
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-10 mt-12 ">Últimos posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-0 mx-auto max-w-none">
          {otherPosts.map((post, idx) => (
            <div key={post.id} className="bg-card text-card-foreground rounded-lg shadow overflow-hidden flex flex-col">
              <div className="w-full h-64 relative">
                <Image
                  src={`https://picsum.photos/seed/${post.id}/800/400`}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={idx === 0}
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h2 className="text-1xl font-medium mb-2 leading-tight">{post.title}</h2>
                <p className="text-muted-foreground text-sm mb-2">March 16, 2020</p>
                <p className="text-1xl font-light flex-1 text-base">{post.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
