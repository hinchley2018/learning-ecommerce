//icons
import { BsCart2 } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      {/* large screens */}
      <div className="hidden items-center justify-between bg-[#1c1716] p-5 text-white md:grid md:grid-flow-col md:gap-x-5">
        {/* website logo */}
        <div className="text-xl font-bold md:text-4xl">
          <a href="/">WebsiteLogo</a>
        </div>

        <div className="grid grid-flow-col items-center justify-center gap-x-4">
          {/* search bar and search button */}
          <div className="relative">
            <form className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full rounded-full px-3 py-2"
              ></input>
            </form>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 items-center rounded-full bg-orange-400 p-3 text-black">
              <FaSearch />
            </button>
          </div>
          {/* products links */}
          <a
            className="transition-all delay-75 hover:text-red-500"
            href="/products"
          >
            OurProducts
          </a>
          {/* cart link */}
          <a className="text-xl hover:text-red-500" href="/cart">
            <BsCart2 />
          </a>
        </div>
      </div>

      {/* smaller screens */}
      <div className="grid grid-flow-row gap-4 bg-[#1c1716] p-5 text-white md:hidden">
        {/* First Row */}
        <div className="grid grid-flow-col items-center justify-between">
          {/* website logo */}
          <div className="text-2xl font-bold">
            <a href="/">WebsiteLogo</a>
          </div>
          {/* your cart and other links */}
          <div className="grid grid-flow-col gap-x-3 px-2 text-xl">
            <a
              className="text-sm transition-all delay-75 hover:text-red-400"
              href="/products"
            >
              OurProducts
            </a>
            <a
              className="transition-all delay-75 hover:text-red-400"
              href="/cart"
            >
              <BsCart2 />
            </a>
          </div>
        </div>
        {/* second row */}
        <div className="relative">
          <form className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-full px-3 py-2"
            ></input>
          </form>
          <button className="absolute right-0 top-0  items-center rounded-full bg-orange-400 p-3 text-black">
            <FaSearch />
          </button>
        </div>
      </div>
    </>
  );
}
