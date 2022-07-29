import { useRouter } from "next/router";
import { Paperclip } from "phosphor-react";
import { useEffect, useState } from "react";
import { ItemMenu } from "./ItemMenu";

export const Menu = () => {
  const { asPath } = useRouter();

  const [showMenuResponsive, setShowMenuResponsive] = useState(false);

  useEffect(() => {
    setShowMenuResponsive(false);
  }, [asPath]);

  const toggleMenu = () => {
    setShowMenuResponsive(!showMenuResponsive);
  };

  return (
    <nav className="bg-black shadow-lg">
      <div className="max-w-[1280px] mx-auto px-5 xl:px-0">
        <div className="flex justify-between">
          <div className="flex">
            <div className="flex items-center py-4">
              <Paperclip size={32} className="mr-10 text-green-500 " />
            </div>

            <div className="hidden md:flex items-center space-x-1 gap-5">
              <ItemMenu title="Início" to="/" active={asPath === "/"} />
              <ItemMenu
                title="Participar"
                to="/vote"
                active={asPath === "/vote"}
              />
              <ItemMenu
                title="Resultado"
                to="/result"
                active={asPath === "/result"}
              />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <ItemMenu
              title="Saiba mais"
              to="/details"
              active={asPath === "/details"}
            />
          </div>

          <div className="md:hidden flex items-center">
            <button className="outline-none" onClick={toggleMenu}>
              <svg
                className=" w-6 h-6 text-gray-100 hover:text-green-500"
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={showMenuResponsive ? "" : "hidden"}>
        <ul className="pl-6">
          <li className="py-3">
            <ItemMenu title="Início" to="/" active={asPath === "/"} />
          </li>
          <li className="py-3">
            <ItemMenu
              title="Participar"
              to="/vote"
              active={asPath === "/vote"}
            />
          </li>
          <li className="py-3">
            <ItemMenu
              title="Resultado"
              to="/result"
              active={asPath === "/result"}
            />
          </li>
          <li className="py-3">
            <ItemMenu
              title="Saiba mais"
              to="/details"
              active={asPath === "/details"}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};
