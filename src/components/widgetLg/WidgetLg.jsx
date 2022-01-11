import ComponentLg from "./ComponentLg";
import "./widgetLg.css";

export default function WidgetLg() {
  
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <ComponentLg name="steve jobs" date="23-04-2011" amount="$234.99" type="Approved"/>
      </table>
    </div>
  );
}
