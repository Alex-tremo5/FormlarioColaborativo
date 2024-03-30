import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({ icon, ...props }) => {
  return (
    <FontAwesomeIcon icon={icon} {...props} style={{ color: "#000000" }} />
  );
};

export default Icon;
