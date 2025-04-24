import React from "react";
import { Tabs, TabsList, TabsTrigger } from "./tabs";
import { NavLink } from "react-router-dom";

const NavigationTabs: React.FC = () => {
  return (
    <Tabs defaultValue="grid" className="w-full">
      <TabsList>
        <TabsTrigger asChild value="routines">
          <NavLink to="/routines">Routines</NavLink>
        </TabsTrigger>
        <TabsTrigger asChild value="grid">
          <NavLink to="/grid">Weekly Grid</NavLink>
        </TabsTrigger>
        <TabsTrigger asChild value="Insights">
          <NavLink to="/insights">Weekly Grid</NavLink>
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default NavigationTabs;
