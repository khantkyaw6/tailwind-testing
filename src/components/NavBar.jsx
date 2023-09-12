import React from "react";
import LogoInverted from "../assets/images/logo_inverted.png";

const navTitles = [
  {
    id: "home",
    name: "Home",
  },
  {
    id: "line up",
    name: "Lineup",
  },
  {
    id: "tickets",
    name: "Tickets",
  },
  {
    id: "support",
    name: "Support",
  },
];

const NavBar = () => {
  return (
    <main>
      <header className="text-zinc-200">
        <nav className="sticky top-0 flex bg-gradient-to-r from-rose-500 to-pink-500">
          <div className=" flex items-center p-2 gap-2">
            <img src={LogoInverted} width="50" alt="logo" />
            <div className="font-bold text-2xl font-quicksand">
              tw: <span className="text-sky-900">mf</span>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-end">
            {navTitles.map((title) => (
              <div
                key={title.id}
                className="flex h-full relative items-center cursor-pointer font-bold text-pink-200 p-2 hover:text-zinc-200 hover:bg-white/10 transition ease-in-out"
              >
                <span>{title.name}</span>
              </div>
            ))}
          </div>
        </nav>
      </header>
    </main>
  );
};

export default NavBar;
