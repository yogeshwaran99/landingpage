import {useState} from "react";
import {FaChevronDown, FaChevronUp} from "react-icons/fa";

function Faq() {

  const [open, setOpen] = useState(null);

  const faqs = [
    {
      question: "What is ForgeFlow?",
      answer:
        "ScrewFast is a cloud-based platform that provides construction management tools, real-time collaboration, and analytics to help teams complete projects faster and smarter.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely. We use end-to-end encryption, regular security audits, and comply with global data protection standards like GDPR to keep your information safe.",
    },
    {
      question: "Do you offer a free trial?",
      answer:
        "Yes! You can try all premium features free for 14 days — no credit card required. After that, you can choose a plan that fits your needs.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel or change your subscription anytime from your account dashboard. There are no hidden fees or long-term contracts.",
    },
    {
      question: "Do you integrate with other tools?",
      answer:
        "Yes, ScrewFast integrates seamlessly with popular tools like Slack, GitHub, and Google Workspace to simplify your workflow.",
    },
  ];

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <>
      <div className="p-8 flex flex-col md:flex-row md:justify-center md:m-12 md:gap-24">
        <div className="flex flex-col gap-4 py-4 md:w-2/4">
          <h1 className="text-2xl font-bold md:text-3xl dark:text-stone-200">Frequently asked questions </h1>
          <p className="md:text-lg dark:text-stone-300">Ask us anything about our brand and products, and get factual responses. </p>
        </div>
        <div className="space-y-4 w-full">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="p-4 hover:text-stone-600 transition cursor-pointer md:"
              onClick={() => toggle(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-base md:text-lg dark:text-stone-200">{item.question}</h3>
                {open === index ? (
                  <FaChevronUp className="text-orange-500 " />
                ) : (
                  <FaChevronDown className="text-stone-500 dark:text-stone-300" />
                )}
              </div>

              {open === index && (
                <p className="mt-3 text-stone-600 leading-relaxed md:text-lg">{item.answer}</p>
              )}
            </div>
          ))}
        </div>

        <div>

        </div>

      </div >
    </>
  );
}

export default Faq;
