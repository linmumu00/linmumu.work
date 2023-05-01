import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import MyContext from '../../../MyContext'
import ImageList from './item';



export default function Enter() {

    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true);
    const [isShow, setisShow] = useState('false');
    const [message, setMessage] = useState({})
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
            // console.log('Success:', data);
            result.current = data.results
            // console.log(data);
            setIsLoading(false)
        }).catch((error) => {
            console.error('Error:', error);
        });
        return () => { }
    }, [])

    function onSetisShow(flag, itemMessage) {
        setisShow(flag)
        setMessage(itemMessage)
    }


    return (
        <main role="main">
            <div className="d-flex align-items-center justify-content-center " style={{ backgroundColor: 'black', height: "50vh" }}>
                <img style={{ objectFit: "cover", height: "100%", width: "100%" }} src="/assets/img/pexels-quang-nguyen-vinh-2144922.jpg" alt="" />
            </div>
            <div className="container mb-4">
                <img src="../assets/img/av.png" className="mt-neg100 mb-4 rounded-circle" width="128" alt='author' />
                <h1 className="font-weight-bold title">Sal</h1>
                <p>
                    I love Art, Web Design, Photography, Design, Illustration
                </p>
            </div>
            <div className="showFather container-fluid mb-5">
                {
                    isShow === 'true' ?
                        <div className='showAct container-fluid' id='show' >
                            <button className='btn-info' id='false' onClick={() => { setisShow('false') }} >关闭</button>
                            <blockquote className="blockquote text-center">
                                <h3 className="mb-0">{message.title}</h3>
                                <br /><br />
                                <div className="mb-0">
                                    {message.content.split('\n').map((paragraph, index) => (
                                        <React.Fragment key={index}>
                                            {paragraph}
                                            <br />
                                        </React.Fragment>
                                    ))}
                                </div>
                                <br />
                                <footer className="blockquote-footer">{message.id} <cite title="Source Title">{message.title}</cite></footer>
                            </blockquote>
                        </div>
                        :
                        <div className="row">
                            <div className="card-columns">
                                {
                                    isLoading ? <div >Loading...</div> :
                                        result.current.length === 0 ? <div><h2>你还没有发表过作品</h2><button onClick={navigate('/post')}>点我去发表作品</button></div> :
                                            <MyContext.Provider value={{ isShow, onSetisShow }}>
                                                {result.current.map((img) => {
                                                    return (
                                                        <ImageList key={img.id} img={img} />
                                                    )
                                                })}
                                            </MyContext.Provider>
                                }
                            </div>
                        </div>
                }
            </div>

        </main>
    )
}