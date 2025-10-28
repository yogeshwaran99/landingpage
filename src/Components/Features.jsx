import {RiTeamLine} from "react-icons/ri";
import {GrStatusGood} from "react-icons/gr";
import {IoDocumentsOutline} from "react-icons/io5";
import {FaRegCircleUser} from "react-icons/fa6";
import Card from "./Card.jsx";

function Features() {

  const cards = [
    {id: 1, icon: <RiTeamLine />, Title: "Dedicated Teams", detail: "Work with a platform designed for people — not just processes. Our solutions help teams stay aligned, informed, and efficient, ensuring every project milestone is met with confidence."},
    {id: 2, icon: <GrStatusGood />, Title: " Simplicity and Affordability ", detail: "Access intuitive, cost-effective tools built to streamline your workflow. From onboarding to delivery, everything is optimized to save time and reduce complexity."},
    {id: 3, icon: <IoDocumentsOutline />, Title: "Comprehensive Documentation ", detail: "Get started quickly with detailed guides, integrations, and APIs. We make implementation seamless so your team can focus on what matters most — building."},
    {id: 4, icon: <FaRegCircleUser />, Title: "User-Centric Design ", detail: "Experience an interface built for clarity and speed. Every feature is designed to enhance productivity, ensuring your team works smarter, not harder."}
  ];
  return (
    <section id="features" className="md:m-12 dark:text-stone-200">

      <h1 className="font-bold text-center m-6">Built for modern product teams</h1>
      <div className="flex flex-col md:flex-row">
        <div className="mx-8 mt-12 px-px md:w-4/5 md:mt-0">
          <h1 className="font-bold mb-2 text-xl"> Meeting Industry Demands </h1>
          <p className=" my-4 text-base text-stone-800 dark:text-stone-400">We address the unique challenges faced by today’s construction and operations teams. From real-time collaboration to digital project tracking, our platform empowers you to overcome obstacles and deliver exceptional results.
          </p>
        </div>
        <Card cards={cards} />
      </div>
    </section>
  );
}

export default Features;
