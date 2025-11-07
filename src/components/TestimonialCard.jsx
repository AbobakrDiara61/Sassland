import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const TestimonialCard = ({name, image, role, review, numOfStars}) => {
  return (
    <div className='flex flex-col gap-6 p-5 rounded-3xl bg-gradient-to-b from-darkGray to-black-bg'>
         {console.log(image)}
        <div className='flex items-center gap-2 text-saas'>
            {Array(numOfStars).fill(0).map((_, index) => <FontAwesomeIcon icon={faStar} key={`faStar-${index}`}/>)}
        </div>
        <p className='text-gray-300 text-sm italic'>"{review}"</p>
        <div className='flex justify-start items-end gap-4'>
            <img 
                src={image} alt={`${name}-avatar`} 
                className='w-12 h-12 rounded-full'
            />
            <div className='flex flex-col justify-end'>
                <h4 className='text-white font-bold'>{name}</h4>
                <p className='text-gray-400 text-sm'>{role}</p>
            </div>
        </div>
    </div>
  )
}

export default TestimonialCard
