import { NavLink } from "react-router-dom";

const MenuItem = ({ icon: Icon, name, link, isOpen, isLogout }) => {
  return (
    <NavLink
      to={`/${link}`}
      className={({ isActive }) =>
        `m-2 flex cursor-pointer items-center space-x-4 rounded-md px-4 py-3 text-gray-400 duration-500 hover:bg-cyan-700 hover:text-white ${
          isActive ? "bg-cyan-700 text-white shadow-lg" : ""
        } ${isLogout ? "mt-auto hidden" : ""}`
      }
    >
      <Icon className="text-xl" />
      {isOpen && <span className="text-[14px] overflow-hidden">{name}</span>}
    </NavLink>
  );
};

export default MenuItem;
