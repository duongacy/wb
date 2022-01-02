import { IconProps } from "formatTypes";
import React from "react";

const Eye: React.FC<IconProps> = ({ size = "SMALL" }) => {
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
          <g clipPath="url(#clip0_1718_399)">
            <path
              d="M0.666748 7.99996C0.666748 7.99996 3.33341 2.66663 8.00008 2.66663C12.6667 2.66663 15.3334 7.99996 15.3334 7.99996C15.3334 7.99996 12.6667 13.3333 8.00008 13.3333C3.33341 13.3333 0.666748 7.99996 0.666748 7.99996Z"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
              fill="white"
              stroke="white"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_1718_399">
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
            d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
            fill="white"
            stroke="white"
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
            d="M1.33325 16C1.33325 16 6.66658 5.33337 15.9999 5.33337C25.3333 5.33337 30.6666 16 30.6666 16C30.6666 16 25.3333 26.6667 15.9999 26.6667C6.66658 26.6667 1.33325 16 1.33325 16Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20Z"
            fill="white"
            stroke="white"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
};

export default Eye;
