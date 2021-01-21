import React from "react";
import Stars from "./Stars";

export default function Theme() {
  return (
    <div>
      <Stars />
      <div className="mode-light smooth">
        <div className="relative">
          <div
            style={{ marginTop: 20, marginLeft: 20 }}
            className="bg-yellow-300 dark:bg-gray-200 w-6 h-6 rounded-full bg-opacity-40 absolute smooth"
          ></div>
          <div
            style={{ marginTop: 30, marginLeft: 45 }}
            className="bg-yellow-300 dark:bg-gray-200 w-5 h-5 rounded-full bg-opacity-40 absolute smooth"
          ></div>
          <div
            style={{ marginTop: 10, marginLeft: 45 }}
            className="bg-yellow-300 dark:bg-gray-200 w-4 h-4 rounded-full bg-opacity-40 absolute smooth"
          ></div>
        </div>
      </div>
    </div>
  );
}
