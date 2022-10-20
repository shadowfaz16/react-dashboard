import React from "react";

const Main = ({ children }) => {
  return (
    <main className="h-full overflow-y-auto pb-10">
      <div className="container grid px-6 md:px-36 mx-auto">{children}</div>
    </main>
  );
};

export default Main;
