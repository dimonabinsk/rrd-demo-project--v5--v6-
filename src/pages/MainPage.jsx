import React from "react";
import { NavLink, Link } from "react-router-dom";
import BackgroundGradient from "../components/BackgroundGradient";
const MainPage = () => {
  return (
    <div className="flex items-center justify-center bg-gray-50 grow ">
      <BackgroundGradient />
      <div className="flex flex-col items-center justify-between px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8">
        <h2 className="relative mb-4 text-3xl font-extrabold tracking-tight text-center text-gray-900 sm:text-4xl">
          <img
            src="/assets/img/rr-logo.svg"
            className="absolute w-24 h-24 left-2/4 -translate-x-2/4 -top-28"
            alt="rr-logo"
          />
          <span className="block">React Router v6</span>
          <span className="block text-indigo-600">
            Are you ready to migrate?
          </span>
        </h2>
        <div className="flex mt-8 lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <NavLink
              to="/posts"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700"
            >
              Get started
            </NavLink>
          </div>
          <div className="inline-flex ml-3 rounded-md shadow">
            <Link
              to={{
                pathname: "https://reactrouter.com/docs/en/v6/upgrading/v5",
              }}
              target="_blank"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-indigo-600 bg-white border border-transparent rounded-md hover:bg-indigo-50"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
