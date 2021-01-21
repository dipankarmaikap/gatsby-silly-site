import React, { useEffect, useState } from "react";

import GenerateStarsArray from "../utils/GenerateStarsArray";
import GenerateCloudsArray from "../utils/GenerateCloudsArray";
export default function Stars() {
  const [stars, setStars] = useState(null);
  const [clouds, setClouds] = useState(null);
  useEffect(() => {
    setStars(GenerateStarsArray(200));
    setClouds(GenerateCloudsArray(20));
  }, []);
  return (
    <>
      <div className="shapes">
        <div className="stars z-10 absolute inset-0 overflow-hidden text-white opacity-0 dark:opacity-100 smooth ">
          {stars &&
            stars.map((star) => {
              return (
                <div
                  className="star"
                  key={star.id}
                  style={{
                    width: star.size,
                    height: star.size,
                    position: "absolute",
                    top: star.x,
                    left: star.y,
                    animationDuration: `${star.animationDuration}s`,
                    animationDelay: `${star.animationDelay}s`,
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              );
            })}
        </div>
        <div className="clouds z-10 absolute inset-0 overflow-hidden text-white opacity-100 dark:opacity-0 shadow-lg smooth">
          {clouds &&
            clouds.map((cloud) => {
              return (
                <div
                  className="cloud"
                  key={cloud.id}
                  style={{
                    width: cloud.size,
                    height: cloud.size,
                    position: "absolute",
                    top: cloud.x,
                    left: cloud.y,
                    animationDuration: `${cloud.animationDuration}s`,
                    animationDelay: `${cloud.animationDelay}s`,
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                  </svg>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
