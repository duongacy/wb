import type { NextPage } from "next";
import RightArrow from "@/components/svg/common/RightArrow";
import Image from "next/image";
import Layout from "@/components/Layout";

const items: {
  title: string;
  describe: string;
  btns: string[];
  img: string;
}[] = [
  {
    title: "The Difference Between UI & Frontend Developers",
    describe:
      "Why there is a need to split duties into FE and UI development? what is the main difference between . . .",
    btns: ["Bussiness", "Jamstack"],
    img: "/images/12.webp",
  },
  {
    title: " 5 Examples of Great B2B & SAAS Jamstack Websites ",
    describe:
      " Looking for some great examples of B2B & SaaS Jamstack websites? Here are five we think may be . . .",
    btns: ["Bussiness", "Web Development"],
    img: "/images/4.webp",
  },
  {
    title: " From Idea To a Website – How To Take Care Of The Process? ",
    describe:
      " Building a good website from an idea turned into a well-prepared project it’s not as easy as it . . .",
    btns: ["Bussiness", "Web Development"],
    img: "/images/6.webp",
  },
  {
    title: " How To Calculate The Cost of Jamstack Website Development? ",
    describe:
      "Learn how the cost of your Jamstack website is formed and how to calculate them. Check the examples . . .",
    btns: ["Bussiness", "Hihi"],
    img: "/images/7.webp",
  },
  {
    title: "How to make your website development project successful? ",
    describe:
      "Communication is the key to a successful website development project. We have some advice on how to . . .",
    btns: ["Bussiness", "Jamstack"],
    img: "/images/8.webp",
  },
];
const Home: NextPage = () => {
  return (
    <Layout>
      <div className="max-w-[1080px] mx-auto">
        <div className="px-[32px] laptop:px-0 pt-[32px] tablet:pt-[96px]">
          <div className="text-[36px] mb-[16px] tablet:mb-[48px] text-error font-800">
            BUSINESS
          </div>
          <div className="text-[22px] leading-[1.5] font-400 tracking-[0.04em]">
            <p>Want to build or accelerate your digital business?</p>
            <p>It’s time to make technology your competitive advantage!</p>
            <p>
              Learn to use the power of technology to accelerate your growth and
              achieve company strategic objectives.
            </p>
            <p>Faster, easier, cheaper, and in a much more efficient way!</p>
          </div>
        </div>
        <div className="grid  grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 py-[96px] mx-auto gap-[40px] tablet:gap-[60px] laptop:gap-[80px] px-[32px] laptop:px-0">
          {items.map((item, key) => (
            <div className="group cursor-pointer" key={`item-${key}`}>
              <div className="w-full aspect-[5/3] relative mb-[20px]">
                <Image src={item.img} layout="fill"></Image>
              </div>
              <div className="flex gap-[8px]">
                {item.btns.map((item2, key2) => (
                  <a
                    key={`btn${key2}`}
                    href=""
                    className="block h-[24px] leading-[24px] bg-neutral-light50 px-8px rounded-[4px] font-600"
                  >
                    {item2}
                  </a>
                ))}
              </div>
              <div className="mt-[22px]">
                <div>
                  <a
                    href=""
                    className="text-[22px] uppercase group-hover:text-error font-900 transition duration-300"
                  >
                    {item.title}
                  </a>
                  <div
                    className="pt-[16px]"
                    style={{
                      wordSpacing: "2px",
                    }}
                  >
                    <p>{item.describe}</p>
                  </div>
                  <div className="mt-[10px]">
                    <div className="transform group-hover:translate-x-[10px] transition duration-300">
                      <RightArrow />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
