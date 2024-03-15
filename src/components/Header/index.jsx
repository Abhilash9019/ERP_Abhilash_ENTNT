import React from "react";
import { SelectBox, Img } from "./..";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function Header({ ...props }) {
  return (
    <header {...props}>
      <div className="flex flex-row justify-between items-center w-[21%] mr-8 sm:mr-5">
        <Img src="images/img_search.svg" alt="search_one" className="h-[28px] w-[28px]" />
        <Img src="images/img_notifications.svg" alt="notifications" className="h-[24px] w-[24px]" />
        <SelectBox
          shape="round"
          indicator={<Img src="images/img_arrowdown.svg" alt="arrow_down" />}
          name="button_five"
          placeholder="Admin"
          options={dropDownOptions}
          className="w-[43%] gap-px tracking-[0.25px] font-rubik uppercase font-medium"
        />
      </div>
    </header>
  );
}
