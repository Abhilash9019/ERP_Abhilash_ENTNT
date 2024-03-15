import React from "react";

const sizes = {
  "2xl": "text-4xl font-semibold",
  xl: "text-[32px] font-semibold",
  s: "text-base font-semibold",
  md: "text-xl font-semibold",
  xs: "text-sm font-semibold",
  lg: "text-2xl font-semibold",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900 font-opensans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
