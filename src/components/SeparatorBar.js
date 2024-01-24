import React from 'react'

const SeparatorBar = ({ size }) => (
    <div className="flex justify-center items-center mb-20">
        <div className={` ${size === "big"
            ? "w-[800px] h-[3px] bg-dark dark:bg-light m-0 sm:bg-dark sm:dark:bg-light"
            : "w-[200px] h-[3px] bg-dark dark:bg-light m-0 sm:bg-dark sm:dark:bg-light"
            } }
        `}></div>
    </div>
);

export default SeparatorBar