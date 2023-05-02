import React, { useState, useEffect, useRef } from 'react'
import MyNavLink from '../MyNavLink'
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {
    //除了button按钮其它地方点击了  导航栏都会收上去（当屏幕小的时候才会有导航栏）
    const [collapsed, setCollapsed] = useState(true);
    //用于监测点击事件的对象是不是span（导航栏的点击按钮）或者是search标签(input)
    const navRef1 = useRef(null);
    const navRef2 = useRef(null)
    //用于控制author里面的导航栏(客户端鼠标经过的时候显示出来)
    const [showMenu, setShowMenu] = useState('none');
    const navigate = useNavigate()

    //鼠标进入时的函数（用于显示导航栏）
    function handleMouseEnter() {
        setShowMenu('flex');
    }
    //鼠标退出时的函数（用于关闭导航栏）
    function handleMouseLeave() {
        setShowMenu('none');
    }
    //注销按钮
    function deletereg() {
        localStorage.setItem("token", '');
        navigate('/author/login/register');
    }
    //进行实时监测用户鼠标的点击位置，如果是在navref勾子上的标签，则展开导航栏
    useEffect(() => {
        function handleClickOutside(event) {
            if (event.target !== navRef1.current && event.target !== navRef2.current) {
                // console.log(event.target, navRef2.current);
                return setCollapsed(true);   //Ture的时候是关闭状态！！
            }
        }
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };//卸载组件时同时卸载监听函数
    }, [navRef1, navRef2, collapsed]);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
                <Link to='/show' style={{ marginRight: '1rem' }}><img id='test2' src="/assets/img/logo.png" alt='lpicture' /></Link>



                <button className="navbar-toggler" type="button" onClick={() => setCollapsed(!collapsed)}>
                    <span ref={navRef1} className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${collapsed ? '' : 'show'}`} id="navbarsDefault">

                    <ul className="navbar-nav mr-auto align-items-center" id='test1'>
                        <form className="bd-search hidden-sm-down">
                            <input ref={navRef2} type="text" className="form-control bg-graylight border-0 font-weight-bold" id="search-input"
                                placeholder="Search..." autoComplete="off" />
                            <div className="dropdown-menu bd-search-results" id="search-results">
                            </div>
                        </form>
                    </ul>
                    <ul className="navbar-nav ml-auto align-items-center">
                        <li className="nav-item">
                            <MyNavLink to='/home'>Home</MyNavLink>
                        </li>
                        <li className="nav-item">
                            <MyNavLink to='/post'>Post</MyNavLink>
                        </li>
                        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  >
                            <li className="nav-item dropdown hover-background" >
                                <MyNavLink to='/author'><img className="rounded-circle mr-2" src="/assets/img/av.png"
                                    width="30" alt='lpicture' /><span className="align-middle">Author</span></MyNavLink>
                                <div className="shadow-lg" style={{ position: "absolute", display: showMenu, flexWrap: "wrap" }} >
                                    <div style={{ cursor: 'pointer' }} className="dropdown-item" >修改密码</div>
                                    <div style={{ cursor: 'pointer' }} className="dropdown-item" >设置头像</div>
                                    <div style={{ cursor: 'pointer' }} className="dropdown-item" onClick={deletereg}>退出登录</div>
                                </div>
                            </li>
                        </div>

                    </ul>
                </div>

            </nav>
        </div>
    )
}
