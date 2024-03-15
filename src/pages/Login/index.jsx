
import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Img, CheckBox, Input, Button } from "../../components";
import RegisterButton from "../../components/RegisterButton";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title>Abhilash's Application3</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row md:flex-col justify-between items-center w-full pr-[122px] md:gap-10 md:pr-5 bg-blue-100">
        <Img
          src="https://st2.depositphotos.com/1760420/5432/i/450/depositphotos_54324565-stock-photo-online-shopping-and-e-commerce.jpg"
          alt="imagefifteen"
          className="w-[59%] h-screen md:w-full md:h-[1024px] object-cover"
        />

        <div className="flex flex-col items-start justify-start w-[37%] md:w-full gap-[23px]">
          <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-[7px]">
            <a href="#">
              <Heading size="xl" as="h1" className="!text-gray-900_01 !font-rubik">
                Login
              </Heading>
            </a>
            <a href="#">
              <Heading size="s" as="h2" className="!text-gray-600 underline">
                Forgot your password?
              </Heading>
            </a>
          </div>
          <Input shape="round" type="email" name="password" placeholder="Email" className="w-full sm:w-full" />
          <Input shape="round" type="password" name="password" placeholder="Password" className="w-full sm:w-full" />
          <CheckBox
            shape="square"
            name="keepmeloggedin"
            label="Keep me logged in"
            id="keepmeloggedin"
            className="gap-2 text-gray-900_01 text-left font-semibold"
          />
          <Link to={"/dashboardhome"}>
            <Button
              className="flex flex-row justify-start sm:w-full"
              style={{
                padding: '10px 20px', /* Adjust padding as needed */
                backgroundColor: 'blue', /* Green background color */
                color: 'white', /* White text color */
                border: 'none', /* No border */
                borderRadius: '5px', /* Rounded corners */
                cursor: 'pointer', /* Cursor style */
                fontSize: '16px', /* Font size */
                transition: 'background-color 0.3s', /* Smooth transition on hover */
              }}
            >
              Login
            </Button>
          </Link>
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
          <Heading size="s" as="h2" className="flex !text-gray-900_01">
            <span className="text-gray-900_01">By clicking &#39;Log In&#39; you agree to our website </span>
            <a href="#" className="text-gray-900_01 underline">
              Terms & Conditions.
            </a>
          </Heading>
        </div>
      </div>
    </>
  );
}
