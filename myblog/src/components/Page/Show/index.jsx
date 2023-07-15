import React from 'react'
import MyNavLink from '../../MyNavLink'

export default function Show() {
    return (
        <div>
            <div className="jumbotron bg-Azure">
                <h1 className="display-4">欢迎来到我的个人学习美食分享网站！</h1>
                <p className="lead">
                    这个网站是我用来分享个人学习、知识和经验的平台。<br />
                    在这里，我将分享我在各个领域的学习心得、技术教程、思考和见解，包括美食和生活等方面的内容。<br />
                </p>
                <hr className="my-4" />
                <p>感谢您访问我的网站，并与我一同踏上知识的旅程。我希望这里能够成为您学习的源泉，激发您的好奇心，并助您在不断学习中不断成长。</p>

                <MyNavLink to='/home'><a className="btn btn-primary btn-lg" href='/javascript' role="button">开始探索吧！</a></MyNavLink>

            </div>
        </div>
    )
}
