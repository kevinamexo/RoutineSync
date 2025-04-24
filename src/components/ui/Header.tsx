import React from "react";
import { Button } from "./button";

const Header = () => {
  return (
    <header className="py-2">
      <div className="mx-auto max-w-5xl py-3 flex items-center justify-between">
        <div className="">
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary via-violet-500 to-primary bg-clip-text text-transparent">
            RoutineSync
          </h1>
          <h2 className="text-slate-400 mt-1 ">
            Build Consistency with weekly routines
          </h2>
        </div>

        {/* Right-side actions (add nav/profile later) */}
        <div className="flex items-center gap-2">
          <Button className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 flex items-center gap-1 rounded-full shadow-md bg-gradient-to-r from-primary to-violet-500 hover:shadow-lg transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-circle-plus h-4 w-4"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M8 12h8"></path>
              <path d="M12 8v8"></path>
            </svg>
            <span className="">New Routine</span>
          </Button>
        </div>
      </div>
      {/* <Separator /> */}
    </header>
  );
};

export default Header;
