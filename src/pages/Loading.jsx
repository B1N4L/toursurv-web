import React from "react";
import logo from "../assets/logo.png";


export default function Loading() {
return (
<div className="w-full min-h-screen flex items-center justify-center bg-white p-4">
<div className="flex flex-col items-center gap-3">
<img src={logo} alt="Loading Logo" className="w-12 animate-pulse" />
<p className="text-gray-500 text-sm tracking-wide">loading...</p>
</div>
</div>
);
}