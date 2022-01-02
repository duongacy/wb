import RightArrow from "@/components/svg/common/RightArrow";
import Image from "next/image";
import React, { HTMLProps } from "react";
import SmallLink from "../common/SmallLink";
import Logo from "../svg/common/logo";

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  return (
    <>
      <div className="h-[60px] flex justify-between px-[32px] items-center">
        <div className="flex items-center h-full divide-x divide-neutral-dark30">
          <div className="pr-[20px]">
            <Logo />
          </div>
          <div className="text-[12px] font-600 pl-[20px] h-[40px] leading-[40px] hidden laptop:block">
            REACT & FRONT-END DEVELOPMENT BLOG
          </div>
        </div>
        <div className="text-[12px] font-500 h-full items-center gap-[20px] hidden tablet:flex">
          <div className="gap-[20px] hidden tablet:flex">
            <SmallLink>Case Studies</SmallLink>
            <SmallLink>Services</SmallLink>
            <SmallLink>About</SmallLink>
            <SmallLink>Career</SmallLink>
            <SmallLink>Blog</SmallLink>
          </div>
          <button className="bg-error text-white px-[15px] h-[32px]">
            Hire Us
          </button>
        </div>
        <div className="tablet:hidden">
          <button className="group w-[25px] h-[25px]">
            <div className="flex flex-col gap-[4px]">
              <div className="h-[2px] w-[22px] bg-error transform  group-focus:rotate-45 group-focus:translate-y-[3px] group-focus:-translate-x-[3px] group-focus:w-[22px] transition-all duration-500"></div>
              <div className="h-[2px] w-[22px] bg-error transform group-focus:-rotate-45 group-focus:-translate-y-[3px] group-focus:-translate-x-[3px] group-focus:w-[22px] transition-all duration-500"></div>
            </div>
          </button>
        </div>
      </div>
      <div className="bg-black text-white hidden tablet:block laptop:px-[180px]">
        <div className="flex items-center h-[50px] text-[12px] divide-x divide-neutral-dark70">
          <SmallLink className="px-[25px] leading-[50px]">All</SmallLink>
          <SmallLink className="px-[25px] leading-[50px]">React JS</SmallLink>
          <SmallLink className="px-[25px] leading-[50px]">
            React Native
          </SmallLink>
          <SmallLink className="px-[25px] leading-[50px]">Jamstack</SmallLink>
          <SmallLink className="px-[25px] leading-[50px]">CTO guide</SmallLink>
          <SmallLink className="px-[25px] leading-[50px]">Web Dev</SmallLink>
          <SmallLink className="px-[25px] leading-[50px]">Mobile Dev</SmallLink>
          <SmallLink className="px-[25px] leading-[50px]">Bussiness</SmallLink>
        </div>
      </div>
    </>
  );
}
