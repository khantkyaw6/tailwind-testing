import React, { useState, useEffect } from "react";
import LogoInverted from "../assets/images/logo_inverted.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import LogoImg from "../assets/images/logo.png";

const Sub_menu = () => {
  return (
    <div className="hidden group-hover:block bg-pink-500 top-full absolute right-0 text-right whitespace-nowrap rounded-b-md">
      <div className="p-4 font-bold hover:bg-white/5 hover:text-zinc-200 text-pink-200 transition-colors ease-in-out cursor-pointer">
        <span>Single Day Ticket</span>
      </div>
      <div className="p-4 font-bold hover:bg-white/5 hover:text-zinc-200 text-pink-200 transition-colors ease-in-out cursor-pointer">
        <span>7 Days Ticket</span>
      </div>
    </div>
  );
};

const NavBar = () => {
  const [iconShow, setIconShow] = useState(true);
  const [ticketShow, setTicketShow] = useState(false);

  const mobileMenuHandler = () => {
    setIconShow(!iconShow);
  };

  const mobileTicketHandler = () => {
    setTicketShow(!ticketShow);
  };

  return (
    <main className="bg-zinc-200 dark:bg-zinc-900">
      <header className="text-zinc-200">
        <div
          className="z-10 right-0 top-24 fixed w-12 inline-block cursor-pointer rounded-l-lg
          bg-zinc-900  dark:bg-zinc-200 dark:text-zinc-900 text-zinc-200
           p-2 text-3xl"
        >
          <FontAwesomeIcon icon={faSun} className="dark:hidden" />
          <FontAwesomeIcon icon={faMoon} className="hidden dark:inline-block" />
        </div>
        <nav className="sticky top-0 flex bg-gradient-to-r from-rose-500 to-pink-500">
          <div className=" flex items-center p-2 gap-2">
            <img src={LogoInverted} width="50" alt="logo" />
            <div className="font-bold text-2xl font-quicksand">
              tw: <span className="text-sky-900">mf</span>
            </div>
          </div>
          <div className="block md:hidden ml-auto pr-4 cursor-pointer my-auto">
            <button onClick={mobileMenuHandler}>
              <div>
                {iconShow ? (
                  <FontAwesomeIcon icon={faBars} />
                ) : (
                  <FontAwesomeIcon icon={faXmark} />
                )}
              </div>
            </button>
            {!iconShow && (
              <div className="left-0 top-14 absolute w-full bg-gradient-to-r from-rose-500 to-pink-500">
                <div className="relative items-center flex h-full justify-center p-4 text-pink-200 font-bold hover:text-zinc-200 transition hover:bg-white/10">
                  <span>Home</span>
                </div>
                <div className="relative items-center flex h-full justify-center p-4 text-pink-200 font-bold hover:text-zinc-200 transition hover:bg-white/10">
                  <span>Lineup</span>
                </div>
                <div className="relative group  h-full text-pink-200 font-bold hover:text-zinc-200 transition hover:bg-white/10">
                  <div
                    onClick={mobileTicketHandler}
                    className="text-center font-bold p-4"
                  >
                    Tickets
                  </div>
                  {ticketShow && (
                    <div>
                      <div className="relative text-center p-4 text-pink-200 hover:text-zinc-200 hover:bg-white/5">
                        <span>Single Ticket</span>
                      </div>
                      <div className="relative text-center p-4 text-pink-200 hover:text-zinc-200 hover:bg-white/5">
                        <span>7 Days Ticket</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="relative items-center flex h-full justify-center p-4 text-pink-200 font-bold hover:text-zinc-200 transition hover:bg-white/10">
                  <span>Support</span>
                </div>
              </div>
            )}
          </div>
          <div className="md:flex hidden flex-1 items-center justify-end">
            <div className="menu-item">
              <span>Home</span>
            </div>
            <div className="menu-item">
              <span>Lineup</span>
            </div>
            <div className="menu-item group">
              <span>Tickets</span>
              <Sub_menu />
            </div>
            <div className="menu-item">
              <span>Support</span>
            </div>
          </div>
        </nav>
        <div
          style={{ backgroundImage: "url(./src/assets/images/hero.jpg)" }}
          className="bg-cover bg-center bg-fixed min-h-[400px] flex flex-col justify-center items-center h-[calc(100vh-200px)] "
        >
          <div className="bg-white/30 py-2 px-4 text-center rounded-xl backdrop-blur-md">
            <div className="relative">
              <img src={LogoImg} width={"175px"} />
              <div className="items-center  flex justify-center mb-5">
                <div className="flex h-14 mt-[-75px] w-14 items-center justify-center gap-1 rounded-full bg-pink-500">
                  <div className="bg-pink-300 h-2 w-1 animate-wavey"></div>
                  <div className="bg-pink-200 h-3 w-1 animate-wavey"></div>
                  <div className="bg-pink-100 h-4 w-1 animate-wavey"></div>
                  <div className="bg-pink-200 h-3 w-1 animate-wavey"></div>
                  <div className="bg-pink-300 h-2 w-1 animate-wavey"></div>
                </div>
              </div>
            </div>
            <div className="text-5xl font-bold">
              tw:<span className="text-sky-900">mf</span>
            </div>
          </div>
          <div className="mt-3 text-sm font-bold">
            keep me updated with news and promotions
          </div>
          <div className="mt-3 flex gap-2">
            <input
              type="email"
              placeholder="email"
              className="rounded-sm border border-white/40 bg-white/30 backdrop-blur-md p-2 font-bold text-sky-900 placeholder-zinc-500 caret-pink-500 outline-pink-500"
            />

            <div className="cursor-pointer rounded-sm py-2 px-4 bg-pink-500 font-bold transition-colors hover:bg-sky-900 hover:shadow-lg ">
              Subscribe
            </div>
          </div>
        </div>
      </header>
      <div className="max-w-screen-lg mx-auto mt-20 text-zinc-900 dark:text-zinc-200">
        <h2 className="font-bold">Headliners</h2>
        <p>
          Experience the sonic delight from these made-up artists across 7 days
          that music fans are calling "one of the many gigs that will happen
          this year"
        </p>
        <div className="mt-4 flex w-full snap-x overflow-x-auto pb-5 gap-4">
          <div className="min-w-[80%] md:min-w-[40%]">
            <div
              style={{ backgroundImage: "url(./src/assets/images/band1.jpg)" }}
              className="h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md shadow-black/20"
            ></div>
            <h5>Corduory Gary</h5>
            <h6>1st July 9pm - Main Stage</h6>
          </div>
          <div className="min-w-[80%] md:min-w-[40%]">
            <div
              style={{ backgroundImage: "url(./src/assets/images/band2.jpg)" }}
              className="h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md shadow-black/20"
            ></div>
            <h5>Corduory Gary</h5>
            <h6>1st July 9pm - Main Stage</h6>
          </div>
          <div className="min-w-[80%] md:min-w-[40%]">
            <div
              style={{ backgroundImage: "url(./src/assets/images/band3.jpg)" }}
              className="h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md shadow-black/20"
            ></div>
            <h5>Corduory Gary</h5>
            <h6>1st July 9pm - Main Stage</h6>
          </div>
          <div className="min-w-[80%] md:min-w-[40%]">
            <div
              style={{ backgroundImage: "url(./src/assets/images/band4.jpg)" }}
              className="h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md shadow-black/20"
            ></div>
            <h5>Corduory Gary</h5>
            <h6>1st July 9pm - Main Stage</h6>
          </div>
          <div className="min-w-[80%] md:min-w-[40%]">
            <div
              style={{ backgroundImage: "url(./src/assets/images/band5.jpg)" }}
              className="h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md shadow-black/20"
            ></div>
            <h5>Corduory Gary</h5>
            <h6>1st July 9pm - Main Stage</h6>
          </div>
          <div className="min-w-[80%] md:min-w-[40%]">
            <div
              style={{ backgroundImage: "url(./src/assets/images/band6.jpg)" }}
              className="h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md shadow-black/20"
            ></div>
            <h5>Corduory Gary</h5>
            <h6>1st July 9pm - Main Stage</h6>
          </div>
          <div className="min-w-[80%] md:min-w-[40%]">
            <div
              style={{ backgroundImage: "url(./src/assets/images/band7.jpg)" }}
              className="h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md shadow-black/20"
            ></div>
            <h5>Corduory Gary</h5>
            <h6>1st July 9pm - Main Stage</h6>
          </div>
          <div className="min-w-[80%] md:min-w-[40%]">
            <div
              style={{ backgroundImage: "url(./src/assets/images/band1.jpg)" }}
              className="h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md shadow-black/20"
            ></div>
            <h5>Corduory Gary</h5>
            <h6>1st July 9pm - Main Stage</h6>
          </div>
        </div>
        <h2 className="mt-20">Lineup</h2>
        <p className="mt-5">
          Follow the timetable and stage to ensure you don't miss your favourite
          artists
        </p>
        <div className="relative rounded-lg mt-5 bg-zinc-800 py-4 px-2 text-zinc-200">
          <div className="absolute top-0 left-1/2 w-4 ml-[-8px] rounded-full h-full bg-gradient-to-b from-sky-900 via-cyan-900 to-teal-900">
            <div className="sticky top-1/2">
              <div className="relative  h-4 w-4">
                <div className="absolute h-4 w-4 rounded-full animate-ping bg-pink-500 opacity-75"></div>
                <div className="relative h-4 w-4 bg-red-500 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="p-2 bg-zinc-900 my-4 rounded-lg ">1st July</h4>
            </div>
            <div></div>
            <div className="text-right">
              <div className="font-bold">Jackie Chaston</div>
              <div className="text-zinc-400">6pm - Sage Stage</div>
            </div>
            <div></div>
            <div></div>
            <div>
              <div className="font-bold">Jackie Chaston</div>
              <div className="text-zinc-400">6pm - Sage Stage</div>
            </div>
            <div>
              <h4 className="p-2 bg-zinc-900 my-4 rounded-lg ">2nd July</h4>
            </div>
            <div></div>
            <div className="text-right">
              <div className="font-bold">Jackie Chaston</div>
              <div className="text-zinc-400">6pm - Sage Stage</div>
            </div>
            <div></div>
            <div></div>
            <div>
              <div className="font-bold">Jackie Chaston</div>
              <div className="text-zinc-400">6pm - Sage Stage</div>
            </div>
          </div>
        </div>
        <h2 className="mt-20">Tickets</h2>
        <table className="mt-5 w-full border border-zinc-500 border-collapse">
          <thead className="text-lg font-bold">
            <td className="border border-zinc-500 p-3">Ticket</td>
            <td className="border  border-zinc-500 p-3">Price</td>
          </thead>
          <tbody>
            <tr>
              <td className="border border-zinc-500 py-2 px-3">
                Single Ticket
              </td>
              <td className="border border-zinc-500 py-2 px-3">$50</td>
            </tr>
            <tr>
              <td className="border border-zinc-500 py-2 px-3">
                7 days Ticket
              </td>
              <td className="border border-zinc-500 py-2 px-3">$250</td>
            </tr>
          </tbody>
          <caption className="caption-bottom">
            Once they're gone, they're gone!
          </caption>
        </table>
      </div>
    </main>
  );
};

export default NavBar;
