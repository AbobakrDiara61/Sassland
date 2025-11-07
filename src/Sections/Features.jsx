import features from '../data/features'
import FeatureCard from '../components/FeatureCard'
const Features = () => {
  return (
    <section id='features' className='w-full bg-black-bg'>
        <div className="main-container section-container">
          <header className='main-heading mb-12'>
            <h2>Powerful <span className="text-gradient">Features</span> to Boost Your Business</h2>
            <p>Our comprehensive suite of tools will help you streamline operations and achieve your business goals more efficiently.</p>
          </header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map(feature => <FeatureCard {...feature} key={feature.id}/>)}
            </div>
        </div>
    </section>
  )
}

export default Features