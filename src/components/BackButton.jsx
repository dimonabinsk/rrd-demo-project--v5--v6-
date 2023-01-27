import { ChevronLeftIcon } from "@heroicons/react/solid";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function BackButton({ label, children }) {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <button
      onClick={handleGoBack}
      className="flex text-sm font-semibold leading-6 transition-all duration-200 group text-slate-600 hover:text-slate-400 trans"
    >
      <ChevronLeftIcon className="h-6 " />
      {children || label}
    </button>
  );
}
