import { useState } from "react";
import type { Faq } from "../@types/faq";
type Props = {
  data: Faq[];
}


export default function Accordion({ data, ...props }: Props) {
  const [openIndex, setOpenIndex] = useState(-1)
  return (
    <div className="accordion">
      {data.map((accordion, i) => (
        <div className="accordion-item">
          <a className="accordion-title block p-5 bg-[#F3F8FF] border border-[#B8CAE3]" onClick={() => setOpenIndex(i)}>
            {accordion.question}
          </a>
          <div className={`accordion-content  bg-white border border-[#B8CAE3] transition-[max-height] duration-200  overflow-hidden  ${openIndex == i ? 'max-h-[100px]' : 'max-h-0 p-0'}`}>
            <div className="accordion-content-padding p-5">
              {accordion.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
