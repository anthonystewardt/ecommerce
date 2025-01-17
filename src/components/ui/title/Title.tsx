"use client";
import react from "react";
import { titleFont } from "@/config/fonts";
import { redirect } from "next/navigation";
interface Props {
  title: string;
  subtitle?: string;
  className?: string;
  color?: string;
}

export const Title = ({ title, subtitle, className, color = "text-zinc-800" }: Props) => {

  const goToHome = () => {
    console.log('redirecting to home')
    redirect("/");
  }

  return (
    <div className={`mt-3 ${className} cursor-pointer `} onClick={() => goToHome()} >
      <h1
        className={`${titleFont.className} antialiased text-4xl text-center ${color} font-semibold my-7`}
      >
        {title}
      </h1>

      {subtitle && <h3 className="text-xl mb-5 text-center text-slate-700">{subtitle}</h3>}
    </div>
  );
};
