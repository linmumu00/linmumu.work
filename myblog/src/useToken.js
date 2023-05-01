// const token = localStorage.getItem("token").replace('"', "").replace('"', "")  错误的示范

export default function userToken(navigate, components) {
    let token = localStorage.getItem("token")
    if (token === null) token = ''
    else token = token.replace('"', "").replace('"', "")  //这个一定要放在里面function！！！ 不然要刷新页面才会更新token（放在外面的话react路由的转换不会触发到它）

    fetch('http://43.138.174.71:3007/function/token', {
        method: "POST",
        headers: {
            "Authorization": ('Bearer ' + token) || '', //如果没有登录过，token会是undefined，则利用空字符串，以免报错
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(response => response.json()
    ).then(data => {
        if (data.status === 0) {
            console.log('token');
            if (components === 'author')
                navigate('/author/enter');  //如果是author则验证通过后进入enter界面，其它进入后原地不动
        }
        else {
            navigate('/author/login/register');//token通过失败则进入登录界面
        }
    }).catch((error) => {
        console.error('Error:', error);
        navigate('/author/login/register');//token验证错误也是进入登录界面
    });
}