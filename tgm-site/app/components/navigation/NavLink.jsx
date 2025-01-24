import React from 'react';
import Link from "next/link";

const NavLink = ({label, link, newTab, icon }) => {
  return (
    <div key={label} className="w-full h-auto">
    <Link
      href={link}
      target={newTab ? "_blank" : "_self"}
      className="font-thin text-sm hover:text-emerald"
      aria-label={label}
    >
      {label}
    </Link>
  </div>
  )
};

// returns a div containing next.js Link

export default NavLink;
