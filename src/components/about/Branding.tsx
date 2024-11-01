"use client";
import Button from "./Button";
import TypeIt from "typeit-react";

export default function Branding() {
  return (
    <>
      <div className="flex flex-col items-left ml-12 mt-24" id="text">
        <div className="text-7xl font-medium gap-16 flex text-neutral-200">
          <TypeIt
            options={{
              strings: ["Simple.", "Secure.", "Take.Notes"],
              waitUntilVisible: true,
            }}
          ></TypeIt>
        </div>
        <Button />
      </div>
    </>
  );
}
