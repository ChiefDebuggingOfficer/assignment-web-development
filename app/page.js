"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState("00:00:00");
  const [date, setDate] = useState("00/00/0000");
  const [window, setWindow] = useState(false);

  const checkTime = (i) => {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  };

  useEffect(() => {
    const startTime = () => {
      const today = new Date();
      let day = today.getDate();
      let month = today.getMonth();
      month = checkTime(month + 1);
      let year = today.getFullYear();
      setDate(day + "/" + month + "/" + year);
      let hours = today.getHours();
      let minutes = today.getMinutes();
      let seconds = today.getSeconds();
      minutes = checkTime(minutes);
      seconds = checkTime(seconds);
      setTime(hours + ":" + minutes + ":" + seconds);
      setTimeout(startTime, 1000);
    };

    startTime();
  }, []);

  return (
    <div className="w-screen h-screen p-8 flex flex-col items-center justify-center">
      <Image
        alt="background-image"
        src={require("@/assets/background.jpg")}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />
      <div
        onClick={() => {
          setWindow(!window);
        }}
        className="flex flex-col items-center justify-center cursor-pointer absolute top-5 right-5"
      >
        <Image
          alt="folder-image"
          src={require("@/assets/folder.png")}
          className="h-[50px] w-[50px]"
        />
        <div className="text-xs mt-2 text-center">
          Click Here <br /> For Resume
        </div>
      </div>
      <div
        style={window ? {} : { display: "none" }}
        className="p-2 bg-white h-[700px] w-[1200px]"
      >
        <iframe
          className="h-full w-full"
          src="https://widgets.sociablekit.com/linkedin-profile-posts/iframe/25549078"
        ></iframe>
      </div>

      <footer className="bg-[#00000080] h-[60px] absolute bottom-0 left-0 w-full flex flex-row justify-between items-center p-4">
        <Image
          alt="start-image"
          src={require("@/assets/start.png")}
          className="h-[40px] w-[40px]"
        />
        <div className="flex flex-col justify-center items-center">
          <div className="text-sm">{time}</div>
          <div className="text-sm">{date}</div>
        </div>
      </footer>
    </div>
  );
}
