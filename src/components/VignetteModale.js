import { useState } from "react";
//
const VignetteModale = () => {
  const [revele, ChangeReleve] = useState(false);
  function toggle() {
    ChangeReleve(!revele);
  }
  return { revele, toggle };
};
export default VignetteModale;
