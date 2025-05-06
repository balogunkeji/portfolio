import React from 'react';

const FancyButton = ({ text = 'Know more', variant = 'filled' }) => {
    const baseClasses =
        'relative inline-flex items-center justify-center group w-full max-w-[300px] h-[60px] rounded-[24px] px-[16px]';
    const filledClasses = 'bg-[#fff]';
    const outlineClasses = 'bg-transparent border border-[#fff]';

    return (
        <div className={`${baseClasses} ${variant === 'filled' ? filledClasses : outlineClasses}`}>
            {variant === 'filled' ? (
                <>
                    <div className="flex transition-opacity duration-300 group-hover:opacity-0 text-center text-[#000] items-center justify-between w-full">
                        <span>{text}</span>
                        <svg className="btn-arrow" xmlns="http://www.w3.org/2000/svg" width="16px" viewBox="0 0 24 24" fill="none">
                            <path d="M1.5 22.0833L22.0833 1.5M22.0833 1.5V21.26M22.0833 1.5H2.32333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </div>
                    <div className="px-[16px] absolute inset-0 opacity-0 text-[#000] group-hover:opacity-100 transition-transform duration-300 group-hover:-translate-y-1/4 flex justify-between items-center w-full">
                        <span>{text}</span>
                        <svg className="btn-arrow" xmlns="http://www.w3.org/2000/svg" width="16px" viewBox="0 0 24 24" fill="none">
                            <path d="M1.5 22.0833L22.0833 1.5M22.0833 1.5V21.26M22.0833 1.5H2.32333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </div>
                </>
            ) : (
                <div className="flex justify-between items-center w-full text-[#fff]">
                    <span>{text}</span>
                    <svg className="btn-arrow" xmlns="http://www.w3.org/2000/svg" width="16px" viewBox="0 0 24 24" fill="none">
                        <path d="M1.5 22.0833L22.0833 1.5M22.0833 1.5V21.26M22.0833 1.5H2.32333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </div>
            )}
        </div>
    );
};

export default FancyButton;
