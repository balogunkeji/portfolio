import React from "react";

export const PageLayout = ({ children }: { children: React.ReactNode }) => (
    <div className="w-full h-full ">
           {/*<Header />*/}
           {children}
    </div>
)