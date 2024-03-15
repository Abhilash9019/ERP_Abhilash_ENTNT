import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Button, Img, Input, Text } from "../../components";
import Header from "../../components/Header";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";
import { Link } from "react-router-dom";

export default function ProductDetailsPage() {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <>
      <Helmet>
        <title>Abhi's Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full pb-[17px] bg-gray-300">
        <div className="flex md:flex-col justify-center items-start">
          <Sidebar
            width="262px !important"
            collapsedWidth="80px !important"
            collapsed={collapsed}
            onClick={() => {
              setCollapsed(!collapsed);
            }}
            className="flex flex-col h-screen gap-[31px] top-0 p-6 sm:p-5 border-gray-900_33 border-r border-solid bg-gray-50 !sticky overflow-auto"
          >
            <Img src="images/img_group.svg" alt="image" className="h-[48px] mt-2 ml-[18px]" />
            <Menu
              menuItemStyles={{
                button: {
                  padding: "15px",
                  gap: "8px",
                  alignSelf: "start",
                  fontWeight: 500,
                  fontSize: "14px",
                  [`&:hover, &.ps-active`]: { color: "#000000", backgroundColor: "#fefeff !important" },
                },
              }}
              rootStyles={{ ["&>ul"]: { gap: "16px" } }}
              className="flex flex-col self-center w-full mb-[1175px]"
            >
              <Link to={"/dashboardhome"}> <MenuItem
                icon={<Img src="images/img_dashboaard.svg" alt="dashboaard_one" className="h-[16px] w-[16px]" />}
              >
                Dashboard
              </MenuItem></Link>
             <Link to={"/allproducts"}> <MenuItem icon={<Img src="images/img_albums.svg" alt="albums_one" className="h-[16px] w-[16px]" />}>
                All products
              </MenuItem></Link>
             <Link to={"/orderslist"}>
             <MenuItem icon={<Img src="images/img_document_text.svg" alt="image_one" className="h-[16px] w-[16px]" />}>
                Order list
              </MenuItem></Link>
             
             
              <Link to={"/productlist"}> <MenuItem
                icon={
                  <Img
                    src="images/img_document_text_white_a700_01.svg"
                    alt="image_three"
                    className="h-[16px] w-[16px]"
                  />
                }
              >
                add new product
              </MenuItem></Link>
             
            </Menu>
          </Sidebar>
          <div className="flex flex-col items-center gap-[22px] flex-1">
            <Header className="flex self-stretch justify-center items-center p-7 sm:p-5 border-gray-900_33 border-b border-solid bg-gray-50" />
            <div className="flex flex-col w-[94%] md:w-full">
              <div className="flex flex-col items-start gap-1">
                <Heading size="lg" as="h1" className="!font-rubik">
                  Product Details
                </Heading>
                <Heading size="s" as="h2" className="!text-black-900_a2 opacity-0.8">
                  Home &gt; All Products &gt; Product Details
                </Heading>
              </div>
              <div className="flex flex-col items-end mt-6 gap-10 p-6 sm:p-5 bg-white-A700_01 rounded-[16px]">
                <div className="flex md:flex-col self-stretch justify-end items-start gap-[47px]">
                  <div className="flex flex-col gap-[23px] bg-white-A700_01 flex-1 rounded-[16px]">
                    <div className="flex flex-col gap-4">
                      <Heading size="md" as="h3" className="!text-gray-900_01 !font-rubik">
                        Product Name
                      </Heading>
                      <Input shape="round" name="name" placeholder="Enter produt name" className="sm:pr-5" />
                    </div>
                    <div className="flex flex-col gap-3.5">
                      <Heading size="md" as="h4" className="!text-gray-900_01 !font-rubik">
                        Description
                      </Heading>
                      <div>
                        <div className="flex p-2.5 border-gray-900_01 border border-solid rounded-lg">
                          <Text
                            size="s"
                            as="p"
                            className="mb-[138px] ml-[5px] !text-gray-900 tracking-[0.50px] !font-inter"
                          >
                            Enter product summary 
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col pt-0.5 gap-[13px]">
                      <Heading size="md" as="h5" className="!text-gray-900_01 !font-rubik">
                        Category
                      </Heading>
                      <Input shape="round" name="inputfields_one" placeholder="Sneaker" className="sm:pr-5" />
                    </div>
                    <div className="flex flex-col gap-4">
                      <Heading size="md" as="h6" className="!text-gray-900_01 !font-rubik">
                        Brand Name
                      </Heading>
                      <Input shape="round" name="name" placeholder="Addidas" className="sm:pr-5" />
                    </div>
                    <div className="flex sm:flex-col justify-center gap-6">
                      <div className="flex flex-col w-full sm:w-full gap-4">
                        <Heading size="md" as="h5" className="!text-gray-900_01 !font-rubik">
                          SKU
                        </Heading>
                        <Input shape="round" name="inputfields" placeholder="#32A53" className="sm:pr-5" />
                      </div>
                      <div className="flex flex-col w-full sm:w-full gap-3.5">
                        <Heading size="md" as="h5" className="!text-gray-900_01 !font-rubik">
                          Stock Quantity
                        </Heading>
                        <Input shape="round" name="inputfields" placeholder="211" className="sm:pr-5" />
                      </div>
                    </div>
                    <div className="flex sm:flex-col justify-center gap-6">
                      <div className="flex flex-col w-full sm:w-full gap-3.5">
                        <Heading size="md" as="h5" className="!text-gray-900_01 !font-rubik">
                          Regular Price
                        </Heading>
                        <Input shape="round" name="price" placeholder="₹110.40" className="sm:pr-5" />
                      </div>
                      <div className="flex flex-col w-full sm:w-full gap-4">
                        <Heading size="md" as="h5" className="!text-gray-900_01 !font-rubik">
                          Sale Price
                        </Heading>
                        <Input shape="round" name="price" placeholder="₹450" className="sm:pr-5 !text-gray-600_01" />
                      </div>
                    </div>
                    <div className="flex flex-col pt-0.5 gap-[13px]">
                      <Heading size="md" as="h5" className="!text-gray-900_01 !font-rubik">
                        Tag
                      </Heading>
                      <div>
                        <div>
                          <div className="flex p-4 border-gray-900_01 border border-solid rounded-lg">
                            <div className="flex w-[29%] mb-[39px] gap-4">
                              <Button
                                color="blue_gray_900"
                                size="xs"
                                variant="fill"
                                className="w-full tracking-[0.25px] font-inter rounded-[14px]"
                              >
                                
                              </Button>
                              <Button
                                color="blue_gray_900"
                                size="xs"
                                variant="fill"
                                className="w-full tracking-[0.25px] font-inter rounded-[14px]"
                              >
                                
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-[45%] md:w-full gap-6 bg-white-A700_01 rounded-[16px]">
                    <div className="p-2 bg-gray-50 rounded-[16px]">
                      <div className="h-[428px] bg-black-900_33 rounded-lg" />
                    </div>
                    <div className="flex flex-col gap-3.5">
                      <Heading size="md" as="h5" className="!text-gray-900_01 !font-rubik">
                        Product Gallery
                      </Heading>
                      <div className="flex flex-col items-center gap-4 p-4 border-gray-900_01 border border-dashed rounded-lg">
                        <Img src="images/img_ph_image_light.svg" alt="phimagelight" className="h-[64px] w-[64px]" />
                        <div className="flex flex-col items-center gap-2">
                          <Heading size="s" as="h6" className="!text-gray-600 text-center">
                            Drop your imager here, or browse
                          </Heading>
                          <Heading size="s" as="h6" className="!text-gray-600 text-center">
                            Jpeg, png are allowed
                          </Heading>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-6">
                      <div className="flex sm:flex-col justify-center gap-4 p-4 bg-gray-50 flex-1 rounded-lg">
                        <div className="h-[64px] w-[64px] bg-black-900_33 rounded-lg" />
                        <div className="flex flex-col justify-center gap-3.5 py-[9px] flex-1">
                          <Heading size="s" as="h6" className="!text-gray-900_01">
                            Product thumbnail.png
                          </Heading>
                          <div className="h-[4px] mb-1 bg-indigo-A200 relative rounded-sm">
                            <div style={{ width: "47%" }} className="h-full bg-cyan-900 absolute rounded-sm" />
                          </div>
                        </div>
                        <div className="w-[8%] sm:w-full py-4">
                          <Img src="images/img_check_success.svg" alt="image" className="h-[32px] w-full md:w-[32px]" />
                        </div>
                      </div>
                      <div className="flex sm:flex-col justify-center gap-4 p-4 bg-gray-50 flex-1 rounded-lg">
                        <div className="h-[64px] w-[64px] bg-black-900_33 rounded-lg" />
                        <div className="flex flex-col justify-center gap-3.5 py-[9px] flex-1">
                          <Heading size="s" as="h6" className="!text-gray-900_01">
                            Product thumbnail.png
                          </Heading>
                          <div className="h-[4px] mb-1 bg-indigo-A200 relative rounded-sm">
                            <div style={{ width: "47%" }} className="h-full bg-cyan-900 absolute rounded-sm" />
                          </div>
                        </div>
                        <div className="w-[8%] sm:w-full py-4">
                          <Img
                            src="images/img_check_success.svg"
                            alt="checksuccess"
                            className="h-[32px] w-full md:w-[32px]"
                          />
                        </div>
                      </div>
                      <div className="flex sm:flex-col justify-center items-center gap-4 p-4 bg-gray-50 flex-1 rounded-lg">
                        <div className="h-[64px] w-[64px] bg-black-900_33 rounded-lg" />
                        <div className="flex flex-col justify-center gap-3.5 py-[9px] flex-1">
                          <Heading size="s" as="h6" className="!text-gray-900_01">
                            Product thumbnail.png
                          </Heading>
                          <div className="h-[4px] mb-1 bg-indigo-A200 relative rounded-sm">
                            <div style={{ width: "47%" }} className="h-full bg-cyan-900 absolute rounded-sm" />
                          </div>
                        </div>
                        <Button size="sm" shape="square" className="w-[32px]">
                          <Img src="images/img_check_success_cyan_900.svg" />
                        </Button>
                      </div>
                      <div className="flex sm:flex-col justify-center gap-4 p-4 bg-gray-50 flex-1 rounded-lg">
                        <div className="h-[64px] w-[64px] bg-black-900_33 rounded-lg" />
                        <div className="flex flex-col justify-center gap-3.5 py-[9px] flex-1">
                          <Heading size="s" as="h6" className="!text-gray-900_01">
                            Product thumbnail.png
                          </Heading>
                          <div className="h-[4px] mb-1 bg-indigo-A200 relative rounded-sm">
                            <div style={{ width: "47%" }} className="h-full bg-cyan-900 absolute rounded-sm" />
                          </div>
                        </div>
                        <div className="w-[8%] sm:w-full py-4">
                          <Img
                            src="images/img_check_success.svg"
                            alt="checksuccess"
                            className="h-[32px] w-full md:w-[32px]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-row sm:flex-col w-[43%] md:w-full gap-4">
                  <div className="flex justify-center w-full sm:w-full">
                    <Button
                      color="gray_900_01"
                      size="md"
                      variant="fill"
                      shape="round"
                      className="w-full sm:px-5 tracking-[0.25px] font-rubik uppercase font-medium"
                    >
                      Update
                    </Button>
                  </div>
                  <div className="flex justify-center w-full sm:w-full">
                    <Button
                      color="cyan_900"
                      size="md"
                      variant="fill"
                      shape="round"
                      className="w-full sm:px-5 tracking-[0.25px] font-rubik uppercase font-medium"
                    >
                      Delete
                    </Button>
                  </div>
                  <div className="flex justify-center w-full sm:w-full">
                    <Button
                      color="gray_900_01"
                      size="md"
                      shape="round"
                      className="w-full sm:px-5 tracking-[0.25px] font-rubik uppercase font-medium"
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-16 gap-[15px]">
                <div className="h-px bg-gray-900_33" />
                <div className="flex justify-center">
                  <div className="flex justify-center gap-4">
                    <a href="#" className="self-start">
                      <Heading as="p" className="!text-gray-900_01 text-center">
                        About
                      </Heading>
                    </a>
                    <a href="#" className="self-start">
                      <Heading as="p" className="!text-gray-900_01 text-center">
                        Careers
                      </Heading>
                    </a>
                    <Heading as="p" className="self-end !text-gray-900_01 text-center">
                      Policy
                    </Heading>
                    <a href="#" className="self-start">
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
