import React from "react";
import "./widgetSm.css";

const ComponentsSm = ({ name, title }) => {
  return (
    <div>
      <li className="widgetSmListItem">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_fFToRmfKO8medWPYhS_5D06SNyHQzyJB5g&usqp=CAU"
          alt=""
          className="widgetSmImg"
        />
        <div className="widgetSmUser">
          <span className="widgetSmUsername">{name}</span>
          <span className="widgetSmUserTitle">{title}</span>
        </div>
      </li>
    </div>
  );
};

export default ComponentsSm;
