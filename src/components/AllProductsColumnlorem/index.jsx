import React from "react";
import { Heading, Img, Text, Button } from "./..";

export default function AllProductsColumnlorem({
  adidasultra = "Sport Shoes",
  sneaker = "Puma",
  price = "₹4000",
  summary = "Summary",
  longdistance = "Puma sports shoes feature innovative Disc technology for a secure fit and enhanced performance.",
  sales = "Product Sold",
  zipcode = "126",
  remaining = "Remaining Products",
  zipcode1 = "1269",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-start w-full gap-4 md:px-5 max-w-[328px]">
        <Img
          src="images/img_rectangle_10.png"
          alt="lorem_ipsum_one"
          className="w-[84px] md:h-auto object-cover rounded-lg"
        />
        <div className="flex flex-col items-start justify-start w-[70%] pb-2 gap-[15px]">
          <div className="flex flex-row justify-start items-start w-full gap-4">
            <div className="flex flex-col items-start justify-start w-[79%] pt-0.5 gap-px">
              <Heading size="s" as="h1" className="!text-gray-900_01">
                {adidasultra}
              </Heading>
              <Heading as="h2" className="!text-black-900_90 opacity-0.6">
                {sneaker}
              </Heading>
            </div>
            <Button color="gray_900_0c" size="xs" className="w-[15%] rotate-[-90deg] rounded">
              <Img src="images/img_ph_dots_three_vertical_bold_gray_900_01.svg" />
            </Button>
          </div>
          <Heading as="h3" className="!text-gray-900_01 !font-rubik">
            {price}
          </Heading>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-px md:px-5 max-w-[328px]">
        <Heading size="s" as="h2" className="!text-gray-900_01">
          {summary}
        </Heading>
        <Text as="p" className="!text-gray-900_90 !font-normal opacity-0.6">
          {longdistance}
        </Text>
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-[7px] p-[13px] md:px-5 border-gray-900_4c border border-solid max-w-[328px] rounded-lg">
        <div className="flex flex-row justify-between w-[99%] md:w-full mt-0.5">
          <Heading as="h2" className="mb-px !text-gray-900_a2 opacity-0.8">
            {sales}
          </Heading>
          <div className="flex flex-row justify-start items-center gap-2">
            {/* <Img src="images/img_arrow_up.svg" alt="image" className="h-[16px] w-[16px]" /> */}
            <Heading as="h3" className="!text-black-900_90 opacity-0.6">
              {zipcode}
            </Heading>
          </div>
        </div>
        <div className="h-px w-[99%] opacity-0.4 bg-gray-900_7e" />
        <div className="flex flex-row justify-between w-[99%] md:w-full">
          <Heading as="h2" className="mt-px !text-gray-900_a2 opacity-0.8">
            {remaining}
          </Heading>
          <div className="flex flex-row justify-start items-start w-[32%] gap-2">
            <div className="h-[4px] w-[56%] mt-[7px] bg-gray-300 relative rounded-sm">
              <div style={{ width: "58%" }} className="h-full bg-orange-400 absolute rounded-sm" />
            </div>
            <Heading as="h3" className="!text-black-900_90 opacity-0.6">
              {zipcode1}
            </Heading>
          </div>
        </div>
      </div>
    </div>
  );
}
