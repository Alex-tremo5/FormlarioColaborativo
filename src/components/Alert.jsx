import React from "react";

const Alert = (props) => {
  let alertType = "";
  if (props.isError) {
    alertType = "alert-danger";
  } else {
    alertType = "alert-success";
  }
  return (
    <div className={`alert ${alertType} mt-2 text-center`} role="alert">
      {props.message}
    </div>
  );
};

export default Alert;
