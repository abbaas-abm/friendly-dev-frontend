import type { PostMeta } from "~/types";
import { Link } from "react-router";
type LatestPostsProps = {posts: PostMeta[], limit?: number}

const LatestPosts = ({posts, limit = 3}: LatestPostsProps ) => {
  const sort = posts.sort((a,b) => (
    new Date(b.date).getTime() - new Date(a.date).getTime()
  ))

  const latest = sort.slice(0, limit);

  return (
    <div className="flex items-center justify-center w-full flex-col mt-6">
      <h2 className="text-center font-black  text-white text-3xl">Latest Posts</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-stretch w-[80%] gap-6 my-3">
        {latest.map(post => (
          <Link to={`/blogs/${post.slug}`}>
            <div className="p-3 rounded-lg shadow border-gray-200 border bg-gray-900 transition hover:scale-105">
                <h1 className="text-green-500 text-lg mb-2 font-bold">{post.title}</h1>
                <p className="text-gray-300 leading-relaxed mb-2">{post.excerpt}</p>
                <span className="text-white text-sm">{new Date(post.date).toISOString().split("T")[0]}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
export default LatestPosts