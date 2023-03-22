import Home from "../Page/Home";
import Author from "../Page/Author";
import Post from "../Page/Post";


var routes = [
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/post',
        element: <Post />
    },
    {
        path: '/author',
        element: <Author />
    },
    {
        path: '/',
        element: <Home />
    },
]

export default routes
