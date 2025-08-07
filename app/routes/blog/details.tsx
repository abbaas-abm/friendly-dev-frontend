import type { Route } from "./+types/details";
import type { PostMeta } from "~/types";
import type { StrapiPost, StrapiResponse } from "~/types";
import ReactMarkdown from 'react-markdown'
import { Link } from "react-router";
const API_URL = import.meta.env.VITE_API_URL
const ROOT_URL = import.meta.env.VITE_STRAPI_URL;

export async function loader({request, params}: Route.LoaderArgs) {
    const {slug} = params;

    const req = await fetch(`${API_URL}/posts?filters[slug][$eq]=${slug}&populate=image`);

    if (!req.ok) throw new Error('Something went wrong with the request');

    const jsonData:StrapiResponse<StrapiPost> = await req.json();
    const postMetaData = jsonData.data.map(item => ({
        id: item.id,
        title: item.title,
        excerpt: item.excerpt,
        slug: item.slug,
        body: item.body,
        date: item.date,
        image: item.image?.url ? item.image.url : '/images/no-image.png'
    }))

    const markdown = postMetaData[0].body;

    return {
        postMetaData: postMetaData[0],
        markdown
    }

}

const BlogDetailsPage = ({loaderData}: Route.ComponentProps) => {

    const {markdown, postMetaData}: {markdown: string, postMetaData: PostMeta} = loaderData;
    
  return (
    <div className="mt-32 flex flex-col items-center justify-center w-full my-4">
        <div className="w-[80%]">
            <h1 className="text-green-600 text-3xl font-bold">{postMetaData.title}</h1>
                <span className="text-white text-sm my-2">{new Date(postMetaData.date).toLocaleDateString()}</span>


            <article className="prose prose-invert my-4">
                <ReactMarkdown>
                    {markdown}
                </ReactMarkdown>
            </article>

            <Link className="text-white bg-green-500 py-2 px-4 mt-4 rounded transition hover:bg-green-600" to={`/blogs`}>Back to posts</Link>
        </div>
    </div>
  )
}
export default BlogDetailsPage