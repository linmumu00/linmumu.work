import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import userToken from '../../../useToken';

export default function Post() {

    const navigate = useNavigate()
    const [title, setTitle] = useState(() => {
        const savedValue = localStorage.getItem("title");
        return savedValue !== null ? savedValue : "";
    });
    // 通过localStorage将输入的值存到本地去，可以让用户切换(刷新)的时候能够保存数据
    const [content, setContent] = useState(() => {
        const savedValue = localStorage.getItem("content");
        return savedValue !== null ? savedValue : "";
    });
    const [imageFile, setImageFile] = useState(() => {
        const savedValue = localStorage.getItem("imageFile");
        return savedValue !== null ? savedValue : '';
    });
    const email = localStorage.getItem("email")
    const [imagefile, setImagefile] = useState(null)


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (title === '' || content === '') {
            alert('文章标题或者内容不能为空')
            return
        }

        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('imagefile', imagefile);
        formData.append('email', email);

        try {
            const response = await fetch('http://43.138.174.71:3007/post/articles', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            alert(data.message)
            if (data.status === 0)
                navigate('/author/enter')  //文章发布成功后到达用户界面
        } catch (error) {
            console.error(error);
            navigate('/author/enter')
        }
        localStorage.removeItem('title')
        localStorage.removeItem('content')
        localStorage.removeItem('imageFile')
    };

    useEffect(() => {
        userToken(navigate, 'post')
        localStorage.setItem("title", title);
        localStorage.setItem("content", content);
        localStorage.setItem("imageFile", imageFile);
    }, [title, content, imageFile])

    return (
        <main role="main">
            <section className="bg-Azure pt-5 pb-5">
                {/* <!-- 表单开始 --> */}
                <form className="container" onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="row">
                        <div className="col-12 col-sm-4">
                            <img className="img-fluid" id="article-img"
                                src={imageFile !== '' ? imageFile : 'https://images.unsplash.com/photo-1516601255109-506725109807?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ce4f3db9818f60686e8e9b62d4920ce5&auto=format&fit=crop&w=500&q=60'}
                                alt="Card postimage" />
                            {/* <!-- 图片上传 --> */}
                            <div className="form-group">
                                <label className='file-input-label' htmlFor="article-imginput">插入图片</label>
                                <input style={{ display: 'none' }} type="file" onChange={(e) => { setImagefile(e.target.files[0]); setImageFile(URL.createObjectURL(e.target.files[0])); }} className="form-control-file" id="article-imginput" />
                                <small className="form-text text-muted">支持JPG、PNG格式的图片，最大不超过5MB</small>
                            </div>
                        </div>
                        <div className="container col-12 col-sm-8">
                            <h1>发布文章</h1>

                            {/* <!-- 标题输入框 --> */}
                            <div className="form-group">
                                <label htmlFor="article-title">标题</label>
                                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="article-title" placeholder="请输入文章标题" />
                                {/* <input type="text" value={title?} onChange={(e) => localStorage.setItem("title2", e.target.value)} className="form-control" id="article-title" placeholder="请输入文章标题" /> */}
                            </div>
                            <h1 className='text-center pt-5'>{title}</h1>
                        </div>
                        <div className="card-body" >
                            <div id="comments" className="mt-4">
                                {/* <!-- 正文输入框 --> */}
                                <div className="form-group">
                                    <label htmlFor="article-content">正文</label>
                                    <textarea value={content} onChange={(e) => setContent(e.target.value)} className="form-control" id="article-content" rows="10" placeholder="请输入文章正文" />
                                </div>

                                {/* <!-- 提交按钮 --> */}
                                <button type="submit" className="btn btn-primary">发布</button>

                                {/* <!-- 表单结束 --> */}
                            </div>
                        </div>
                    </div>
                </form>

                <div className="container-fluid mt-5">
                    <div className="row">
                        <h5 className="font-weight-bold">More like this</h5>
                        <div className="card-columns">
                            <div className="card card-pin">
                                <img className="card-img"
                                    src="https://images.unsplash.com/photo-1518707399486-6d702a84ff00?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b5bb16fa7eaed1a1ed47614488f7588d&auto=format&fit=crop&w=500&q=60"
                                    alt="Card postimage" />
                                <div className="overlay">
                                    <h2 className="card-title title">Some Title</h2>
                                    <div className="more">
                                        <a href="post.html">
                                            <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> More </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-pin">
                                <img className="card-img"
                                    src="https://images.unsplash.com/photo-1519408299519-b7a0274f7d67?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d4891b98f4554cc55eab1e4a923cbdb1&auto=format&fit=crop&w=500&q=60"
                                    alt="Card postimage" />
                                <div className="overlay">
                                    <h2 className="card-title title">Some Title</h2>
                                    <div className="more">
                                        <a href="post.html">
                                            <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> More </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-pin">
                                <img className="card-img"
                                    src="https://images.unsplash.com/photo-1506706435692-290e0c5b4505?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0bb464bb1ceea5155bc079c4f50bc36a&auto=format&fit=crop&w=500&q=60"
                                    alt="Card postimage" />
                                <div className="overlay">
                                    <h2 className="card-title title">Some Title</h2>
                                    <div className="more">
                                        <a href="post.html">
                                            <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> More </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-pin">
                                <img className="card-img"
                                    src="https://images.unsplash.com/photo-1512355144108-e94a235b10af?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c622d56d975113a08c71c912618b5f83&auto=format&fit=crop&w=500&q=60"
                                    alt="Card postimage" />
                                <div className="overlay">
                                    <h2 className="card-title title">Some Title</h2>
                                    <div className="more">
                                        <a href="post.html">
                                            <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> More </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-pin">
                                <img className="card-img"
                                    src="https://images.unsplash.com/photo-1518542331925-4e91e9aa0074?ixlib=rb-0.3.5&s=6958cfb3469de1e681bf17587bed53be&auto=format&fit=crop&w=500&q=60"
                                    alt="Card postimage" />
                                <div className="overlay">
                                    <h2 className="card-title title">Some Title</h2>
                                    <div className="more">
                                        <a href="post.html">
                                            <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> More </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-pin">
                                <img className="card-img"
                                    src="https://images.unsplash.com/photo-1513028179155-324cfec2566c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=32ce1df4016dadc177d6fce1b2df2429&auto=format&fit=crop&w=350&q=80"
                                    alt="Card postimage" />
                                <div className="overlay">
                                    <h2 className="card-title title">Some Title</h2>
                                    <div className="more">
                                        <a href="post.html">
                                            <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> More </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-pin">
                                <img className="card-img"
                                    src="https://images.unsplash.com/photo-1516601255109-506725109807?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ce4f3db9818f60686e8e9b62d4920ce5&auto=format&fit=crop&w=500&q=60"
                                    alt="Card postimage" />
                                <div className="overlay">
                                    <h2 className="card-title title">Some Title</h2>
                                    <div className="more">
                                        <a href="post.html">
                                            <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> More </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-pin">
                                <img className="card-img"
                                    src="https://images.unsplash.com/photo-1505210512658-3ae58ae08744?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2ef2e23adda7b89a804cf232f57e3ca3&auto=format&fit=crop&w=333&q=80"
                                    alt="Card postimage" />
                                <div className="overlay">
                                    <h2 className="card-title title">Some Title</h2>
                                    <div className="more">
                                        <a href="post.html">
                                            <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> More </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-pin">
                                <img className="card-img"
                                    src="https://images.unsplash.com/photo-1488353816557-87cd574cea04?ixlib=rb-0.3.5&s=06371203b2e3ad3e241c45f4e149a1b3&auto=format&fit=crop&w=334&q=80"
                                    alt="Card postimage" />
                                <div className="overlay">
                                    <h2 className="card-title title">Some Title</h2>
                                    <div className="more">
                                        <a href="post.html">
                                            <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> More </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-pin">
                                <img className="card-img"
                                    src="https://images.unsplash.com/photo-1518450757707-d21c8c53c8df?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c88b5f311958f841525fdb01ab3b5deb&auto=format&fit=crop&w=500&q=60"
                                    alt="Card postimage" />
                                <div className="overlay">
                                    <h2 className="card-title title">Some Title</h2>
                                    <div className="more">
                                        <a href="post.html">
                                            <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> More </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>

    )
}
