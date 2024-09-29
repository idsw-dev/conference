import { useState, useRef, useEffect } from "react";
import type { Faq } from "../@types/faq";
type Props = {
  data: Faq[];
};

export default function Accordion({ data, ...props }: Props) {
  const [openIndex, setOpenIndex] = useState(-1);
  const [heights, setHeights] = useState<number[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const newHeights = contentRefs.current.map(
      (ref) => ref?.scrollHeight ?? 0
    );
    setHeights(newHeights);
  }, [data]);

  const toggleAccordion = (index: number) => {
    if (openIndex === index) setOpenIndex(-1);
    else setOpenIndex(index);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLDivElement>,
    index: number,
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleAccordion(index);
    }
  };

  return (
    <div className="accordion flex flex-col" {...props}>
      {data.map((accordion, i) => (
        <div className="accordion-item" key={i}>
          <div
            className="accordion-title flex cursor-pointer items-center border border-[#B8CAE3] bg-[#F3F8FF] p-5"
            onClick={() => toggleAccordion(i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            aria-expanded={openIndex === i}
            aria-controls={`accordion-content-${i}`}
            tabIndex={0}
            role="button"
          >
            <a className="flex-1" id={`accordion-title-${i}`}>
              {accordion.question}
            </a>
            <div
              className={`accordion-icon ${openIndex === i ? "rotate-180 transform" : ""}`}
            >
              <IconChevronBottom />
            </div>
          </div>
          <div
            id={`accordion-content-${i}`}
            aria-labelledby={`accordion-title-${i}`}
            aria-hidden={i !== openIndex}
            className={`accordion-content overflow-hidden bg-white transition-[max-height] duration-300 ease-in-out ${openIndex === i ? 'border' : ''}`}
            style={{ maxHeight: openIndex === i ? `${heights[i]}px` : '0px' }}
          >
            <div
              className="accordion-content-padding px-4 py-4"
              ref={(el) => (contentRefs.current[i] = el)}
            >
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
