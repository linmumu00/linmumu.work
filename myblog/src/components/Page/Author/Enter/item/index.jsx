import React, { lazy, Suspense } from "react";
import MyContext from "../../../../MyContext";
import AsyncImage from './AsyncImage/index'

function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms)
    })
}
const AsyncImages = lazy(() => delay(1000).then(x => ({ "default": AsyncImage })));

export default function ImageList(props) {
    const img = props.img
    return (
        <MyContext.Consumer>
            {({ setisShow }) => (
                <div className="card card-pin" onClick={() => { setisShow('true') }}>

                    <Suspense fallback={<img className="card-img" alt="Card authorimage" src='/assets/img/b3a36dfaa9390fb5-a9c0f23cd4324ece-8acc0b0233775d44789e79b2c2e9074f.jpg' />}>
                        <AsyncImages src={img.imagefile} id={img.id} />
                        {/* <img className="card-img" alt="Card authorimage" src='/assets/img/b3a36dfaa9390fb5-a9c0f23cd4324ece-8acc0b0233775d44789e79b2c2e9074f.jpg' /> */}
                    </Suspense>

                    <div className="overlay">
                        <h2 className="card-title title">{img.title}</h2>
                        <div className="more">
                            <a href="post.html">
                                <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i> More </a>
                        </div>
                    </div>
                </div>
            )}
        </MyContext.Consumer>
    );
}
