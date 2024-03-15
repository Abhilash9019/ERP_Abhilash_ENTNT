import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Button, Img, Text } from "../../components";
import AllProductsColumnlorem from "../../components/AllProductsColumnlorem";
import Header from "../../components/Header";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";
import { Link } from "react-router-dom";

export default function AllproductsPage() {
  
  const [collapsed, setCollapsed] = React.useState(false);
  
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
            <Img src="images/img_group.svg" alt="image" className="h-[48px] mt-8 ml-[42px] mr-28 md:mx-5" />
            <Menu
              menuItemStyles={{
                button: {
                  padding: "15px",
                  gap: "8px",
                  fontWeight: 500,
                  fontSize: "14px",
                  [`&:hover, &.ps-active`]: { color: "#ffffff", backgroundColor: "#003f62 !important" },
                },
              }}
              rootStyles={{ ["&>ul"]: { gap: "16px" } }}
              className="flex flex-col items-center justify-start w-full mt-[45px] mb-[1291px] px-6 md:gap-[16.00px] sm:px-5"
            >
              <Link to={"/dashboardhome"}>
              <MenuItem
                icon={<Img src="images/img_dashboaard.svg" alt="dashboaard_one" className="h-[16px] w-[16px]" />}
              >
               Dashboard
              </MenuItem>
              </Link> 
              <Link to={"/allproducts"}> 
              <MenuItem
                icon={<Img src="images/img_albums_white_a700_01.svg" alt="albums_one" className="h-[16px] w-[16px]" />}
              >
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
            <div className="flex flex-col items-center justify-start w-[94%] md:w-full">
              <div className="flex flex-row justify-between items-center w-full">
                <div className="flex flex-col items-start justify-start gap-[3px]">
                  <Heading size="lg" as="h1" className="!text-gray-900_01 !font-rubik">
                    All Products
                  </Heading>
                  <Heading size="s" as="h2" className="!text-black-900_a2 opacity-0.8">
                    Home &gt; All Products
                  </Heading>
                </div>
                <div className="flex flex-row justify-center">
                <Link to="/productlist">
                  <Button
                    size="lg"
                    shape="round"
                    
                    leftIcon={<Img src="images/img_addcircle.svg" alt="Add_circle" />}
                    className="w-full gap-2 sm:px-5 tracking-[0.25px] font-rubik uppercase font-medium"
                    
                  >
                      
                      ADD NEW PRODUCT
                  </Button>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-full mt-6 gap-16">
                <div className="w-full gap-3.5 grid-cols-3 md:grid-cols-2 md:gap-5 sm:grid-cols-1 grid">
                  <AllProductsColumnlorem className="flex flex-col items-center justify-start w-full gap-4 p-4 bg-gray-50 rounded-[16px]" />
                  <AllProductsColumnlorem className="flex flex-col items-center justify-start w-full gap-4 p-4 bg-gray-50 rounded-[16px]" />
                  <AllProductsColumnlorem className="flex flex-col items-center justify-start w-full gap-4 p-4 bg-gray-50 rounded-[16px]" />
                  <AllProductsColumnlorem className="flex flex-col items-center justify-start w-full gap-4 p-4 bg-gray-50 rounded-[16px]" />
                  <AllProductsColumnlorem className="flex flex-col items-center justify-start w-full gap-4 p-4 bg-gray-50 rounded-[16px]" />
                  <AllProductsColumnlorem className="flex flex-col items-center justify-start w-full gap-4 p-4 bg-gray-50 rounded-[16px]" />
                  <AllProductsColumnlorem className="flex flex-col items-center justify-start w-full gap-4 p-4 bg-gray-50 rounded-[16px]" />
                  <AllProductsColumnlorem className="flex flex-col items-center justify-start w-full gap-4 p-4 bg-gray-50 rounded-[16px]" />
                  <AllProductsColumnlorem className="flex flex-col items-center justify-start w-full gap-4 p-4 bg-gray-50 rounded-[16px]" />
                  <AllProductsColumnlorem className="flex flex-col items-center justify-start w-full gap-4 p-4 bg-gray-50 rounded-[16px]" />
                  <AllProductsColumnlorem className="flex flex-col items-center justify-start w-full gap-4 p-4 bg-gray-50 rounded-[16px]" />
                  <AllProductsColumnlorem className="flex flex-col items-center justify-start w-full gap-4 p-4 bg-gray-50 rounded-[16px]" />
                </div>
                <div className="flex flex-row justify-start items-center w-[38%] md:w-full gap-4">
                  <div className="flex flex-row justify-start w-[10%]">
                    <Button shape="round" className="w-full tracking-[0.25px] font-inter uppercase font-medium">
                      1
                    </Button>
                  </div>
                  <div className="flex flex-row justify-start w-[10%]">
                    <Button
                      variant="outline"
                      shape="round"
                      className="w-full tracking-[0.25px] font-inter uppercase font-medium"
                    >
                      2
                    </Button>
                  </div>
                  <div className="flex flex-row w-[25%] gap-4">
                    <div className="flex flex-row justify-center w-[42%]">
                      <Button
                        variant="outline"
                        shape="round"
                        className="w-full tracking-[0.25px] font-inter uppercase font-medium"
                      >
                        3
                      </Button>
                    </div>
                    <div className="flex flex-row justify-center w-[42%]">
                      <Button
                        variant="outline"
                        shape="round"
                        className="w-full tracking-[0.25px] font-inter uppercase font-medium"
                      >
                        4
                      </Button>
                    </div>
                  </div>
                  <Text as="p" className="tracking-[0.25px] !font-inter uppercase">
                    ...
                  </Text>
                  <div className="flex flex-row justify-start w-[12%]">
                    <Button
                      variant="outline"
                      shape="round"
                      className="w-full tracking-[0.25px] font-inter uppercase font-medium"
                    >
                      10
                    </Button>
                  </div>
                  <div className="flex flex-row justify-start w-[23%]">
                    <Button
                      variant="outline"
                      shape="round"
                      rightIcon={<Img src="images/img_arrowright_gray_900_01.svg" alt="arrow_right" />}
                      className="w-full gap-1 tracking-[0.25px] font-inter uppercase font-medium"
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full mt-[100px] gap-[15px]">
                <div className="h-px w-full bg-gray-900_33" />
                <div className="flex flex-row justify-center w-full">
                  <div className="flex flex-row justify-start w-[22%] gap-4">
                    <Heading as="h3" className="!text-gray-900_01 text-center">
                      About
                    </Heading>
                    <a href="#">
                      <Heading as="h4" className="!text-gray-900_01 text-center">
                        Careers
                      </Heading>
                    </a>
                    <a href="#">
                      <Heading as="h5" className="!text-gray-900_01 text-center">
                        Policy
                      </Heading>
                    </a>
                    <Heading as="h6" className="!text-gray-900_01 text-center">
                      Contact
                    </Heading>
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
