import React, { useEffect, useRef, useState, lazy, Suspense } from 'react'
import { useNavigate } from 'react-router'
const ImageList = lazy(() => import('./item'));

export default function Enter() {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true);
    const [isShow, setisShow] = useState('false');
    const email = localStorage.getItem("email")
    const result = useRef([])
    const params = new URLSearchParams()
    params.append("email", email)

    useEffect(() => {
        fetch('http://43.138.174.71:3007/user/enter', {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: params,
        }).then(response => response.json()
        ).then(data => {
            console.log('Success:', data);
            result.current = data.results
            console.log(data, result, result.current);
            setIsLoading(false)
        }).catch((error) => {
            console.error('Error:', error);
        });
        return () => { }
    }, [])


    return (
        <main role="main">
            <div className="jumbotron border-round-0 min-50vh"
                style={{ backgroundColor: 'rgb(240, 114, 12)' }}>
            </div>
            <div className="container mb-4">
                <img src="../assets/img/av.png" className="mt-neg100 mb-4 rounded-circle" width="128" alt='author' />
                <h1 className="font-weight-bold title">Sal</h1>
                <p>
                    I love Art, Web Design, Photography, Design, Illustration
                </p>
            </div>
            <div className="container-fluid mb-5 showfather">
                {
                    isShow === 'true' ?
                        <div className='show' id='show' >
                            <button id='false' onClick={() => { setisShow('false') }} style={{}}>关闭</button>
                            <blockquote className="blockquote text-center">
                                <p className="mb-0">A well-known quote, contained in a blockquote element.</p>
                                <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                            </blockquote>
                        </div>
                        :
                        <div className="row">
                            <div className="card-columns">
                                {
                                    isLoading ? <div >Loading...</div> :
                                        result.current.length === 0 ? <div><h2>你还没有发表过作品</h2><button onClick={navigate('/post')}>点我去发表作品</button></div> :
                                            result.current.map((userObj) => {
                                                return (
                                                    <div key={userObj.id}>
                                                        {


                                                            <div className="card card-pin" onClick={() => { setisShow('true') }}>
                                                                <img className="card-img" alt="Card authorimage" src={`http://43.138.174.71:3007/get/photo/${userObj.imagefile}`} />
                                                                <div className="overlay">
                                                                    <h2 className="card-title title">{userObj.title}</h2>
                                                                    <div className="more">
                                                                        <a href="post.html">
                                                                            <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> More </a>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        }
                                                    </div>
                                                )
                                            })}


                            </div>
                        </div>
                }
            </div>

        </main>
    )
}
