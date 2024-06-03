"use client"

import {useContext} from "react";
import { ThemeContext } from "@/components/context/ThemeContext";

const DarkModeToggle = () => {
    const { toggle, mode } = useContext(ThemeContext)
    return (
        <div onClick={toggle} className="w-[42px] h-[24px] border-[1.5px] border-solid border-[#53c28b70] rounded-[30px] flex items-center justify-between p-[2px] relative cursor-pointer">
            <div className="text-[12px]">🌙</div>
            <div className="text-[12px]">🔆</div>
            <div className="w-[15px] h-[15px] bg-[#53c28b] rounded-full absolute" style={mode === 'light' ? { left: '2px' } : { right: '2px' }}></div>
        </div>
    )
}

export default DarkModeToggle