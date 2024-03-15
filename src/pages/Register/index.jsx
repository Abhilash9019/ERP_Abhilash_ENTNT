
import React from "react";
import { Helmet } from "react-helmet";
import { CheckBox, Text, Input, Heading, Img } from "../../components";
import RegisterButton from "../../components/RegisterButton";

export default function RegisterPage() {
  return (
    <>
      <Helmet>
        <title>Abhilash's Application3</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row md:flex-col justify-start items-start w-full gap-[26px] md:gap-5 bg-blue-100">
        <Img
          style={{marginTop:"10px"}}
          src="https://st2.depositphotos.com/1760420/5432/i/450/depositphotos_54324565-stock-photo-online-shopping-and-e-commerce.jpg"
          alt="imagefifteen"
          className="w-[59%] h-screen md:w-full md:h-[1024px] object-cover"
        />

        <div className="flex flex-col items-start justify-start w-[39%] md:w-full mt-[83px] gap-[23px] px-10 md:mt-0 sm:px-5" style={{marginTop:"3px"}}>
          <div className="flex flex-col items-start justify-start pt-[3px] gap-1.5" >
            <a href="#">
              <Heading size="2xl" as="h1" className="!text-gray-900_01 !font-rubik">
                Register
              </Heading>
            </a>
            <Heading size="md" as="h2" className="!text-gray-900_01">
              Sign up with
            </Heading>
          </div>
          <div className="flex flex-row sm:flex-col w-full gap-6">
            <div className="flex flex-row justify-center w-[30%] md:w-full p-4 border-gray-900_01 border border-solid rounded-[12px]">
              <Img src="images/img_logos_google_icon.svg" alt="logosgoogle_one" className="h-[32px] w-[32px]" />
            </div>
            <div className="flex flex-row justify-center w-[30%] md:w-full p-4 border-gray-900_01 border border-solid rounded-[12px]">
              <Img src="images/img_ic_baseline_apple.svg" alt="icbaseline_one" className="h-[32px] w-[32px]" />
            </div>
            <div className="flex flex-row justify-center w-[30%] md:w-full p-4 border-gray-900_01 border border-solid rounded-[12px]">
              <Img src="images/img_logos_facebook.svg" alt="logosfacebook" className="h-[32px] w-[32px]" />
            </div>
          </div>
          <Heading size="md" as="h2" className="h-[28px] !text-gray-900_01">
            OR
          </Heading>
          <div className="flex flex-col items-start justify-start gap-[19px]">
            <Heading size="lg" as="h2" className="!text-gray-900_01 !font-rubik">
              Your Name
            </Heading>
            <Input shape="round" type="text" name="name" placeholder="First Name" className="w-full sm:w-full" />
            <Input shape="round" type="text" name="lastName" placeholder="Last Name" className="w-full sm:w-full" />
          </div>
          <div className="flex flex-col items-start justify-start w-full gap-[18px]">
            <Heading size="lg" as="h2" className="!text-gray-900_01 !font-rubik">
              Login Details
            </Heading>
            <Input shape="round" type="email" name="email" placeholder="Email" className="w-full sm:w-full" />
            <div className="flex flex-row justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full gap-1">
                <Input
                  shape="round"
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full md:h-auto"
                />
                <Text size="xs" as="p" className="!text-blue_gray-900 tracking-[0.40px] !font-inter">
                  Minimum 8 characters with at least one uppercase, one lowercase, one special character and a number
                </Text>
              </div>
            </div>
          </div>
          <CheckBox
            shape="square"
            name="keepmeloggedin"
            label="Keep me logged in"
            id="keepmeloggedin"
            className="gap-2 text-gray-900_01 text-left font-semibold"
          />
          <RegisterButton style={{marginBottom:"0"}} className="flex flex-row justify-start sm:w-full" />
        </div>
      </div>
    </>
  );
}
