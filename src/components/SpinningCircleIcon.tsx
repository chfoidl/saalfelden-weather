import React, { FC } from "react";
import classNames from "classnames";


/**
 * SpinningCircleIcon component.
 *
 * We need to generate unique ids for the linearGradient ids for
 * currentColor to work on gradient stops, when multiple instances
 * of this component appear on the same screen.
 *
 * @param props - Component props.
 * @param props.size - The icon size.
 * @param props.width - The icon width.
 * @param props.height - The icon height.
 */
export const SpinningCircleIcon = () => {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames("animate-spin")}
    >
      <path
        d="M4.00261 50C4.00261 37.8 8.84889 26.0998 17.4753 17.4731C26.1018 8.84641 37.8017 4 50.0014 4C62.201 4 73.901 8.84641 82.5274 17.4731C91.1538 26.0998 96.0001 37.8 96.0001 50"
        stroke={`url(#spinning-circle1)`}
        strokeWidth="8"
      />
      <path
        d="M96.0001 50C96.0001 62.2 91.1538 73.9002 82.5274 82.5269C73.901 91.1536 62.201 96 50.0014 96C37.8017 96 26.1018 91.1536 17.4753 82.5269C8.84889 73.9002 4.00261 62.2 4.00261 50"
        stroke={`url(#spinning-circle2)`}
        strokeWidth="8"
      />
      <path
        opacity="0.8"
        d="M4.0026 50C3.99913 49.6806 3.99913 49.3611 4.0026 49.0417"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id={`spinning-circle1`}
          x1="4.00261"
          y1="4"
          x2="96.0001"
          y2="4"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity="0" stopColor="currentColor" />
          <stop offset="0.5" stopOpacity="0.1" stopColor="currentColor" />
          <stop offset="1" stopOpacity="0.5" stopColor="currentColor" />
        </linearGradient>
        <linearGradient
          id={`spinning-circle2`}
          x1="4.00261"
          y1="50"
          x2="96.0001"
          y2="50"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="currentColor" />
          <stop offset="1" stopOpacity="0.5" stopColor="currentColor" />
        </linearGradient>
      </defs>
    </svg>
  );
};
