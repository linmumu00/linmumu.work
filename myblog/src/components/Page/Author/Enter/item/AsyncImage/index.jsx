import React, { useState, useEffect } from 'react';

function AsyncImage(props) {
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    const img = document.getElementById(props.id)
    img.src = `https://www.linmumu.work/api/get/photo/${props.src}`
    img.onload = () => {
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