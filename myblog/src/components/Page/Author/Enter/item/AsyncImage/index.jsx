import React, { useState, useEffect } from 'react';

function AsyncImage(props) {
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    const img = document.getElementById(props.id)
    img.src = `http://127.0.0.1:3007/get/photo/${props.src}`
    // console.log(img.src);
    img.onload = () => {
      console.log(123, props.id, '#');
      setLoaded(true);
    };
  }, []);


  return (
    <>
      {loaded && <img id={props.id} className="card-img" alt="Card authorimage" src='' />}
    </>
  )
}

export default AsyncImage