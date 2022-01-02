import * as React from "react";

const SmallLink: React.FC<React.HTMLProps<HTMLAnchorElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <a
      {...props}
      className={`hover:text-error cursor-pointer transition-all duration-300 ${className}`}
    >
      {children}
    </a>
  );
};

export default SmallLink;
