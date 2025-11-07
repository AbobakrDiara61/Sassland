// import contactImg from '../assets/contact.png'
const img = "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=1200&h=600&q=80";
const Contact = () => {

  return (
    <section id='contact' className='bg-darkGray py-40 px-5 text-white'>
      <div className="main-container section-container px-12 bg-saas/20 rounded-3xl flex items-center justify-between gap-y-10 max-md:flex-col">
        <div className="flex flex-col gap-5 md:basis-3/5">
          <h2 className="text-4xl font-bold">Ready to transform your business?</h2>
          <p className="max-w-[600px] text-gray-300">
            Join thousands of companies that are already streamlining their operations and growing their business with Sassland. Start your free trial today.
          </p>
          <div className="flex items-center gap-5">
            <button className="main-btn">Start Free Trial</button>
            <button className="main-btn bg-black-bg hover:bg-white hover:text-black">Schedule Demo</button>
          </div>
        </div>
        <div className="md:basis-2/6 aspec-[4/3] rounded-xl overflow-hidden">
          <img 
            src={img} 
            alt="" 
            className="w-full min-h-70 object-cover object-center"
          />
        </div>
      </div>
    </section>
  )
}

export default Contact