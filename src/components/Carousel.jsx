import React, { useState } from 'react'
import './css/Carousel.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
const imgs = [
    "https://images.unsplash.com/photo-1617814086906-d847a8bc6fca?q=80&w=2042&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1728012743125-7cf03ec20c27?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
]
const length = imgs.length;

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const slider = (index) => {
    if(index < 0) 
        index = length - 1;
    if(index >= length)
        index = 0;
    setIndex(index)
  }

  return (
    <section className={`bg-gradient-to-b from-black-bg to-darkGray`} >
      <div className='main-container section-container'>

        <div className="main-heading mb-12">
          <h2>Powerful <span className="text-gradient">Carousel</span></h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="relative min-h-[512px]">
          <div>
            {imgs.map((img, i) =>
              <img 
                src={img} key={`img-${i}`} alt={`img-${i}`} 
                className={`${index === i ? "active" : ""} w-full h-full object-cover object-center p-2 border border-saas/50 rounded-2xl absolute top-0 left-0 opacity-0 [&.active]:opacity-100 [&.active]:z-10 transition-opacity duration-300`} 
              />
            )}
          </div>
          <button className={`carousel-arrow -left-10`} onClick={() => slider(index - 1)}>
            <FontAwesomeIcon icon={faChevronLeft}/>
          </button>
          <button className={`carousel-arrow -right-10`} onClick={() => slider(index + 1)}>
            <FontAwesomeIcon icon={faChevronRight}/>
          </button>
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30  flex items-center gap-2" >
            {Array(length).fill(0).map((_, i) => 
              <button onClick={(() => slider(i))} data-index={i} key={`carousel-dot-${i}`} className={`cursor-pointer w-7 h-7 rounded-full ${index === i && 'active'} opacity-50 [&.active]:opacity-100 bg-neutral-700 [&.active]:bg-neutral-900 border border-saas/50 p-1 duration-300 transition-all`} ></button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Carousel
