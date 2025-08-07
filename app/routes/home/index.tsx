const API_URL = import.meta.env.VITE_API_URL;
const ROOT_URL = import.meta.env.VITE_STRAPI_URL;
import type { Route } from "./+types/index.tsx";
import type { Project, StrapiPost } from "~/types";
import type { PostMeta } from "~/types";
import type { StrapiProject, StrapiResponse } from "~/types";
import Hero from "~/components/Hero.js";
import FeaturedSection from "~/components/FeaturedSection.js";
import AboutSection from "~/components/AboutSection.js";
import LatestPosts from "~/components/LatestPosts.js";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Friendly Dev" },
    { name: "description", content: "Your freindly developer ready to help!" },
  ];
}

export async function loader({request}: Route.LoaderArgs):Promise<{projects:Project[], posts: PostMeta[]}>{
  const [projectsRes, postsRes] = await Promise.all([
    fetch(`${API_URL}/projects?filters[featured][$eq]=true&populate=*`), 
    fetch(`${API_URL}/posts?populate=image&sort=date:desc`)
  ]);

    if (!projectsRes.ok || !postsRes.ok) throw new Response('Something went wrong with the fetch :(', {status: 400});

    const projectsJSON:StrapiResponse<StrapiProject>  = await projectsRes.json();

    const projects = projectsJSON.data.map(item =>({
          id: item.id,
          documentId: item.documentId,
          title: item.title,
          description: item.description,
          image: item.image?.url ?item.image.url : '/images/no-image.png',
          url: item.url,
          featured: item.featured,
          date: item.date,
          category: item.category
    }));

    const postsJson:StrapiResponse<StrapiPost> = await postsRes.json();

    const posts = postsJson.data.map(item => ({
       id: item.id,
        title: item.title,
        excerpt: item.excerpt,
        slug: item.slug,
        body: item.body,
        date: item.date,
        image: item.image?.url ? item.image.url : '/images/no-image.png'
    }))
    
    return {projects, posts}
}

const Home = ({loaderData}: Route.ComponentProps) => {
  
  const {projects, posts} = loaderData


  return (
    <>
    <Hero/>
    <FeaturedSection projects={projects}/>
    <AboutSection/>
    <LatestPosts posts={posts} limit={3}/>
    </>
  )
}
export default Home