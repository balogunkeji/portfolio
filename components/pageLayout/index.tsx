import {Header} from "./header";
import React from "react";

export const PageLayout = ({ children }: { children: React.ReactNode }) => (
    <div className="w-full h-full px-[4%] py-[2%]">
        <Header />
        {children}
    </div>
)