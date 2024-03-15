import React from "react";
import { Text, Img } from "./..";
import { Menu, Sidebar } from "react-pro-sidebar";

export default function Sidebar1({ ...props }) {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <Sidebar
      {...props}
      width="260px !important"
      collapsedWidth="80px !important"
      collapsed={collapsed}
      onClick={() => {
        setCollapsed(!collapsed);
      }}
    >
      <Img src="images/img_group.svg" alt="image" className="h-[48px] mt-[7px] ml-[18px]" />
      <Menu
        menuItemStyles={{
          button: {
            padding: " ",
            margin: " ",
            [`&:hover, &.ps-active`]: {
              color: "#000000",
              fontWeight: "500 !important",
              backgroundColor: "#ffffff !important",
            },
          },
        }}
        rootStyles={{ ["&>ul"]: { gap: "16px" } }}
        className="flex flex-col self-center w-full mb-[805px]"
      >
        <div className="flex self-start items-center gap-2 p-[15px]">
          <Img src="images/img_dashboaard.svg" alt="dashboaard_one" className="h-[16px] w-[16px]" />
          <Text as="p" className="!text-gray-900_02 tracking-[0.25px] uppercase">
            Dashboard
          </Text>
        </div>
        <div className="flex self-start items-center gap-2 p-[15px]">
          <Img src="images/img_albums.svg" alt="albums_one" className="h-[16px] w-[16px]" />
          <Text as="p" className="tracking-[0.25px] uppercase">
            All products
          </Text>
        </div>
        <div className="flex self-start items-center gap-2 p-[15px]">
          <Img src="images/img_document_text_black_900_16x16.svg" alt="image_one" className="h-[16px] w-[16px]" />
          <Text as="p" className="!text-gray-900_02 tracking-[0.25px] uppercase">
            Order list
          </Text>
        </div>
        <div className="flex self-start items-center gap-2 p-[15px] bg-cyan-900">
          <Img src="images/img_document_text_white_a700_01_16x16.svg" alt="image_two" className="h-[16px] w-[16px]" />
          <Text as="p" className="!text-white-A700_01 tracking-[0.25px] uppercase">
            Calendar
          </Text>
        </div>
        <div className="flex self-start items-center gap-2 p-[15px]">
          <Img src="images/img_document_text.svg" alt="image_three" className="h-[16px] w-[16px]" />
          <Text as="p" className="tracking-[0.25px] uppercase">
            Add new product
          </Text>
        </div>
      </Menu>
    </Sidebar>
  );
}
