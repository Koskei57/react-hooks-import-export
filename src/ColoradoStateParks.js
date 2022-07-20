import React from "react";
import MesaVerde from "./parks/MesaVerde";
import * as RMFunctions from "./parks/RockyMountain";
import howManyParks from "./parks/howManyParks";

function ColoradoStateParks() {
  console.log(RMFunctions.trees);
  RMFunctions.wildlife();
  RMFunctions.elevation();
   return (
    <div>
      <MesaVerde />
    </div>
  );
}
 
export default ColoradoStateParks