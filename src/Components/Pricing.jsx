import {FaCheckCircle} from "react-icons/fa";


function Pricing() {

  return (
    <section id="pricing" className="m-4" >

      <h1 className="font-bold text-2xl text-center md:text-4xl pb-4 dark:text-stone-200" > Simple, Transparent Pricing </h1>
      <p className="text-stone-500 text-center p-4 md:p-0 dark:text-stone-300">Boost efficiency with ScrewFast's clear, value-driven plans. </p>

      <div className="p-4 flex flex-col gap-4 md:flex-row md:justify-center md:w-full md:items-center md:gap-0 md:mt-12 md:p-0">

        <div className="bg-slate-700 p-8 rounded-3xl flex flex-col gap-4 md:w-1/3 md:h-90">
          <h1 className="text-stone-100 font-bold text-2xl"> Starter Plan </h1>
          <p className="text-stone-300">Best for small teams and individual creators</p>
          <h1 className="text-stone-100"><span className="text-6xl  font-bold">49</span> .00 <span className="text-stone-200">USD / monthly</span> </h1>
          <ul className="text-stone-200">
            <li className="flex items-center gap-3">
              <FaCheckCircle />Core management tools
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle />Access to tutorials and onboarding guides
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle />Standard support
            </li>
          </ul>
          <button className="text-white p-2 bg-slate-400 rounded-lg font-bold">Get the Starter Kit</button>
        </div>

        <div className="bg-gradient-to-tr from-orange-600 to-yellow-500 p-4 rounded-3xl flex flex-col gap-4 p-8 md:w-2/5">
          <div className="flex flex-col md:flex-row-reverse md:justify-between">
            <h3 className="bg-orange-200 w-fit px-2 text-orange-400 font-bold rounded-full md:p-1">Best value</h3>
            <h1 className="text-stone-100 font-bold text-2xl"> Professional Plan</h1>
          </div>
          <p className="text-stone-200 font-medium" >Ideal for growing teams and enterprise projects</p>
          <h1 className="text-stone-100"><span className="text-6xl font-bold text-stone-100">89</span>  .00 <span className="text-stone-200">&nbsp; USD / monthly </span></h1>
          <ul className="text-stone-200">
            <li className="flex items-center gap-3">
              <FaCheckCircle /> Premium tool selection
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle />
              Priority support
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle /> Exclusive content & deals
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle /> Bulk order discounts
            </li>
          </ul>
          <button className="text-stone-100 font-bold p-2 bg-orange-500 rounded-lg ">Get the professional Toolbox</button>
        </div>

      </div>
      <div className="flex justify-center gap-4 items-center text-sm md:m-12">
        <p className="dark:text-stone-300"> Enterprise Solutions? </p>
        <button className="bg-stone-300 p-2 rounded-lg"> Get a Custom Quote </button>
      </div>
    </section>
  );
}

export default Pricing;
