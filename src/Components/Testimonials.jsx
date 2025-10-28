function Testimonials() {

  return (
    <section id="testimonials" className="m-8 md:mx-20 mt-24">
      <div className="flex flex-col md:flex-row md:gap-12 md:items-center">
        <div className="md:w-3/4 md:pr-24">
          <h1 className="text-3xl font-bold md:text-4xl mb-4 dark:text-stone-200" >Fast-Track Your Projects </h1>
          <p className="text-stone-500 py-4 dark:text-stone-400">Get up and running instantly with quick onboarding and automated setup. Experience project acceleration like never before — where speed meets precision. </p>

          <p className="italic pt-4 px-4 md:text-lg dark:text-stone-300">"This platform transformed the way we manage projects. Setup was effortless, and the response time is incredible. A true game-changer for modern construction and operations teams" </p>
          <h3 className="text-lg font-bold pt-2 px-4 md:pt-4 dark:text-stone-400">Samantha Ruiz</h3>
          <p className="text-sm px-4 pb-4 dark:text-stone-400"> Chief Operating Officer | ConstructIt Inc. </p>
        </div>
        <div className="grid grid-rows-2 grid-cols-2 my-8 md:w-3/5">
          <div className="p-2 border-r-2 border-b-2 border-gray-300 md:p-6">
            <h1 className="text-4xl font-bold md:text-5xl dark:text-stone-200">70k+</h1>
            <p className="text-sm text-stone-700 md:text-base dark:text-stone-300">teams empowered — from startups to large-scale contractors </p>
          </div>
          <div className="p-2 md:p-6">
            <h1 className="text-4xl font-bold md:text-5xl dark:text-stone-200">35%</h1>
            <p className="text-sm text-stone-700 md:text-base dark:text-stone-300">boost in overall project efficiency using our digital toolset </p>
          </div>
          <div className="p-2 md:p-6">
            <h1 className="text-4xl font-bold md:text-5xl dark:text-stone-200">15.3% </h1>
            <p className="text-sm text-stone-700 md:text-base dark:text-stone-300">reduction in operational costs reported by long-term users</p>
          </div>
          <div className="p-2 border-l-2 border-t-2 border-gray-300 md:p-6">
            <h1 className="text-4xl font-bold md:text-5xl dark:text-stone-200">2x</h1>
            <p className="text-sm text-stone-700 md:text-base dark:text-stone-300"> faster completion rates with streamlined workflow automation </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
