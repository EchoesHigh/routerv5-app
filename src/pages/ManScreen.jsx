import React from "react";
import Card from "../components/Card";
import { Characters } from "../models/Characters";

const ManScreen = () => {
  const men = Characters.filter((character) => character.type === "h");

  return (
    <div className="container mt-3">
      <h1>Men Screen</h1>
      <hr />
      <div className="row justify-content-center">
        {men.map((man) => (
          <Card key={man.id} {...man} />
        ))}
      </div>
    </div>
  );
};

export default ManScreen;
