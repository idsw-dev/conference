import { useState } from "react";
import type { Faq } from "../@types/faq";
type Props = {
  data: Faq[];
};

export default function Accordion({ data, ...props }: Props) {
  const [openIndex, setOpenIndex] = useState(-1);
  return (
    <div className="accordion flex flex-col gap-2">
      {data.map((accordion, i) => (
        <div className="accordion-item" key={i}>
          <div
            className="accordion-title flex cursor-pointer items-center border border-[#B8CAE3] bg-[#F3F8FF] p-5"
            onClick={() => setOpenIndex(i)}
          >
            <a className="flex-1">{accordion.question}</a>
            <div
              className={`accordion-icon ${openIndex == i ? "rotate-180 transform" : ""}`}
            >
              <IconChevronBottom />
            </div>
          </div>
          <div
            className={`accordion-content overflow-hidden border bg-white transition-[max-height] duration-200 ${openIndex == i ? "min-h-[100px]" : "h-0"}`}
          >
            <div className="accordion-content-padding px-4 py-4">
              {accordion.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function IconChevronBottom() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M30 12L16 24L2 12"
      ></path>
    </svg>
  );
}
