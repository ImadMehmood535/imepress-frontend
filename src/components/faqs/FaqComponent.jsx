import InnerpageHeader from "../general/InnerpageHeader";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { faqdata } from "../../data/faqdata";

const FaqComponent = () => {
  return (
    <div className="faq-page">
      <InnerpageHeader pageTitle={"Faq's"} breadcrums={"Faq"} />
      <div className="faq-area py-24 container w-full px-5 xl:w-[80%] mx-auto overflow-x-hidden">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex flex-col text-left w-full md:w-1/2">
            <p className="inline-block font-semibold text-primary mb-4">
              Lorem Ipsum
            </p>
            <h2 className="sm:text-4xl text-3xl font-extrabold text-base-content">
              Frequently Asked Questions
            </h2>
          </div>
          <Accordion variant="light">
            {faqdata.map((faq, index) => (
              <AccordionItem key={index} title={faq.title}>
                <div className="pb-5 leading-relaxed">
                  <div className="space-y-2 leading-relaxed">{faq.content}</div>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FaqComponent;
