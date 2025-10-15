import Image from "next/image";

type Post = {
  id: number;
  title: string;
  body: string;
};

export default async function ProfilePage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?userId=1");
  const posts: Post[] = await res.json();

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <div className="flex items-center gap-4 mb-8">
        <h1 className="text-3xl font-bold text-left">Meus posts</h1>
      </div>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.id} className="flex items-center gap-4 bg-card rounded-lg shadow p-4">
            <div className="w-24 h-24 relative flex-shrink-0">
              <Image
                src={`https://picsum.photos/seed/${post.id}/200/200`}
                alt={post.title}
                fill
                className="object-cover rounded"
                sizes="96px"
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-1">{post.title}</h2>
              <p className="text-muted-foreground text-sm">{post.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
