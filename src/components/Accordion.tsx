import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import type { Faq } from "../@types/faq";
type Props = {
  data: Faq[];
};

export default function Accordion({ data, ...props }: Props) {
  const [openIndex, setOpenIndex] = useState(-1);
  const [heights, setHeights] = useState<number[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const newHeights = contentRefs.current.map((ref) => ref?.scrollHeight ?? 0);
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
    <div className="accordion flex flex-col text-left" {...props}>
      {data.map((accordion, i) => (
        <div className="accordion-item mb-2 rounded-xl bg-[#8BA6FF33]" key={i}>
          <div
            className={`accordion-title flex cursor-pointer items-start p-5 ${openIndex === i ? "border-b border-white/20" : ""}`}
            onClick={() => toggleAccordion(i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            aria-expanded={openIndex === i}
            aria-controls={`accordion-content-${i}`}
            tabIndex={0}
            role="button"
          >
            <a className="flex-1 text-left" id={`accordion-title-${i}`}>
              {accordion.question}
            </a>
            <div
              className={`accordion-icon flex-shrink-0 ${openIndex === i ? "rotate-180 transform" : ""}`}
            >
              <ChevronDown />
            </div>
          </div>
          <div
            id={`accordion-content-${i}`}
            aria-labelledby={`accordion-title-${i}`}
            aria-hidden={i !== openIndex}
            className={`accordion-content overflow-hidden transition-[max-height] duration-300 ease-in-out`}
            style={{ maxHeight: openIndex === i ? `${heights[i]}px` : "0px" }}
          >
            <div
              className="accordion-content-padding px-4 py-4 text-left"
              ref={(el) => {
                contentRefs.current[i] = el;
              }}
            >
              {accordion.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
