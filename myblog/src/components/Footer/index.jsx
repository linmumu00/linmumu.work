import React from 'react'

export default function Footer() {
    return (
        <footer className="footer pt-5 pb-5 text-center" style={{ backgroundColor: '#F0FFFF' }}>
            <div className="container">
                {/* <div className="socials-media">

                    <ul className="list-unstyled">
                        <li className="d-inline-block ml-1 mr-1"><a href="/javascript" className="text-dark" alt="router"><i
                            className="fa fa-facebook"></i></a></li>
                        <li className="d-inline-block ml-1 mr-1"><a href="/javascript" className="text-dark" alt="router"><i className="fa fa-twitter"></i></a>
                        </li>
                        <li className="d-inline-block ml-1 mr-1"><a href="/javascript" className="text-dark" alt="router"><i
                            className="fa fa-instagram"></i></a></li>
                        <li className="d-inline-block ml-1 mr-1"><a href="/javascript" className="text-dark" alt="router"><i
                            className="fa fa-google-plus"></i></a></li>
                        <li className="d-inline-block ml-1 mr-1"><a href="/javascript" className="text-dark" alt="router"><i className="fa fa-behance"></i></a>
                        </li>
                        <li className="d-inline-block ml-1 mr-1"><a href="/javascript" className="text-dark" alt="router"><i
                            className="fa fa-dribbble"></i></a></li>
                    </ul>

                </div> */}
                <p>© <span className="credits font-weight-bold">
                    <a target="_blank" className="text-dark" rel="noreferrer"
                        href="https://beian.miit.gov.cn/" alt="router"><u>粤ICP备2022128421号-1</u></a>

                </span>
                </p>
            </div>
        </footer>
    )
}
