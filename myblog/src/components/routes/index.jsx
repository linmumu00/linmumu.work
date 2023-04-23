import Home from "../Page/Home";
import Author from "../Page/Author";
import Enter from "../Page/Author/Enter";
import Login from "../Page/Author/Login";
import Post from "../Page/Post";
import Show from "../Page/Show";
import Register from "../Page/Author/Login/Register";
import Sign from "../Page/Author/Login/Sign";
import Forget from "../Page/Author/Login/Forget";


var routes =
    [
        {
            path: '/show',
            element: <Show />
        },
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
            element: <Author />,
            children: [
                {
                    path: 'enter',
                    element: <Enter />
                },
                {
                    path: 'login',
                    element: <Login />,
                    children: [
                        {
                            path: 'sign',
                            element: <Sign />
                        },
                        {
                            path: 'register',
                            element: <Register />
                        },
                        {
                            path: 'forget',
                            element: <Forget />
                        },
                        {
                            path: '',
                            element: <Register />
                        }
                    ]

                },
                {
                    path: '',
                    element: <Enter />
                }
            ]
        },
        {
            path: '',
            element: <Show />
        },
    ]


export default routes
