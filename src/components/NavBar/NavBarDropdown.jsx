import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useSelector } from "react-redux";
import { getCurrentUser } from "../../store/authSlice";
import { NavLink } from "react-router-dom";
import useLogout from "../../hooks/useLogout";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const NavBarDropdown = () => {
  const user = useSelector(getCurrentUser());
  const handleLogout = useLogout();

  return (
    <Menu as="div" className="relative border-l-2">
      <Menu.Button className="flex items-center w-full px-4 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-blue-500 focus:outline-none ">
        <img
          src={user.avatar}
          className="inline-block w-auto h-6 pr-2 rounded-full"
          alt="Logo"
        />
        {user.username}
        <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right rounded-md shadow-lg top-8 bg-white/40 ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div>
            <Menu.Item>
              {({ active }) => (
                <NavLink
                  to="/"
                  className={classNames(
                    active ? "bg-blue-100/40 " : "text-gray-700",
                    "block px-4 py-2.5 text-sm transition-colors duration-200"
                  )}
                >
                  Profile
                </NavLink>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={handleLogout}
                  type="submit"
                  className={classNames(
                    active ? "bg-blue-100/40" : "text-gray-700",
                    "block w-full text-left px-4 py-2.5 text-sm"
                  )}
                >
                  Sign out
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default NavBarDropdown;
