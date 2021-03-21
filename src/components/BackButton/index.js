import React from "react";
import { useHistory } from "react-router";
import "./BackButton.scss";

export const BackButton = () => {
  const history = useHistory();
  return (
    <div className="back-button" onClick={() => history.goBack()}>
      &lt; &nbsp;Back
    </div>
  );
};
