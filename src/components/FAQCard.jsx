import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FAQCard = ({question, answer, i, setActiveIndex, activeIndex}) => {
    
    return (
        <li className={`not-last:border-b border-gray-800 pb-5`}>
            <button 
                className={`${activeIndex === i ? "active" : "" } w-full group flex items-center justify-between cursor-pointer`}
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
            >
                <h4 className='text-white group-hover:text-saas  md:text-lg font-medium group-hover:underline duration-300 transition-all'>{question}</h4>
                <FontAwesomeIcon icon={faChevronDown} className='text-white group-hover:text-saas text-sm group-[&.active]:rotate-180 transform duration-300 transition-all' />
            </button>
            <p className={`${activeIndex === i ? "active" : "" } max-h-0 [&.active]:max-h-96 overflow-hidden opacity-0 [&.active]:opacity-100 text-gray-400 text-xs md:text-sm mt-4 duration-300 transition-all`}>{answer}</p> 
        </li>
    )
}

export default FAQCard
