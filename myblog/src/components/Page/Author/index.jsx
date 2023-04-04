import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import userToken from '../../../useToken';

export default function Author() {

    const navigate = useNavigate()

    function deletereg() {
        localStorage.setItem("token", '');
        navigate('/author/login/register');
    }

    // const [user, setUser] = useState(null);  
    // const token = localStorage.getItem("token").replace('"', "").replace('"', "")

    useEffect(() => {
        userToken(navigate, 'author')
        return () => { };
    }, [])

    return (
        <div>
            <button onClick={deletereg}>注销登录</button>
            <Outlet />
        </div>
    )
}
