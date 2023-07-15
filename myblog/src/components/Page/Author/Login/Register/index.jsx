import React from 'react'
import { Link, useNavigate } from 'react-router-dom';


export default function Register() {
    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault();
        // 发送的请求头（request headers）是 application/x-www-form-urlencoded 类型，
        // 因此需要更改请求正文的格式以匹配后端期望的格式。
        // 创建了一个新的 URLSearchParams 对象，并将 formData 传递给它。
        // 然后将 params 作为请求正文的值进行发送。
        const formData = new FormData(event.target);
        const params = new URLSearchParams(formData);
        const email = document.getElementById("exampleFormEmail")

        fetch('https://www.linmumu.work/api/login/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: params,
        }).then(response => { return response.json(); }
        ).then(data => {
            console.log('Success:', data);
            // 将 email token 保存在本地存储中
            localStorage.setItem('token', JSON.stringify(data.token));
            localStorage.setItem('email', email.value)
            // 从本地存储中获取 token
            // const token = localStorage.getItem('token');
            // alert(data.message)
            //成功后跳转到进去的页面
            navigate('/author/enter');
        }).catch((error) => {
            console.log('Register Error:' + error);
        });
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="px-4 py-3" id='registerForm' >
                <div className="form-group">
                    <label htmlFor='exampleFormEmail'>Email address</label>
                    <input type="email" name='email' className="form-control" id="exampleFormEmail" placeholder="email@example.com" autoComplete='true' />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormPassword">Password</label>
                    <input type="password" name='password' className="form-control" id="exampleFormPassword" placeholder="Password" autoComplete='true' />
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="Check" autoComplete='true' />
                        <label className="form-check-label" htmlFor="Check">
                            Remember me
                        </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary" >Sign in</button>
            </form>


            <Link className="dropdown-item" to='/author/login/sign' >New around here? Sign up</Link>
            <Link className="dropdown-item" to='/author/login/forget' >Forgot password?</Link>
        </div>
    )
}
