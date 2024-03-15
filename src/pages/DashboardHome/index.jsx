import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Img, Button } from "../../components";
import Header from "../../components/Header";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";

import { Link } from "react-router-dom";

const tableData = [
  { rowproduct: "Realme 9 ", roworderid: "#25426", customername: "Abhilash", status: "Delivered", amount: "₹1200.00" },
  { rowproduct: "Oneplus 10R", roworderid: "#25425", customername: "Adarsh", status: "Canceled", amount: "₹25000.00" },
  { rowproduct: "CPU", roworderid: "#25424", customername: "Nikhil", status: "Delivered", amount: "₹40000.00" },
  { rowproduct: "Mouse", roworderid: "#25423", customername: "Gagandeep", status: "Canceled", amount: "₹1200.00" },
  { rowproduct: "Watch", roworderid: "#25422", customername: "Anirudh", status: "Delivered", amount: "₹2200.00" },
  { rowproduct: "Shoes", roworderid: "#25421", customername: "Pandit", status: "Delivered", amount: "₹3200.00" },
];

export default function DashboardHomePage() {
  const [collapsed, setCollapsed] = React.useState(false);
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("rowproduct", {
        cell: (info) => (
          <div className="flex flex-row justify-start gap-6">
            <Img
              src="images/img_checkbox_gray_900_01_20x20.svg"
              alt="checkbox_three"
              className="h-[20px] w-[20px] mt-7 mb-4"
            />
            <Heading as="p" className="mb-[13px]">
              {info?.getValue?.()}
            </Heading>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row justify-start items-center gap-6 p-2">
            <Img
              src="images/img_checkbox_gray_900_01_20x20.svg"
              alt="checkbox_one"
              className="h-[20px] w-[20px] my-2"
            />
            <Heading size="s" as="h6" className="!text-gray-900_90 !font-rubik text-center opacity-0.8">
              Product
            </Heading>
          </div>
        ),
        meta: { width: "273px" },
      }),
      tableColumnHelper.accessor("roworderid", {
        cell: (info) => (
          <div className="flex flex-row justify-between">
            <Heading as="p" className="mt-[30px] mb-[17px] text-center">
              {info?.getValue?.()}
            </Heading>
            <Heading as="p" className="mb-4 mr-20 md:mr-5 text-center">
              Nov 8th,2023
            </Heading>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row justify-between pr-4 py-4">
            <Heading size="s" as="h6" className="!text-gray-900_90 !font-rubik text-center opacity-0.8">
              Order ID
            </Heading>
            <Heading size="s" as="h6" className="mr-24 md:mr-5 !text-gray-900_90 !font-rubik text-center opacity-0.8">
              Date
            </Heading>
          </div>
        ),
        meta: { width: "332px" },
      }),
      tableColumnHelper.accessor("customername", {
        cell: (info) => (
          <div className="flex flex-row justify-start items-end gap-2">
            <Img
              src="images/img_ellipse_1.png"
              alt="circleimage"
              className="h-[24px] w-[24px] md:h-auto mt-6 mb-4 rounded-[50%]"
            />
            <Heading as="p" className="mb-4 text-center">
              {info?.getValue?.()}
            </Heading>
          </div>
        ),
        header: (info) => (
          <Heading size="s" as="h6" className="pl-1.5 py-4 !text-gray-900_90 !font-rubik text-center opacity-0.8">
            Customer Name
          </Heading>
        ),
        meta: { width: "223px" },
      }),
      tableColumnHelper.accessor("status", {
        cell: (info) => (
          <div className="flex flex-row justify-start items-end gap-2">
            <div className="h-[8px] w-[8px] mb-7 bg-cyan-900 rounded-[50%]" />
            <Heading as="p" className="mt-[35px] mb-[21px] text-center">
              {info?.getValue?.()}
            </Heading>
          </div>
        ),
        header: (info) => (
          <Heading size="s" as="h6" className="pl-3.5 py-4 !text-gray-900_90 !font-rubik text-center opacity-0.8">
            Status
          </Heading>
        ),
        meta: { width: "172px" },
      }),
      tableColumnHelper.accessor("amount", {
        cell: (info) => (
          <Heading as="p" className="text-center">
            {info?.getValue?.()}
          </Heading>
        ),
        header: (info) => (
          <Heading size="s" as="h6" className="py-4 !text-gray-900_90 !font-rubik text-center opacity-0.8">
            Amount
          </Heading>
        ),
        meta: { width: "73px" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>Abhilash's Application3</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-gray-300">
        <div className="flex flex-row md:flex-col justify-center items-start w-full md:gap-5">
          <Sidebar
            width="262px !important"
            collapsedWidth="80px !important"
            collapsed={collapsed}
            onClick={() => {
              setCollapsed(!collapsed);
            }}
            className="h-screen top-0 border-gray-900_33 border-r border-solid bg-gray-50 !sticky overflow-auto"
          >
            <Img src="images/img_group.svg" alt="image" className="h-[48px] mt-[30px] ml-[43px] mr-[111px] md:mx-5" />
            <Menu
              menuItemStyles={{
                button: {
                  padding: "15px",
                  gap: "8px",
                  color: "#232321",
                  fontWeight: 500,
                  fontSize: "14px",
                  [`&:hover, &.ps-active`]: { color: "#ffffff", backgroundColor: "#003f62 !important" },
                },
              }}
              rootStyles={{ ["&>ul"]: { gap: "16px" } }}
              className="flex flex-col items-center justify-start w-full mt-[33px] mb-[1133px] px-6 md:gap-[16.00px] sm:px-5"
            >
                <Link to={"/dashboardhome"}>
              <MenuItem
                icon={<Img src="images/img_dashboaard.svg" alt="dashboaard_one" className="h-[16px] w-[16px]" />}
              >
            Dashboard 
              </MenuItem>
              </Link> 
              <Link to={"/allproducts"}>
              <MenuItem icon={<Img src="images/img_albums.svg" alt="albums_one" className="h-[16px] w-[16px]" />}>
           All products     
              </MenuItem>
              </Link>
              <Link to={"/orderslist"}>
              <MenuItem icon={<Img src="images/img_document_text.svg" alt="image_one" className="h-[16px] w-[16px]" />}>
            Order list   
              </MenuItem>
              </Link> 
             
             <Link to={"/productlist"}>
             <MenuItem
                icon={<Img src="images/img_document_text.svg" alt="image_three" className="h-[16px] w-[16px]" />}
              >
                Add new product
              </MenuItem></Link>
            </Menu>
          </Sidebar>
          <div className="flex flex-col items-center justify-start w-[82%] md:w-full gap-[23px]">
            <Header className="flex justify-center items-center w-full md:h-auto p-7 sm:p-5 border-gray-900_33 border-b border-solid bg-gray-50" />
            <div className="flex flex-col items-center justify-start w-[94%] md:w-full gap-[536px]">
              <div className="flex flex-col items-start justify-start w-full gap-6">
                <div className="flex flex-row justify-start w-[14%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-full gap-[3px]">
                    <Heading size="lg" as="h1" className="!font-rubik">
                      Dashboard
                    </Heading>
                    <Heading size="s" as="h2" className="!text-black-900_a2 opacity-0.8">
                      Home &gt; Dashboard
                    </Heading>
                  </div>
                </div>
                <div className="flex flex-row md:flex-col w-full gap-3.5">
                  <div className="flex flex-col items-center justify-center w-[33%] md:w-full gap-2 p-4 bg-gray-50 rounded-[16px]">
                    <div className="flex flex-row justify-between items-start w-full mt-2">
                      <Heading as="h3" className="mt-[3px] !font-rubik">
                        Total produts
                      </Heading>
                      <Img
                        src="images/img_ph_dots_three_vertical_bold.svg"
                        alt="total_oders_one"
                        className="h-[24px] w-[24px]"
                      />
                    </div>
                    <div className="flex flex-row justify-start items-center w-[40%] md:w-full mb-2 gap-4">
                      <Button color="cyan_900" size="md" shape="round" className="w-[40px]">
                        <Img src="images/img_bag_handle.svg" />
                      </Button>
                      <Heading size="s" as="h4" className="!font-rubik">
                        126
                      </Heading>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center w-[33%] md:w-full gap-2 p-4 bg-gray-50 rounded-[16px]">
                    <div className="flex flex-row justify-between items-start w-full mt-2">
                      <Heading as="h5" className="mt-0.5 !font-rubik">
                        Active Orders
                      </Heading>
                      <Img
                        src="images/img_ph_dots_three_vertical_bold.svg"
                        alt="phdotsthree_one"
                        className="h-[24px] w-[24px]"
                      />
                    </div>
                    <div className="flex flex-row justify-start items-center w-[40%] md:w-full mb-2 gap-4">
                      <Button color="cyan_900" size="md" shape="round" className="w-[40px]">
                        <Img src="images/img_bag_handle.svg" />
                      </Button>
                      <Heading size="s" as="h6" className="!font-rubik">
                        56
                      </Heading>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center w-[33%] md:w-full gap-2 p-4 bg-gray-50 rounded-[16px]">
                    <div className="flex flex-row justify-between items-center w-full mt-2">
                      <Heading as="p" className="!font-rubik">
                        Completed Orders
                      </Heading>
                      <Img
                        src="images/img_ph_dots_three_vertical_bold.svg"
                        alt="phdotsthree_one"
                        className="h-[24px] w-[24px]"
                      />
                    </div>
                    <div className="flex flex-row justify-start items-center w-[40%] md:w-full mb-2 gap-4">
                      <Button color="cyan_900" size="md" shape="round" className="w-[40px]">
                        <Img src="images/img_bag_handle.svg" />
                      </Button>
                      <Heading size="s" as="h6" className="!font-rubik">
                        101
                      </Heading>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center w-full gap-4 p-4 bg-gray-100 rounded-[16px]">
                  <div className="flex flex-row justify-between w-full mt-2">
                    <Heading size="md" as="h5" className="!font-rubik">
                      Recent Orders
                    </Heading>
                    <Img
                      src="images/img_ph_dots_three_vertical_bold.svg"
                      alt="phdotsthree_one"
                      className="h-[24px] w-[24px]"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start w-full mb-2 gap-[15px]">
                    <div className="h-px w-full bg-gray-900_33" />
                    <ReactTable
                      size="xs"
                      bodyProps={{ className: "md:flex-col" }}
                      headerProps={{ className: "border-gray-900_33 border-b border-solid md:flex-col md:gap-5" }}
                      rowDataProps={{ className: "md:flex-col md:gap-5" }}
                      className="w-[1076px]"
                      columns={tableColumns}
                      data={tableData}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-[15px]">
                <div className="h-px w-full bg-gray-900_33" />
                <div className="flex flex-row justify-center w-full">
                  <div className="flex flex-row justify-start w-[22%] gap-4">
                    <a href="#">
                      <Heading as="p" className="!text-gray-900_01 text-center">
                        About
                      </Heading>
                    </a>
                    <a href="#">
                      <Heading as="p" className="!text-gray-900_01 text-center">
                        Careers
                      </Heading>
                    </a>
                    <a href="#">
                      <Heading as="p" className="!text-gray-900_01 text-center">
                        Policy
                      </Heading>
                    </a>
                    <a href="#">
                      <Heading as="p" className="!text-gray-900_01 text-center">
                        Contact
                      </Heading>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
