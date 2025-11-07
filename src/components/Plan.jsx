import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const Plan = ({pricePlan, billing}) => {
    const {name, description, annualPrice, monthlyPrice, features, isPopular, ctaText} = pricePlan;
  return (
    <div className={`bg-darkGray text-gray-400 flex flex-col gap-3 p-8 rounded-2xl border ${isPopular ? "border-saas/10 bg-gradient-to-b from-saas/20 to-transparent" : "border-gray-700/70"}`}>
        {isPopular && <p className='text-xs text-black font-bold uppercase tracking-wider bg-saas py-1 px-3 rounded-3xl w-fit'>Most Popular</p>}
        <h4 className='text-2xl text-white font-bold'>{name}</h4>
        <p className='mb-4'>{description}</p>
        <h3>
            <span className='text-3xl text-white font-bold inline-block mr-1'>
                ${billing === "annual" ? annualPrice : monthlyPrice}
            </span>
            <span className=''>
                {`/${billing}`}
            </span>
        </h3>
        <ul className='flex flex-col gap-4 pt-3'>
            {features.map((feature, index) => 
                <li key={`${name}-${index}`}>
                    <FontAwesomeIcon icon={faCheck} className='text-saas mr-1' />
                    {feature}
                </li>
            )}
        </ul>
        <button className={`main-btn py-3 mt-4 ${isPopular ? "" : "bg-transparent border border-saas/30 hover:bg-saas"}`}>{ctaText}</button>
    </div>
  )
}

export default Plan
