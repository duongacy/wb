import React from "react";
import { IconProps } from "formatTypes";

const EditOutline: React.FC<IconProps> = ({ size = "SMALL" }) => {
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
          <path
            d="M7.33325 2.66663H2.66659C2.31296 2.66663 1.97382 2.8071 1.72378 3.05715C1.47373 3.3072 1.33325 3.64634 1.33325 3.99996V13.3333C1.33325 13.6869 1.47373 14.0261 1.72378 14.2761C1.97382 14.5262 2.31296 14.6666 2.66659 14.6666H11.9999C12.3535 14.6666 12.6927 14.5262 12.9427 14.2761C13.1928 14.0261 13.3333 13.6869 13.3333 13.3333V8.66663"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.3333 1.66665C12.5985 1.40144 12.9582 1.25244 13.3333 1.25244C13.7083 1.25244 14.068 1.40144 14.3333 1.66665C14.5985 1.93187 14.7475 2.29158 14.7475 2.66665C14.7475 3.04173 14.5985 3.40144 14.3333 3.66665L7.99992 9.99999L5.33325 10.6667L5.99992 7.99999L12.3333 1.66665Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
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
            d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.5 2.49998C18.8978 2.10216 19.4374 1.87866 20 1.87866C20.5626 1.87866 21.1022 2.10216 21.5 2.49998C21.8978 2.89781 22.1213 3.43737 22.1213 3.99998C22.1213 4.56259 21.8978 5.10216 21.5 5.49998L12 15L8 16L9 12L18.5 2.49998Z"
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
            d="M14.6667 5.33337H5.33341C4.62617 5.33337 3.94789 5.61433 3.4478 6.11442C2.9477 6.61452 2.66675 7.2928 2.66675 8.00004V26.6667C2.66675 27.374 2.9477 28.0522 3.4478 28.5523C3.94789 29.0524 4.62617 29.3334 5.33341 29.3334H24.0001C24.7073 29.3334 25.3856 29.0524 25.8857 28.5523C26.3858 28.0522 26.6667 27.374 26.6667 26.6667V17.3334"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24.6667 3.33331C25.1972 2.80288 25.9166 2.50488 26.6667 2.50488C27.4169 2.50488 28.1363 2.80288 28.6667 3.33331C29.1972 3.86374 29.4952 4.58316 29.4952 5.33331C29.4952 6.08346 29.1972 6.80288 28.6667 7.33331L16.0001 20L10.6667 21.3333L12.0001 16L24.6667 3.33331Z"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
};

export default EditOutline;
