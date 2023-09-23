import { Dispatch, SetStateAction } from "react";
import "./accordion.css";

export type Accord = {
  title: string;
  text: string;
};
type AccordionItemProps = {
  accord: Accord;
  num: number;
  currentOpen: number | null;
  onOpen: Dispatch<SetStateAction<number | null>>;
};

const AccordionItem = ({
  accord,
  num,
  currentOpen,
  onOpen,
}: AccordionItemProps) => {
  const { title, text } = accord;
  const open = num === currentOpen;
  console.log(num, open);

  const handleToggle = () => {
    onOpen(open ? null : num);
    // onOpen((open) => !open);
  };
  return (
    <>
      <div className="accordion-item" onClick={handleToggle}>
        <div className="accordion-item1">
          <p className="title">{title}</p>
          <p className="icon">{open ? "-" : "+"}</p>
        </div>
        {open && <div className="content-box">{text}</div>}
      </div>
    </>
  );
};

export default AccordionItem;
