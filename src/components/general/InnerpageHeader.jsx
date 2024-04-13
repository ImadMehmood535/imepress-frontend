import React from "react";
import { Link } from "react-router-dom";

const InnerpageHeader = (props) => {
  return (
    <div className="innerpage-header bg-[#F7F7F7] text-center py-20">
      <div className="container max-w-[1440px]">
        <h2 className="text-bold mb-5  capitalize ">{props.pageTitle}</h2>
        <div className="breadcrumb">
          <ol
            className="flex items-center whitespace-nowrap justify-center"
            aria-label="Breadcrumb"
          >
            <li className="inline-flex items-center">
              <Link
                className="flex items-center text-sm text-[#A0A0A0] hover:text-themeSecondry-0 focus:outline-none focus:text-themeSecondry-0 dark:focus:text-blue-500 "
                to="#"
              >
                Homepage
              </Link>
              <svg
                className="flex-shrink-0 size-5 text-gray-400 dark:text-gray-600 mx-2"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M6 13L10 3"
                  stroke="currentColor"
                  strokeLinecap="round"
                />
              </svg>
            </li>

            <li
              className="inline-flex items-center text-sm font-semibold text-[#121212] truncate "
              aria-current="page"
            >
              {props.breadcrums}
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default InnerpageHeader;
