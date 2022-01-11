import React from "react";
import "./widgetLg.css";

const ComponentLg = ({ name, date, amount, type }) => {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <tr className="widgetLgTr">
      <td className="widgetLgUser">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_fFToRmfKO8medWPYhS_5D06SNyHQzyJB5g&usqp=CAU"
          alt=""
          className="widgetLgImg"
        />
        <span className="widgetLgName">{name}</span>
      </td>
      <td className="widgetLgDate">{date}</td>
      <td className="widgetLgAmount">{amount}</td>
      <td className="widgetLgStatus">
        <Button type={type} />
      </td>
    </tr>
  );
};

export default ComponentLg;
