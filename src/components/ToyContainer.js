import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, deleteToy}) {
  return (
    <div id="toy-collection">
      {/**id MUST be in the component version bc it is applied to the component instance not the element instance */}
    {
      [...toys].map((el) => {
        return <ToyCard key={el.id} toy={el} deleteToy={deleteToy}/> 
      })
    }
    </div>
  );
}

export default ToyContainer;
