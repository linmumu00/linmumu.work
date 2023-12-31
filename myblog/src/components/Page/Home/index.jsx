import React, { useEffect, useState } from 'react'
import LazyLoad from 'react-lazyload';


export default function Home() {

    const [isShow, setisShow] = useState('false')
    useEffect(() => {
        return () => { };
    }, [isShow])



    return (
        <main className='bg-Azure' role="main">
            <section className="showFather mt-4 mb-5">
                <div className="container mb-4">
                    <h1 className="font-weight-bold title">Explore</h1>
                    <div className="row">
                        <nav className="bg-Azure navbar-expand-lg navbar-light">
                            <button className="navbar-light navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarsExplore" aria-controls="navbarsDefault" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="bg-Azure collapse navbar-collapse" id="navbarsExplore">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="/javascript">Daily</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/javascript">Food</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/javascript">Knowledge</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/javascript">Travel</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" id="dropdown01" href='/javascript'
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">More</a>
                                        <div className="bg-Azure dropdown-menu shadow-lg" aria-labelledby="dropdown01">
                                            <a className="dropdown-item" href="/javascript">Astronomy</a>
                                            <a className="dropdown-item" href="/javascript">Nature</a>
                                            <a className="dropdown-item" href="/javascript">Cooking</a>
                                            <a className="dropdown-item" href="/javascript">Fashion</a>
                                            <a className="dropdown-item" href="/javascript">Wellness</a>
                                            <a className="dropdown-item" href="/javascript">Dieting</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>

                {
                    isShow === 'true' ?
                        <div className='showAct container-fluid'>
                            <button onClick={() => { setisShow('false') }} style={{ display: 'block', float: 'right' }}>关闭</button>
                            <div>

                            </div>
                        </div>
                        :
                        <div className="container-fluid">
                            <div className="row">
                                <div className="card-columns">
                                    <div className="card card-pin" id='true' onClick={() => { setisShow('true') }}>
                                        <LazyLoad offset={100}><img className="card-img"
                                            src="https://images.unsplash.com/photo-1489743342057-3448cc7c3bb9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6d284a2efbca5f89528546307f7e7b87&auto=format&fit=crop&w=500&q=60"
                                            alt="Card limg" /></LazyLoad>
                                        <div className="overlay">
                                            <h2 className="card-title title">Cool Title</h2>
                                            <div className="more">
                                                <a href="post.html">
                                                    <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> More </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card card-pin">
                                        <LazyLoad offset={100}><img className="card-img"
                                            src="https://images.unsplash.com/photo-1519996521430-02b798c1d881?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=79f770fc1a5d8ff9b0eb033d0f09e15d&auto=format&fit=crop&w=500&q=60"
                                            alt="Card limg" /></LazyLoad>
                                        <div className="overlay">
                                            <h2 className="card-title title">Cool Title</h2>
                                            <div className="more">
                                                <a href="post.html">
                                                    <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> More </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card card-pin">
                                        <LazyLoad offset={100}><img className="card-img"
                                            src="https://images.unsplash.com/photo-1505210512658-3ae58ae08744?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2ef2e23adda7b89a804cf232f57e3ca3&auto=format&fit=crop&w=333&q=80"
                                            alt="Card limg" /></LazyLoad>
                                        <div className="overlay">
                                            <h2 className="card-title title">Cool Title</h2>
                                            <div className="more">
                                                <a href="post.html">
                                                    <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> More </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card card-pin">
                                        <LazyLoad offset={100}><img className="card-img"
                                            src="https://images.unsplash.com/photo-1488353816557-87cd574cea04?ixlib=rb-0.3.5&s=06371203b2e3ad3e241c45f4e149a1b3&auto=format&fit=crop&w=334&q=80"
                                            alt="Card limg" /></LazyLoad>
                                        <div className="overlay">
                                            <h2 className="card-title title">Cool Title</h2>
                                            <div className="more">
                                                <a href="post.html">
                                                    <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> More </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card card-pin">
                                        <LazyLoad offset={100}><img className="card-img"
                                            src="https://images.unsplash.com/photo-1518450757707-d21c8c53c8df?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c88b5f311958f841525fdb01ab3b5deb&auto=format&fit=crop&w=500&q=60"
                                            alt="Card limg" /></LazyLoad>
                                        <div className="overlay">
                                            <h2 className="card-title title">Cool Title</h2>
                                            <div className="more">
                                                <a href="post.html">
                                                    <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> More </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card card-pin" >
                                        <LazyLoad offset={1000}><img className="card-img"
                                            src="https://images.unsplash.com/photo-1483190656465-2c49e54d29f3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7c4d831daffc28f6ce144ae9e44072e2&auto=format&fit=crop&w=500&q=60"
                                            alt="Card limg" /></LazyLoad>
                                        <div className="overlay">
                                            <h2 className="card-title title">Cool Title</h2>
                                            <div className="more">
                                                <a href="post.html">
                                                    <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> More </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card card-pin">
                                        <LazyLoad offset={100}><img className="card-img"
                                            src="https://images.unsplash.com/photo-1501813531019-338a4182efb0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ad934c7483b928cae6b0b9cde5ae3445&auto=format&fit=crop&w=500&q=60"
                                            alt="Card limg" /></LazyLoad>
                                        <div className="overlay">
                                            <h2 className="card-title title">Cool Title</h2>
                                            <div className="more">
                                                <a href="post.html">
                                                    <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> More </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card card-pin">
                                        <LazyLoad offset={100}><img className="card-img"
                                            src="https://images.unsplash.com/photo-1518542331925-4e91e9aa0074?ixlib=rb-0.3.5&s=6958cfb3469de1e681bf17587bed53be&auto=format&fit=crop&w=500&q=60"
                                            alt="Card limg" /></LazyLoad>
                                        <div className="overlay">
                                            <h2 className="card-title title">Cool Title</h2>
                                            <div className="more">
                                                <a href="post.html">
                                                    <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> More </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card card-pin">
                                        <LazyLoad offset={100}><img className="card-img"
                                            src="https://images.unsplash.com/photo-1513028179155-324cfec2566c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=32ce1df4016dadc177d6fce1b2df2429&auto=format&fit=crop&w=350&q=80"
                                            alt="Card limg" /></LazyLoad>
                                        <div className="overlay">
                                            <h2 className="card-title title">Cool Title</h2>
                                            <div className="more">
                                                <a href="post.html">
                                                    <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> More </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card card-pin">
                                        <LazyLoad offset={100}><img className="card-img"
                                            src="https://images.unsplash.com/photo-1516601255109-506725109807?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ce4f3db9818f60686e8e9b62d4920ce5&auto=format&fit=crop&w=500&q=60"
                                            alt="Card limg" /></LazyLoad>
                                        <div className="overlay">
                                            <h2 className="card-title title">Cool Title</h2>
                                            <div className="more">
                                                <a href="post.html">
                                                    <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> More </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card card-pin">
                                        <LazyLoad offset={100}><img className="card-img"
                                            src="https://images.unsplash.com/photo-1509233631037-deb7efd36207?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=75a5d784cdfc8f5ced8a6fe26c6d921e&auto=format&fit=crop&w=500&q=60"
                                            alt="Card limg" /></LazyLoad>
                                        <div className="overlay">
                                            <h2 className="card-title title">Cool Title</h2>
                                            <div className="more">
                                                <a href="post.html">
                                                    <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> More </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card card-pin">
                                        <LazyLoad offset={100}><img className="card-img"
                                            src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-0.3.5&s=c0043ea5aa03f62a294636f93725dd6e&auto=format&fit=crop&w=500&q=60"
                                            alt="Card limg" /></LazyLoad>
                                        <div className="overlay">
                                            <h2 className="card-title title">Cool Title</h2>
                                            <div className="more">
                                                <a href="post.html">
                                                    <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> More </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card card-pin">
                                        <LazyLoad offset={100}><img className="card-img"
                                            src="https://images.unsplash.com/photo-1485627658391-1365e4e0dbfe?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=976b0db5c3c2b9932bb20e72f98f9b61&auto=format&fit=crop&w=500&q=60"
                                            alt="Card limg" /></LazyLoad>
                                        <div className="overlay">
                                            <h2 className="card-title title">Cool Title</h2>
                                            <div className="more">
                                                <a href="post.html">
                                                    <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> More </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card card-pin">
                                        <LazyLoad offset={100}><img className="card-img"
                                            src="https://images.unsplash.com/photo-1502550900787-e956c314a221?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e90f191de3a03c2002ac82c009490e07&auto=format&fit=crop&w=500&q=60"
                                            alt="Card limg" /></LazyLoad>
                                        <div className="overlay">
                                            <h2 className="card-title title">Cool Title</h2>
                                            <div className="more">
                                                <a href="post.html">
                                                    <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> More </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card card-pin">
                                        <LazyLoad offset={100}><img className="card-img"
                                            src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9e3cd6ce6496c9c05cbf1b6cda8be0f9&auto=format&fit=crop&w=500&q=60"
                                            alt="Card limg" /></LazyLoad>
                                        <div className="overlay">
                                            <h2 className="card-title title">Cool Title</h2>
                                            <div className="more">
                                                <a href="post.html">
                                                    <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> More </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card card-pin">
                                        <LazyLoad offset={100}><img className="card-img"
                                            src="https://images.unsplash.com/photo-1509885903707-b68568db61ed?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5f11503655b51165836c2dcefa51a040&auto=format&fit=crop&w=500&q=60"
                                            alt="Card limg" /></LazyLoad>
                                        <div className="overlay">
                                            <h2 className="card-title title">Cool Title</h2>
                                            <div className="more">
                                                <a href="post.html">
                                                    <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> More </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card card-pin">
                                        <LazyLoad offset={100}><img className="card-img"
                                            src="https://images.unsplash.com/photo-1518707399486-6d702a84ff00?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b5bb16fa7eaed1a1ed47614488f7588d&auto=format&fit=crop&w=500&q=60"
                                            alt="Card limg" /></LazyLoad>
                                        <div className="overlay">
                                            <h2 className="card-title title">Cool Title</h2>
                                            <div className="more">
                                                <a href="post.html">
                                                    <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> More </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card card-pin">
                                        <LazyLoad offset={100}><img className="card-img"
                                            src="https://images.unsplash.com/photo-1519408299519-b7a0274f7d67?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d4891b98f4554cc55eab1e4a923cbdb1&auto=format&fit=crop&w=500&q=60"
                                            alt="Card limg" /></LazyLoad>
                                        <div className="overlay">
                                            <h2 className="card-title title">Cool Title</h2>
                                            <div className="more">
                                                <a href="post.html">
                                                    <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> More </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card card-pin">
                                        <LazyLoad offset={100}><img className="card-img"
                                            src="https://images.unsplash.com/photo-1506706435692-290e0c5b4505?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0bb464bb1ceea5155bc079c4f50bc36a&auto=format&fit=crop&w=500&q=60"
                                            alt="Card limg" /></LazyLoad>
                                        <div className="overlay">
                                            <h2 className="card-title title">Cool Title</h2>
                                            <div className="more">
                                                <a href="post.html">
                                                    <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> More </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card card-pin">
                                        <LazyLoad offset={100}><img className="card-img"
                                            src="https://images.unsplash.com/photo-1512355144108-e94a235b10af?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c622d56d975113a08c71c912618b5f83&auto=format&fit=crop&w=500&q=60"
                                            alt="Card limg" /></LazyLoad>
                                        <div className="overlay">
                                            <h2 className="card-title title">Cool Title</h2>
                                            <div className="more">
                                                <a href="post.html">
                                                    <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> More </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
            </section>

        </main>
    )
}
