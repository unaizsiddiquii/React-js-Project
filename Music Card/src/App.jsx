import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
function App() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Tum hi ho",
      artist: "Arjit Singh",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1513180978247-f4bb79c6460a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Kuch is tarha",
      artist: "Atif Aslam",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1515010137531-66995c7f40e6?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Dillagi",
      artist: "Nursat Fateh Ali Khan",
      added: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1489094889106-39069373d6ef?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Khaab",
      artist: "Akhil",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1588693951525-7b0be0fc710f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Taras",
      artist: "Jasmine Sandalas",
      added: true,
    },
  ];
  const [songData, setSongData] = useState(data);
  const handleAddFav = (index) => {
    setSongData((prev) => {
      return prev.map((item, itemIndex) => {
        if (index === itemIndex) {
          return { ...item, added: !item.added };
        }
        return item;
      });
    });
  };

  return (
    <>
      <div className="w-full h-screen bg-blue-950 ">
        <NavBar data={songData}></NavBar>
        <div className="px-20  flex flex-wrap gap-10 mt-32">
          {songData.map((obj, index) => (
            <Card
              data={obj}
              index={index}
              handleAddFav={handleAddFav}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default App;
