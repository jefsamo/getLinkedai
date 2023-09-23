import { Dispatch, SetStateAction } from "react";

export type Accord = {
  title: string;
  text: string;
};

export type AccordionItemProps = {
  accord: Accord;
  num: number;
  currentOpen: number | null;
  onOpen: Dispatch<SetStateAction<number | null>>;
};

export type AccordionType = {
  data: Accord[];
};
