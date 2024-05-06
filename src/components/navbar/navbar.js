import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navlinks, socials } from "../../constants";

const Navbar = () => {
  const [active, setIsActive] = useState("");

  return (
    <section className="bg-[#0e584c] text-[#fff] p-4">
      <div className="flex items-center justify-around">
        <div>
          <Link to="/" className="text-3xl">
            ADMOF FARMS
          </Link>
        </div>
        <ul className="flex gap-4">
          {navlinks.map((navlink, index) => (
            <li key={index}>
              <NavLink
                className={`${
                  active === navlink.title ? "text-[#ffd700]" : ""
                } text-lg hover:text-[#ffd700]`}
                onClick={() => {
                  setIsActive(navlink.title);
                }}
              >
                {navlink.title}
              </NavLink>
            </li>
          ))}
        </ul>

        <div>
          <ul className="flex gap-4">
            {socials.map((social, index) => (
              <li key={index}>
                <NavLink
                  to={social.link}
                  className="text-lg hover:text-[#ffd700]"
                >
                  {social.icon}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
