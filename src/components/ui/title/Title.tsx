"use client";
import react from "react";
import { titleFont } from "@/config/fonts";
import { redirect } from "next/navigation";
interface Props {
  title: string;
  subtitle?: string;
  className?: string;
}

export const Title = ({ title, subtitle, className }: Props) => {

  const goToHome = () => {
    console.log('redirecting to home')
    redirect("/");
  }

  return (
    <div className={`mt-3 ${className} cursor-pointer `} onClick={() => goToHome()} >
      <h1
        className={`${titleFont.className} antialiased text-4xl font-semibold my-7`}
      >
        {title}
      </h1>

      {subtitle && <h3 className="text-xl mb-5">{subtitle}</h3>}
    </div>
  );
};
