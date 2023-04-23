import React, { useState, useEffect, useRef } from 'react'
import MyNavLink from '../MyNavLink'
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {
    //除了button按钮其它地方点击了  我的导航栏都会收上去（当屏幕小的时候才会有导航栏）
    const [collapsed, setCollapsed] = useState(true);
    const navRef = useRef(null);
    const [showMenu, setShowMenu] = useState('none');
    const navigate = useNavigate()

    function handleMouseEnter() {
        setShowMenu('flex');
    }

    function handleMouseLeave() {
        setShowMenu('none');
    }

    function deletereg() {
        localStorage.setItem("token", '');
        navigate('/author/login/register');
    }//注销按钮

    useEffect(() => {
        function handleClickOutside(event) {
            if (!navRef.current.contains(event.target)) {
                return setCollapsed(true);
            }
        }
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [navRef, collapsed]);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
                <Link to='/show' style={{ marginRight: '1rem' }}><img src="/assets/img/logo.png" alt='lpicture' /></Link>

                <button ref={navRef} className="navbar-toggler" type="button" onClick={() => setCollapsed(!collapsed)}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${collapsed ? '' : 'show'}`} id="navbarsDefault">
                    <ul className="navbar-nav mr-auto align-items-center">
                        <form className="bd-search hidden-sm-down">
                            <input type="text" className="form-control bg-graylight border-0 font-weight-bold" id="search-input"
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
