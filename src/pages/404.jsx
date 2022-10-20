import React from "react";
import { NavLink } from "react-router-dom";

import { ForbiddenIcon } from "../icons";

const Page404 = () => {
  return (
    <div className="flex flex-col items-center">
      <ForbiddenIcon
        className="w-12 h-12 mt-8 text-blue-500"
        aria-hidden="true"
      />
      <h1 className="text-6xl font-semibold text-gray-700 dark:text-gray-200">
        404
      </h1>
      <p className="text-gray-700 dark:text-gray-300">
        Página no encontrada, favor de checar la url o{" "}
        <NavLink
          className="text-blue-500 hover:underline dark:text-blue-500"
          to="/app/dashboard"
        >
          regresar
        </NavLink>
        .
      </p>
    </div>
  );
};

export default Page404;
