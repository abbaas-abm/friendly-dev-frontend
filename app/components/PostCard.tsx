import type { PostMeta } from "~/types";
import { Link } from "react-router";

const PostCard = ({post}: {post: PostMeta}) => {
  return (
    <div className="p-5 bg-gray-900 rounded w-full border-l-4 border-green-600">
        <h1 className="text-white font-medium text-2xl">{post.title}</h1>
        <img className="w-full rounded size-52 object-cover" src={post.image} alt="" />
        <span className="text-white text-sm mt-2">{new Date(post.date).toLocaleDateString()}</span>

        <p className="text-white my-2 leading-relaxed">
            {post.excerpt}
        </p>

        <Link className="text-white underline" to={`/blogs/${post.slug}`}>Read More</Link>
    </div>
  )
}
export default PostCard