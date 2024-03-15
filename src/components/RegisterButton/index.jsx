import React from "react";
import { Img, Text } from "./..";
import { Link } from "react-router-dom";

export default function RegisterButton({ button = "Register", ...props }) {
  return (
    <div {...props}>
     <Link to={"/login"}> <div className="flex flex-row justify-between items-center w-full md:h-auto p-[15px] bg-cyan-900 rounded-lg">
        <a href="#">
          <Text as="p" className="!text-white-A700_01 tracking-[0.25px] uppercase">
            {button}
          </Text>
        </a>
        <Img  src="images/img_arrow_right.svg" alt="arrowright_one" className="h-[16px] w-[16px]" />
      </div></Link>
    </div>
  );
}
