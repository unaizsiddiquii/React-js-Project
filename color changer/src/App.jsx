import React, { useState } from "react";

const App = () => {
  const [color, setColor] = useState("blue");
  return (
    <div className="w-full h-screen duration-200" style={{ background: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button
            className=" outline-none text-black shadow-lg px-3 py-2 rounded-full"
            style={{ background: "red" }}
            onClick={() => setColor("red")}
          >
            RED
          </button>
          <button
            className=" outline-none text-black shadow-lg px-3 py-2 rounded-full"
            style={{ background: "blue" }}
            onClick={() => setColor("blue")}
          >
            BLUE
          </button>
          <button
            className=" outline-none text-black shadow-lg px-3 py-2 rounded-full"
            style={{ background: "olive" }}
            onClick={() => setColor("olive")}
          >
            OLIVE
          </button>
          <button
            className=" outline-none text-black shadow-lg px-3 py-2 rounded-full"
            style={{ background: "gray" }}
            onClick={() => setColor("gray")}
          >
            GRAY
          </button>
          <button
            className=" outline-none text-white shadow-lg px-3 py-2 rounded-full"
            style={{ background: "green" }}
            onClick={() => setColor("green")}
          >
            GREEN
          </button>
          <button
            className=" outline-none text-black shadow-lg px-3 py-2 rounded-full"
            style={{ background: "yellow" }}
            onClick={() => setColor("yellow")}
          >
            YELLOW
          </button>
          <button
            className=" outline-none text-black shadow-lg px-3 py-2 rounded-full"
            style={{ background: "orange" }}
            onClick={() => setColor("orange")}
          >
            ORANGE
          </button>
          <button
            className=" outline-none text-black shadow-lg px-3 py-2 rounded-full"
            style={{ background: "aqua" }}
            onClick={() => setColor("aqua")}
          >
            AQUA
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
