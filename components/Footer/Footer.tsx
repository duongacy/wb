import Image from "next/image";
import React from "react";
import SmallLink from "../common/SmallLink";
import { Facebook, Github, Instagram, Linkin, RightArrow } from "../svg/common";
import Youtube from "../svg/common/Youtube";

interface FooterProps {}
export default function Footer({}: FooterProps) {
  return (
    <footer className="bg-black pt-[120px] pb-[75px] px-[32px] ">
      <div className="max-w-[1080px] mx-auto">
        <div className="flex flex-col laptop:flex-row gap-[32px] laptop:gap-[150px]">
          <div>
            <div className="text-[48px] laptop:text-[64px] font-900 leading-[1.15em] text-error mb-[16px]">
              HAVE A QUESTION?
            </div>
            <div className="text-[48px] laptop:text-[64px] font-900 leading-[1.15em] text-white">
              CONTACT US DIRECTLY.
            </div>
          </div>
          <div>
            <div className="w-[110px] h-[118px] relative">
              <Image src="/images/1.png" layout="fill" />
            </div>
          </div>
        </div>
        <div className="mt-[32px] laptop:mt-[72px]">
          <button className="bg-error h-[50px] px-[50px] text-white uppercase font-700 relative group ">
            <div className="absolute left-[20px] transform top-[50%] -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition duration-500">
              <RightArrow />
            </div>
            <div className="absolute transition-all duration-500  bg-white bg-opacity-50 left-0 top-0 right-[100%] bottom-0 w-0 group-hover:w-full"></div>
            contact us
          </button>
        </div>
        <div className="mt-[84px] flex flex-col laptop:flex-row gap-[80px]">
          <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-[20px] laptop:gap-[50px] laptop:w-3/4 text-white">
            <div>
              <div className="font-700 pb-[13px] text-[18px] border-b-[1px] border-neutral-dark50">
                About
              </div>
              <div className="flex flex-col text-[12px] font-600 mt-[12px]">
                <SmallLink className="leading-[30px]">What we do</SmallLink>
                <SmallLink className="leading-[30px]">Our work</SmallLink>
                <SmallLink className="leading-[30px]">About us</SmallLink>
                <SmallLink className="leading-[30px]">Career</SmallLink>
                <SmallLink className="leading-[30px]">Blog</SmallLink>
              </div>
            </div>
            <div>
              <div className="font-700 pb-[13px] text-[18px] border-b-[1px] border-neutral-dark50">
                Services
              </div>
              <div className="flex flex-col text-[12px] font-600 mt-[12px]">
                <SmallLink className="leading-[30px]">
                  Web App Development
                </SmallLink>
                <SmallLink className="leading-[30px]">
                  Mobile App Development
                </SmallLink>
                <SmallLink className="leading-[30px]">
                  Team Augumentation
                </SmallLink>
                <SmallLink className="leading-[30px]">Trainings</SmallLink>
                <SmallLink className="leading-[30px]">
                  Storefront Development
                </SmallLink>
                <SmallLink className="leading-[30px]">
                  Front-end Development
                </SmallLink>
              </div>
            </div>
            <div>
              <div className="font-700 pb-[13px] text-[18px] border-b-[1px] border-neutral-dark50">
                Specialties
              </div>
              <div className="flex flex-col gap-[8px] text-[12px] font-600 mt-[12px]">
                <SmallLink className="leading-[30px]">
                  React Developers
                </SmallLink>
                <SmallLink className="leading-[30px]">
                  React Native Developers
                </SmallLink>
                <SmallLink className="leading-[30px]">
                  Node.JS Developers
                </SmallLink>
                <SmallLink className="leading-[30px]">
                  Gatsby Developers
                </SmallLink>
                <SmallLink className="leading-[30px]">
                  Next.JS Developers
                </SmallLink>
                <SmallLink className="leading-[30px]">
                  JAMStack Development
                </SmallLink>
              </div>
            </div>
          </div>
          <div className="text-white flex-auto">
            <div className="font-700 pb-[13px] text-[18px] border-b-[1px] border-neutral-dark50">
              Pagepro LTD
            </div>
            <div className="flex flex-col gap-[8px] text-[12px] font-600 mt-[12px] ">
              <SmallLink className="leading-[30px]">
                International House
              </SmallLink>
              <SmallLink className="leading-[30px]">
                24 Holborn Viadut
              </SmallLink>
              <SmallLink className="leading-[30px]">London EC1A 2BN</SmallLink>
            </div>
          </div>
        </div>
        <div className="mt-[90px] flex flex-col laptop:flex-row justify-between gap-[30px] laptop:gap-[80px]">
          <div className="flex flex-col tablet:flex-row text-[12px] text-white gap-[12px] laptop:w-3/4">
            <div>
              <SmallLink className="mr-[20px]">Privacy Policy</SmallLink>
              <SmallLink>Cookies Policy</SmallLink>
            </div>
            <div className="text-[12px]">
              © All rights reserved. Pagepro Ltd.
            </div>
          </div>
          <div className="flex gap-[20px] text-white laptop:flex-auto">
            <SmallLink className="block w-[20px] h-[20px]">
              <Facebook />
            </SmallLink>
            <SmallLink className="block w-[20px] h-[20px]">
              <Instagram />
            </SmallLink>
            <SmallLink className="block w-[20px] h-[20px]">
              <Linkin />
            </SmallLink>
            <SmallLink className="block w-[20px] h-[20px]">
              <Github />
            </SmallLink>
            <SmallLink className="block w-[20px] h-[20px]">
              <Youtube />
            </SmallLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
