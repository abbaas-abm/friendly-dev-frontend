import { useState } from "react";
import type { Route } from "./+types/index";
import type { PostMeta, StrapiPost, StrapiResponse } from "~/types";
import PostCard from "~/components/PostCard";
import Pagination from "~/components/Pagination";
import SearchFilter from "~/components/SearchFilter";
const API_URL = import.meta.env.VITE_API_URL
const ROOT_URL = import.meta.env.VITE_STRAPI_URL;


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Blog | Friendly Dev" },
    { name: "description", content: "Your freindly developer ready to help!" },
  ];
}


export async function loader ({request}: Route.LoaderArgs):Promise<{posts: PostMeta[]}> {
   const req = await fetch(`${API_URL}/posts?populate=image&sort=date:desc`)

    if (!req.ok) throw new Response('Something went wrong :-(', {status: 400});

    const jsonData:StrapiResponse<StrapiPost> = await req.json();
    
    const data = jsonData.data.map(item => ({
      id: item.id,
      title: item.title,
      excerpt: item.excerpt,
      slug: item.slug,
      body: item.body,
      date: item.date,
      image: item.image?.url ? item.image.url : '/images/no-image.png'
    }));

    return {posts: data}
}

const BlogPage = ({loaderData}: Route.ComponentProps) => {
  const {posts} = loaderData;

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 3

  const numberOfPages = Math.ceil(posts.length / postsPerPage);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;

  const currentPosts = posts.slice(indexOfFirst, indexOfLast);

  const filteredPosts = currentPosts.filter((post) => (
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  ))

  
  return (
    <div className="mt-32 flex flex-col items-center justify-center my-4">
      <p className="text-white text-center font-bold text-3xl mb-4">Blogs</p>

      <div className="flex flex-col items-center justify-center w-[80%] space-y-3 my-4">
        <SearchFilter searchQuery={searchQuery} handleSearchQuery={(e)=> {
          setSearchQuery(e);
          setCurrentPage(1);
        }}/>
        {filteredPosts.map(post => <PostCard key={post.slug} post={post}/>)}
      </div>

      {numberOfPages > 1 && <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={numberOfPages} />}
    </div>
  )
}
export default BlogPage