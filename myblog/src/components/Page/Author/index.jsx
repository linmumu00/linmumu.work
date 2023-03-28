import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Author() {
    return (
        <div>
            <Link to='login/register'>点我登录</Link>
            <Link to='login/sign'>点我注册</Link>
            <Link to='enter'>登录成功</Link>
            <Outlet />
        </div>
    )
}
