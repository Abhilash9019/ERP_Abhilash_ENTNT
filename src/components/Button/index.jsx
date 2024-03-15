import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-lg",
};
const variants = {
  fill: {
    cyan_900: "bg-cyan-900",
    gray_900_01: "bg-gray-900_01 text-white-A700_01",
    gray_900_0c: "bg-gray-900_0c",
  },
  outline: {
    gray_900_01: "border-gray-900_01 border border-solid text-gray-900_01",
  },
};
const sizes = {
  lg: "h-[48px] px-[26px] text-sm",
  md: "h-[40px] px-2.5",
  sm: "h-[32px] px-4 text-sm",
  xs: "h-[27px] px-2",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  variant = "fill",
  size = "sm",
  color = "gray_900_01",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["lg", "md", "sm", "xs"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["cyan_900", "gray_900_01", "gray_900_0c"]),
};

export { Button };
