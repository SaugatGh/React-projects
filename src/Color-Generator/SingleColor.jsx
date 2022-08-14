import React, { useState } from "react";
import { useEffect } from "react";
import Utils from "./Utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  // console.log(hexColor)
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hex = Utils(...rgb);
  const hexValue = `#${hexColor}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      className={`color${index > 10 && "color-light"} `}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">Copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
