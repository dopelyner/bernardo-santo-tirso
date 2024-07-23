import React from 'react'

const SeparatorBar = ({ size, className }) => (
    <div className={`flex justify-center items-center mb-20 ${className}`}>
        <div className={` ${size === "big"
            ? "w-[800px] h-[3px] xs:w-[260px] bg-dark dark:bg-light m-0 sm:bg-dark sm:dark:bg-light"
            : "w-[200px] h-[3px] xs:w-[150px] bg-dark dark:bg-light m-0 sm:bg-dark sm:dark:bg-light"
            } }
        `}></div>
    </div>
);

export default SeparatorBar