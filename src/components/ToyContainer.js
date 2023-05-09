import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys}) {
  return (
    <div id="toy-collection">
      {
        [...toys].map((el) => {
          return <ToyCard key={el.id} toy={el}/>
        })
      }
    </div>
  );
}

export default ToyContainer;
