"use client";
import Main from "@/components/layouts/Main";
import { useEffect, useState } from "react";
export default function Home() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      setLoader(false);
    }, 2000);
  }, []);
  return (
    <>
      {loader ? (
        <div className="preloader">
          <div className="spin">
            <div className="cube1"></div>
            <div className="cube2"></div>
          </div>
        </div>
      ) : null}
      <Main />
    </>
  );
}
