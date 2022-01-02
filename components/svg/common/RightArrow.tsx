import * as React from "react";

interface IRightArrowProps {}

const RightArrow: React.FunctionComponent<IRightArrowProps> = (props) => {
  return (
    <svg
      width={21}
      height={17}
      viewBox="0 0 21 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 8.18164L19 8.18164" stroke="currentColor" />{" "}
      <path
        d="M12.3638 15.7271L19.7278 8.36303L12.3639 0.999375"
        stroke="currentColor"
      />{" "}
    </svg>
  );
};

export default RightArrow;
