import React from 'react'

interface defaultProps {
    title: string;
    className?: string;
}

const BorderButton: React.FC<defaultProps> = ({ title, className }) => {
    return (
        <div>
            <button className={`border border-[#696CFF] py-[7px] px-3 md:px-5 text-[10px] md:text-[14px] font-[500] rounded-[6px] ${className}`}>{title}</button>
        </div>
    )
}

export default BorderButton