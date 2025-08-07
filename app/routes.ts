import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home/index.tsx"),
    route('about', './routes/about/index.tsx'),
    route('projects', './routes/projects/index.tsx'),
    route('projects/:id', './routes/projects/details.tsx'),
    route('blogs', './routes/blog/index.tsx'),
    route('/blogs/:slug', './routes/blog/details.tsx'),
    route('contact', './routes/contact/index.tsx'),
    route('*', './routes/not-found/index.tsx')
] satisfies RouteConfig;
