import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Sign() {
    const navigate = useNavigate()
    function handleSubmit(event) {
        event.preventDefault();
        // 发送的请求头（request headers）是 application/x-www-form-urlencoded 类型，
        // 因此需要更改请求正文的格式以匹配后端期望的格式。
        // 创建了一个新的 URLSearchParams 对象，并将 formData 传递给它。
        // 然后将 params 作为请求正文的值进行发送。
        const formData = new FormData(event.target);
        const params = new URLSearchParams(formData);

        fetch('http://127.0.0.1:3007/login/sign', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: params,
        }).then(response => response.json()
        ).then(data => {
            if (data.status === 1) { alert(`该邮箱已经被注册过了(${data.message})`); navigate('/author/login/sign') }
            if (data.status === 0) { alert(`${data.message}`); navigate('/author/enter'); }
            localStorage.setItem('token', JSON.stringify(data.token));
            localStorage.setItem('email', JSON.stringify(data.email))
        }).catch((error) => {
            console.log('Error:', error);
            alert('注册失败')
            navigate('/author/enter')
        });
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleDropdownFormEmail2">Email address</label>
                    <input type="email" name='email' className="form-control" id="exampleDropdownFormEmail2" autoComplete="on" placeholder="email@example.com" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleDropdownFormPassword2">Password</label>
                    <input type="password" name='password' className="form-control" id="exampleDropdownFormPassword2" autoComplete="on" placeholder="Password" />
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="dropdownCheck2" autoComplete="on" />
                        <label className="form-check-label" htmlFor="dropdownCheck2">
                            Remember me
                        </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
        </div>
    )
}
