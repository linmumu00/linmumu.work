// const token = localStorage.getItem("token").replace('"', "").replace('"', "")  错误的示范

export default function userToken(navigate, components) {
    let token = localStorage.getItem("token")
    if (token === null) token = ''
    else token = token.replace('"', "").replace('"', "")  //这个一定要放在里面function！！！ 不然要刷新页面才会更新token（放在外面的话react路由的转换不会触发到它）

    fetch('http://127.0.0.1:3007/function/token', {
        method: "POST",
        headers: {
            "Authorization": ('Bearer ' + token) || '',
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(response => response.json()
    ).then(data => {
        if (data.status === 0) {
            if (components === 'author')
                navigate('/author/enter');
        }
        else {
            alert(data.message);
            navigate('/author/login/register');
        }
    }).catch((error) => {
        console.error('Error:', error);
        alert("登录失败");
        navigate('/author/login/register');
    });
}