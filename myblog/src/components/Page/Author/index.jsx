import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import userToken from '../../../useToken';

export default function Author() {

    const navigate = useNavigate()

    function deletereg() {
        localStorage.setItem("token", '');
        navigate('/author/login/register');
    }//注销按钮


    useEffect(() => {
        userToken(navigate, 'author')//加载组件前验证token
        // return () => { };//卸载组件时运行，不然无法跳转到其它页面去了
    }, [])

    return (
        <div className='bg-Azure'>
            <button className='btn' onClick={deletereg}>注销登录</button>
            <Outlet />
        </div>
    )
}
