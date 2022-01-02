import React from "react";
import { IconProps } from "formatTypes";

const MapOutline: React.FC<IconProps> = ({ size = "SMALL" }) => {
  switch (size) {
    case "SMALL":
      return (
        <svg
          width={16}
          height={16}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1254_7396)">
            <path
              d="M0.666748 4.00004V14.6667L5.33341 12L10.6667 14.6667L15.3334 12V1.33337L10.6667 4.00004L5.33341 1.33337L0.666748 4.00004Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.33325 1.33337V12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.6667 4V14.6667"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_1254_7396">
              <rect width={16} height={16} fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case "MEDIUM":
      return (
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 6V22L8 18L16 22L23 18V2L16 6L8 2L1 6Z"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 2V18"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 6V22"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "LARGE":
      return (
        <svg
          width={32}
          height={32}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.33325 7.99996V29.3333L10.6666 24L21.3333 29.3333L30.6666 24V2.66663L21.3333 7.99996L10.6666 2.66663L1.33325 7.99996Z"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.6667 2.66663V24"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.3333 8V29.3333"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
};

export default MapOutline;
