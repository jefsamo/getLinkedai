import { useState } from "react";
import AccordionItem, { Accord } from "./AccordionItem";
import "./accordion.css";

type AccordionType = {
  data: Accord[];
};

const Accordion = ({ data }: AccordionType) => {
  const [currentOpen, setCurrentOpen] = useState<number | null>(null);
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          currentOpen={currentOpen}
          onOpen={setCurrentOpen}
          accord={el}
          key={i}
          num={i + 1}
        />
      ))}
    </div>
  );
};

export default Accordion;
