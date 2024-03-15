import React from "react";

const sizes = {
  xs: "text-xs font-normal",
  s: "text-sm font-medium",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-900_01 font-rubik ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
