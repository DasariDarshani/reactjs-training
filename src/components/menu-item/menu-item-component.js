import React from "react";
import { useHistory } from "react-router";
import "./menu-item-styles.scss";
const MenuItem = (props) => {
  const history = useHistory();
  const redirect = () => {
    // window.location.href = props.redirectUrl;
    history.push(props.redirectUrl);
  };
  return (
    <div className="menu-item">
      <div className="content">
        <img src={props.imageUrl} alt="img"></img>
        <h1 className="title">{props.title}</h1>
        <span className="subtitle">{props.subtitle}</span>
        <br></br>
        <button className="redirect-button" onClick={redirect}>
          Click
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
