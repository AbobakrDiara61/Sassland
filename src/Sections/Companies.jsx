import React from 'react'
import testimonials from '../data/testimonials'
import TestimonialCard from '../components/TestimonialCard'
const Companies = () => {
  return (
    <section id='companies' className='bg-black-bg'>
        <div className="main-container section-container">
            <header className="main-heading mb-12">
                <h2>Trusted by <span className='text-gradient'>Innovative</span> Companies</h2>
                <p>Don't just take our word for it. Here's what our customers have to say about Sassland.</p>
            </header>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {testimonials.map((testimonial, index) => <TestimonialCard {...testimonial} key={`${testimonial.name}-${index}`}/>)}
            </div>
        </div>
    </section>
  )
}

export default Companies
