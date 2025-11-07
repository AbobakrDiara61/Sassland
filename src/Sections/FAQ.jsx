import frequentlyAskedQuestions from '../data/faq'
import FAQCard from '../components/FAQCard'
import { useState } from 'react';
const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    return (
        <section className="faq-section bg-black-bg border-t border-gray-800 pt-16">
            <div className="main-container section-container">
                <header className='main-heading mb-12'>
                    <h2>Frequently Asked <span className='text-gradient'>Questions</span></h2>
                    <p>Find answers to common questions about Sassland. If you can't find what you're looking for, feel free to contact our support team.</p>
                </header>
                <ul className='flex flex-col bg-darkGray py-12 px-8 rounded-3xl'>
                    {
                        frequentlyAskedQuestions.map((faq, i) => <FAQCard {...faq} key={faq.id} {...{setActiveIndex, activeIndex, i}}/> )
                    }
                </ul>
            </div>
        </section>
    )
}

export default FAQ
