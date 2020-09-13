import React from "react";

const Tabs = ({ activeTab, onChange, tabs }) => (
  <div className="tabs">
    {tabs.map((tab) => (
      <div
        className={`tabs__item ${tab === activeTab && "tabs__item_active"}`}
        onClick={() => onChange(tab)}
      >
        {tab}
      </div>
    ))}
  </div>
);

export default Tabs;
