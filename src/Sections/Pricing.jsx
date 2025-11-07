import { useRef, useState } from "react"
import plans from '../data/plans' 
import Plan from "../components/Plan";

const Pricing = () => {
  // eslint-disable-next-line no-unused-vars
  const [plan, setPlan] = useState("monthly");
  const billingRef = useRef(null);
  return (
    <section id="pricing" className='bg-gradient-to-b from-darkGray to-black-bg'>
        <div className="main-container section-container">
          <header className="main-heading">
            <h2>Simple, <span className="text-gradient">Transparent</span> Pricing</h2>
            <p>Choose the plan that fits your business needs. No hidden fees, no surprises.</p>

            <div className="text-sm text-gray-400 font-medium my-8 flex justify-center items-center gap-3">
              <label htmlFor="billing" className={`main-color-transition ${plan === "monthly"? "text-saas" : ""}`}>Monthly</label>
              <div className="bg-gray-600 rounded-full w-14 h-7 p-1 ">
                <button 
                  id="billing" ref={billingRef} 
                  className={`bg-white w-5 h-5 rounded-full cursor-pointer transform transition-transform duration-500 ${plan === "annual"? "translate-x-[calc(100%+6px)]" : ""} `}
                  onClick={() => setPlan(p => p === "annual"? "monthly" : "annual")}
                />
              </div>
              <label htmlFor="billing" className={`main-color-transition ${plan === "annual"? "text-saas" : ""}`}>
                {/* Annual <span className={``}> &lpar; Save 20% &rpar; </span> */}
                Annual <span className={`main-color-transition ${plan === "annual"? "text-saas" : "text-saas/80"}`}> (Save 20%) </span>
              </label>
            </div>
          </header>
          {/* Pricing Card Plans */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {plans.map(pricePlan => <Plan pricePlan={pricePlan} billing={plan} key={pricePlan.name} />)}
          </div>
        </div>
    </section>
  )
}

export default Pricing