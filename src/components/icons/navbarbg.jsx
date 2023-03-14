import React from "react";

const Navbarbg = () => {
  return (
    <svg
      width="1440"
      height="132"
      viewBox="0 0 1440 132"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="720.5" cy="37.5" rx="104.5" ry="94.5" fill="#EAE9E4" />
      <path d="M0 0H1440V83H0V0Z" fill="#EAE9E4" />
      <mask id="path-3-inside-1_0_1063" fill="white">
        <path d="M0 0H1440V79H0V0Z" />
      </mask>
      <path d="M0 0H1440V79H0V0Z" fill="#EAE9E4" />
      <path
        d="M1440 77H0V81H1440V77Z"
        fill="black"
        mask="url(#path-3-inside-1_0_1063)"
      />
      <g clip-path="url(#clip0_0_1063)">
        <path
          d="M820 33.5C820 85.077 775.292 127 720 127C664.708 127 620 85.077 620 33.5C620 -18.077 664.708 -60 720 -60C775.292 -60 820 -18.077 820 33.5Z"
          fill="#EAE9E4"
          stroke="black"
          stroke-width="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_0_1063">
          <rect
            width="202"
            height="51"
            fill="white"
            transform="translate(619 77)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Navbarbg;
