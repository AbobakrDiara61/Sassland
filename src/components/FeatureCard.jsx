import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const FeatureCard = ({icon, title, brief}) => {
  return (
    <div className='bg-darkGray p-6 rounded-xl flex flex-col items-start gap-3 border border-gray-700 hover:border-saas/50 transition-all duration-300 shadow-[0_8px_10px_0.5px_rgba(255, 255, 255, 0.5)] shadow-[#ffffff]'>
        <div className='bg-saas/10 rounded-xl flex justify-center items-center p-3'>
          <FontAwesomeIcon icon={icon} className='text-saas'/>
        </div>
        <h4 className='text-white text-xl font-bold'>{title}</h4>
        <p className='text-gray-400'>{brief}</p>
    </div>
  )
}

export default FeatureCard
