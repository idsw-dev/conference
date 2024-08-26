import { useState } from "react";
type Props = {
  data: {
    title: string;
    content: string;
  }[];
}


export default function Accordion({ data, ...props }: Props) {
  const [openIndex, setOpenIndex] = useState(-1)
  return (
    <div className="accordion">
      {data.map((accordion, i) => (
        <div className="accordion-item">
          <a className="accordion-title block p-5 bg-[#F3F8FF] border border-[#B8CAE3]" onClick={() => setOpenIndex(i)}>
            {accordion.title}
          </a>
          <div className={`accordion-content p-5 bg-white border border-[#B8CAE3] transition duration-200  ${openIndex == i ? 'h-full' : 'h-0 p-0 overflow-hidden'}`}>
            {accordion.content}
          </div>
        </div>
      ))}
    </div>
  )
}
