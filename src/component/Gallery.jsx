import React, { useEffect, useState } from 'react'
import './gallery.css'
const Gallery = () => {
    const [Data,SetData]=useState([])
    useEffect(() => {
        fetch("https://api.unsplash.com/photos/?client_id=s0dv0FSRydEa2ZjPMzK63I2GUO8rgOFAVe6pgu3mPnA")
          .then((res) => res.json())
          .then((result) => SetData(result));
      }, []);
    
  return (
    <>
    <br/>
    <div class="lbl">
    GeekGallery


    <div className='input'>
    <input type='text' placeholder='search image'/>
    <button>search</button><br/><br/>
    </div>
    </div>
    <div className="container">
    {
        Data.map((e)=>(
            
    <div style={{backgroundImage: `url(${e.urls.full})`,  backgroundRepeat:"no-repeat",backgroundSize: "cover" }} className="main">
            <p className='content'>{e.user.first_name}</p>
            <p className='date'>{e.created_at}</p>
        </div>
        ))
    }
      </div>
    </>
  )
}

export default Gallery
