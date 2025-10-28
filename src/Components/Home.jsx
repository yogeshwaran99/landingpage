import img from "./../assets/sde1.png";
function Home() {
  return (
    <section id="home " >
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mx-4 md:mx-12 mb-24">
        <div className="md:w-2/4">
          <div className="p-2 flex flex-col items-center justify-center md:mt-16 md-p-4"  >
            <div className="flex h-80 pt-20 flex-col p-4  justify-center gap-4 md:p-0 ">
              <h1 className="text-3xl font-bold dark:text-stone-200 md:text-6xl md:leading-20">Equip Your Projects with <span className="text-pink-500">ForgeFlow</span></h1>
              <h3 className="dark:text-stone-400 md:text-xl">Top-quality tools and cloud-based services designed to simplify construction management and boost productivity. </h3>
            </div>
            <div className="flex flex-col w-full gap-4 px-2 md:flex-row">
              <button className="font-bold p-3 bg-orange-500 rounded-2xl text-stone-50 hover:cursor-pointer hover:bg-orange-700" >Start Exploring &gt; </button>
              <button className="p-3 text-stone-800 font-medium bg-stone-300 rounded-2xl hover:cursor-pointer hover:bg-stone-400">Contact Sales Team</button>
            </div>
          </div>

          <h1 className="text-center mt-8 dark:text-stone-300 font-bold md:text-left md:pl-8">Trusted by 73,000+ businesses worldwide</h1>
          <div className="h-px w-64 mt-8 mx-auto border-t border-neutral-400 md:mx-8 md:mt-4"></div>
          <div className=" flex flex-col items-center gap-3 pt-8 md:items-start md:ml-8 md:pt-2">
            <div className="flex items-baseline">
              <div className="flex space-x-1">
                <svg className="h-4 w-4 text-yellow-500" viewBox="0 0 51 51" fill="none">
                  <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor" />
                </svg>
                <svg className="h-4 w-4 text-yellow-500" viewBox="0 0 51 51" fill="none">
                  <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor" />
                </svg>
                <svg className="h-4 w-4 text-yellow-500" viewBox="0 0 51 51" fill="none">
                  <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor" />
                </svg>
                <svg className="h-4 w-4 text-yellow-500" viewBox="0 0 51 51" fill="none">
                  <path d="M27.0352 1.6307L33.9181 16.3633C34.2173 16.6768 34.5166 16.9903 34.8158 16.9903L50.0779 19.1845C50.9757 19.1845 51.275 20.4383 50.6764 21.0652L39.604 32.3498C39.3047 32.6632 39.3047 32.9767 39.3047 33.2901L41.998 49.2766C42.2973 50.217 41.1002 50.8439 40.5017 50.5304L26.4367 43.3208C26.1375 43.3208 25.8382 43.3208 25.539 43.3208L11.7732 50.8439C10.8754 51.1573 9.97763 50.5304 10.2769 49.59L12.9702 33.6036C12.9702 33.2901 12.9702 32.9767 12.671 32.6632L1.29923 21.0652C0.700724 20.4383 0.999979 19.4979 1.89775 19.4979L17.1598 17.3037C17.459 17.3037 17.7583 16.9903 18.0575 16.6768L24.9404 1.6307C25.539 0.69032 26.736 0.69032 27.0352 1.6307Z" fill="currentColor" />
                </svg>
                <svg className="h-4 w-4 text-yellow-500" viewBox="0 0 51 51" fill="none">
                  <path d="M49.6867 20.0305C50.2889 19.3946 49.9878 18.1228 49.0846 18.1228L33.7306 15.8972C33.4296 15.8972 33.1285 15.8972 32.8275 15.2613L25.9032 0.317944C25.6021 0 25.3011 0 25 0V42.6046C25 42.6046 25.3011 42.6046 25.6021 42.6046L39.7518 49.9173C40.3539 50.2352 41.5581 49.5994 41.2571 48.6455L38.5476 32.4303C38.5476 32.1124 38.5476 31.7944 38.8486 31.4765L49.6867 20.0305Z" fill="transparent" />
                  <path d="M0.313299 20.0305C-0.288914 19.3946 0.0122427 18.1228 0.915411 18.1228L16.2694 15.8972C16.5704 15.8972 16.8715 15.8972 17.1725 15.2613L24.0968 0.317944C24.3979 0 24.6989 0 25 0V42.6046C25 42.6046 24.6989 42.6046 24.3979 42.6046L10.2482 49.9173C9.64609 50.2352 8.44187 49.5994 8.74292 48.6455L11.4524 32.4303C11.4524 32.1124 11.4524 31.7944 11.1514 31.4765L0.313299 20.0305Z" fill="currentColor" />
                </svg>
              </div>
              <p className="font-bold dark:text-stone-300"> 4.8 &nbsp; <span className="text-stone-500 font-bold dark:text-stone-300">/&nbsp; 5</span></p>
            </div>
            <p className="text-stone-500 dark:text-stone-300">
              From Over <span className="text-stone-700 dark:text-stone-300 font-bold">62.8k</span> Reviews
            </p>
          </div>
        </div>
        <div className="flex justify-center md:w-1/2 md:pt-12 ">
          <img src={img} alt="picture of computer" className="h-64 md:h-130" />
        </div>
      </div>
    </section>
  );
}
export default Home;
