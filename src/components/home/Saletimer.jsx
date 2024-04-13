
import React, { useEffect, useState } from "react";
import { dealimg1 } from "../../assets";
import { Link } from "react-router-dom";

const Saletimer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "December 31, 2024";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="saletimer">
      <div className="w-full overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="w-full">
            <img alt="imagde" src={dealimg1} width={800} height={450} className="w-full h-full" />
          </div>
          <div className="w-full bg-themePrimary-0 flex flex-col justify-center py-2 px-2">
            <div className="flex flex-wrap flex-col items-center">
              <p className="text-center text-white text-lg font-medium mb-3">
                This week only! Ends 9/25.
              </p>
              <h2 className="text-center text-3xl xl:text-4xl mb-4 text-white">
                Save 20% Off Women’s tops
              </h2>
              <div id="countdown">
                <ul className="counter-list text-center text-white flex flex-wrap justify-center items-center mb-3">
                  <li>
                    <span id="days">{days}</span> days
                  </li>
                  <li>
                    <b className="text-2xl md:text-4xl">:</b>
                  </li>
                  <li>
                    <span id="hours">{hours}</span> Hours
                  </li>
                  <li>
                    <b className="text-2xl md:text-4xl">:</b>
                  </li>
                  <li>
                    <span id="minutes">{minutes}</span> Minutes
                  </li>
                  <li>
                    <b className="text-2xl md:text-4xl">:</b>
                  </li>
                  <li>
                    <span id="seconds">{seconds}</span> Seconds
                  </li>
                </ul>
              </div>
              <Link
                to="/"
                className="text-base font-bold uppercase border bg-white border-white px-6 py-4  rounded-md hover:bg-transparent hover:text-white transition-all"
              >
                Get it Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Saletimer;
